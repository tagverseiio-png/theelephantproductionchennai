'use client';

import { useState, useEffect } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Save, Eye } from 'lucide-react';

export default function HomePageAdmin() {
  const { content, updateContent } = useAdmin();
  const [homeData, setHomeData] = useState<any>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (content?.home) {
      setHomeData(content.home);
    }
  }, [content]);

  const handleSave = () => {
    updateContent({
      ...content,
      home: homeData
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updateHero = (field: string, value: string) => {
    setHomeData({
      ...homeData,
      hero: { ...homeData.hero, [field]: value }
    });
  };

  const updatePhilosophy = (field: string, value: string) => {
    setHomeData({
      ...homeData,
      philosophy: { ...homeData.philosophy, [field]: value }
    });
  };

  const updateStory = (index: number, field: string, value: string) => {
    const newStories = [...homeData.latestJournals.stories];
    newStories[index] = { ...newStories[index], [field]: value };
    setHomeData({
      ...homeData,
      latestJournals: { ...homeData.latestJournals, stories: newStories }
    });
  };

  if (!homeData) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-serif text-[#2c2420] mb-2">Edit Home Page</h1>
          <p className="text-gray-600">Update hero section, philosophy, and featured stories</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">
            <Eye size={18} />
            Preview
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

      {/* Hero Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-serif text-[#2c2420] mb-4">Hero Section</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title Line 1</label>
            <input
              type="text"
              value={homeData.hero.title1}
              onChange={(e) => updateHero('title1', e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title Line 2</label>
            <input
              type="text"
              value={homeData.hero.title2}
              onChange={(e) => updateHero('title2', e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CTA Button Text</label>
            <input
              type="text"
              value={homeData.hero.ctaText}
              onChange={(e) => updateHero('ctaText', e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Video URL</label>
            <input
              type="text"
              value={homeData.hero.videoUrl}
              onChange={(e) => updateHero('videoUrl', e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
            />
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-serif text-[#2c2420] mb-4">Philosophy Section</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Badge Text</label>
            <input
              type="text"
              value={homeData.philosophy.badge}
              onChange={(e) => updatePhilosophy('badge', e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title Line 1</label>
            <input
              type="text"
              value={homeData.philosophy.title1}
              onChange={(e) => updatePhilosophy('title1', e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title Line 2</label>
            <input
              type="text"
              value={homeData.philosophy.title2}
              onChange={(e) => updatePhilosophy('title2', e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={homeData.philosophy.description}
              onChange={(e) => updatePhilosophy('description', e.target.value)}
              rows={4}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
            />
          </div>
        </div>
      </div>

      {/* Latest Journals */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-serif text-[#2c2420] mb-4">Featured Stories</h2>
        {homeData.latestJournals.stories.map((story: any, index: number) => (
          <div key={story.id} className="mb-6 p-4 border border-gray-200 rounded">
            <h3 className="font-medium text-gray-900 mb-3">Story {index + 1}</h3>
            <div className="grid grid-cols-2 gap-4">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
