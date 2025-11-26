'use client';

import { Upload, Image, Video, Trash2, Copy, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MediaFile {
  id: number;
  name: string;
  type: 'image' | 'video';
  url: string;
  size: string;
  uploadedAt: string;
}

export default function MediaAdmin() {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);

  // Load media from localStorage on mount
  useEffect(() => {
    const savedMedia = localStorage.getItem('elephantMedia');
    if (savedMedia) {
      setFiles(JSON.parse(savedMedia));
    }
  }, []);

  // Save media to localStorage whenever it changes
  useEffect(() => {
    if (files.length > 0) {
      localStorage.setItem('elephantMedia', JSON.stringify(files));
    }
  }, [files]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;
    if (!uploadedFiles) return;

    setUploading(true);

    const newFiles: MediaFile[] = [];

    for (let i = 0; i < uploadedFiles.length; i++) {
      const file = uploadedFiles[i];
      
      // Convert file to base64
      const reader = new FileReader();
      const base64Promise = new Promise<string>((resolve) => {
        reader.onload = (e) => {
          resolve(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      });

      const base64Url = await base64Promise;

      const newFile: MediaFile = {
        id: Date.now() + i,
        name: file.name,
        type: file.type.startsWith('image') ? 'image' : 'video',
        url: base64Url,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
        uploadedAt: new Date().toISOString()
      };

      newFiles.push(newFile);
    }

    setFiles([...newFiles, ...files]);
    setUploading(false);
    
    // Reset input
    e.target.value = '';
  };

  const deleteFile = (id: number) => {
    const updated = files.filter(f => f.id !== id);
    setFiles(updated);
    localStorage.setItem('elephantMedia', JSON.stringify(updated));
  };

  const copyUrl = (url: string, id: number) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-[#2c2420] mb-2">Media Library</h1>
        <p className="text-gray-600">Upload and manage images and videos</p>
      </div>

      {/* Upload Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
        <label className="block cursor-pointer">
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleFileUpload}
            disabled={uploading}
            className="hidden"
          />
          <div className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
            uploading 
              ? 'border-[#a67b5b] bg-[#a67b5b]/5' 
              : 'border-gray-300 hover:border-[#a67b5b]'
          }`}>
            <Upload className={`mx-auto mb-4 ${uploading ? 'text-[#a67b5b] animate-bounce' : 'text-gray-400'}`} size={48} />
            <p className="text-lg font-medium text-gray-700 mb-2">
              {uploading ? 'Uploading...' : 'Click to upload files'}
            </p>
            <p className="text-sm text-gray-500">
              Supports: JPG, PNG, MP4, WebM • Multiple files allowed
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Files are stored as base64 in browser storage
            </p>
          </div>
        </label>
      </div>

      {/* Stats */}
      {files.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600">Total Files</p>
            <p className="text-2xl font-bold text-[#2c2420]">{files.length}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600">Images</p>
            <p className="text-2xl font-bold text-[#2c2420]">
              {files.filter(f => f.type === 'image').length}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600">Videos</p>
            <p className="text-2xl font-bold text-[#2c2420]">
              {files.filter(f => f.type === 'video').length}
            </p>
          </div>
        </div>
      )}

      {/* File Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {files.map((file) => (
          <div key={file.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group">
            <div className="aspect-video bg-gray-100 relative overflow-hidden">
              {file.type === 'image' ? (
                <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
              ) : (
                <video src={file.url} className="w-full h-full object-cover" />
              )}
              <button
                onClick={() => deleteFile(file.id)}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                title="Delete file"
              >
                <Trash2 size={16} />
              </button>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                {file.type === 'image' ? (
                  <Image size={16} className="text-gray-400 flex-shrink-0" />
                ) : (
                  <Video size={16} className="text-gray-400 flex-shrink-0" />
                )}
                <p className="text-sm font-medium text-gray-900 truncate" title={file.name}>
                  {file.name}
                </p>
              </div>
              <p className="text-xs text-gray-500 mb-3">{file.size}</p>
              <button 
                onClick={() => copyUrl(file.url, file.id)}
                className="w-full text-xs bg-[#a67b5b] text-white py-2 rounded hover:bg-[#946b4d] transition-colors flex items-center justify-center gap-2"
              >
                {copiedId === file.id ? (
                  <>
                    <Check size={14} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    Copy URL
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {files.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <Image size={64} className="mx-auto mb-4 opacity-50" />
          <p className="text-lg mb-2">No media files yet</p>
          <p className="text-sm">Upload images and videos to get started!</p>
        </div>
      )}
    </div>
  );
}
