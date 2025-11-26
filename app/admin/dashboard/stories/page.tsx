'use client';

import { useState, useEffect } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Save, Plus, Trash2 } from 'lucide-react';

export default function StoriesAdmin() {
  const { content, updateContent } = useAdmin();
  const [storiesData, setStoriesData] = useState<any>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (content?.stories) {
      setStoriesData(content.stories);
    }
  }, [content]);

  const handleSave = () => {
    updateContent({
      ...content,
      stories: storiesData
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updateStory = (index: number, field: string, value: string) => {
    const newItems = [...storiesData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setStoriesData({ ...storiesData, items: newItems });
  };

  const addStory = () => {
    const newStory = {
      id: Date.now(),
      type: 'photo',
      title: 'New Story',
      subtitle: 'Location • City',
      imageUrl: '/images/placeholder.jpg',
      featured: false
    };
    setStoriesData({
      ...storiesData,
      items: [...storiesData.items, newStory]
    });
  };

  const deleteStory = (index: number) => {
    const newItems = storiesData.items.filter((_: any, i: number) => i !== index);
    setStoriesData({ ...storiesData, items: newItems });
  };

  if (!storiesData) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-serif text-[#2c2420] mb-2">Manage Stories</h1>
          <p className="text-gray-600">Add, edit, or remove portfolio items</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={addStory}
            className="flex items-center gap-2 px-6 py-3 bg-[#2c2420] text-white rounded hover:bg-[#3d342f] transition-colors"
          >
            <Plus size={18} />
            Add Story
          </button>
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-3 bg-[#a67b5b] text-white rounded hover:bg-[#946b4d] transition-colors"
          >
            <Save size={18} />
            {saved ? 'Saved!' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {storiesData.items.map((story: any, index: number) => (
          <div key={story.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-serif text-lg text-[#2c2420]">Story #{index + 1}</h3>
              <button
                onClick={() => deleteStory(index)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={story.title}
                  onChange={(e) => updateStory(index, 'title', e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input
                  type="text"
                  value={story.subtitle}
                  onChange={(e) => updateStory(index, 'subtitle', e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={story.type}
                  onChange={(e) => updateStory(index, 'type', e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
                >
                  <option value="photo">Photo</option>
                  <option value="film">Film</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <input
                  type="text"
                  value={story.imageUrl}
                  onChange={(e) => updateStory(index, 'imageUrl', e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
                />
              </div>

              {story.type === 'film' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Video URL</label>
                  <input
                    type="text"
                    value={story.videoUrl || ''}
                    onChange={(e) => updateStory(index, 'videoUrl', e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
                  />
                </div>
              )}

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`featured-${index}`}
                  checked={story.featured || false}
                  onChange={(e) => updateStory(index, 'featured', e.target.checked.toString())}
                  className="w-4 h-4 text-[#a67b5b] focus:ring-[#a67b5b]"
                />
                <label htmlFor={`featured-${index}`} className="text-sm text-gray-700">
                  Featured (Larger display)
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
