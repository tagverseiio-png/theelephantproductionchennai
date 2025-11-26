'use client';

import { useState, useEffect } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Save, Plus, Trash2 } from 'lucide-react';

export default function ServicesAdmin() {
  const { content, updateContent } = useAdmin();
  const [servicesData, setServicesData] = useState<any>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (content?.services) {
      setServicesData(content.services);
    }
  }, [content]);

  const handleSave = () => {
    updateContent({
      ...content,
      services: servicesData
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updatePackage = (index: number, field: string, value: any) => {
    const newPackages = [...servicesData.packages];
    newPackages[index] = { ...newPackages[index], [field]: value };
    setServicesData({ ...servicesData, packages: newPackages });
  };

  const updateFeature = (packageIndex: number, featureIndex: number, value: string) => {
    const newPackages = [...servicesData.packages];
    newPackages[packageIndex].features[featureIndex] = value;
    setServicesData({ ...servicesData, packages: newPackages });
  };

  const addFeature = (packageIndex: number) => {
    const newPackages = [...servicesData.packages];
    newPackages[packageIndex].features.push('New Feature');
    setServicesData({ ...servicesData, packages: newPackages });
  };

  const removeFeature = (packageIndex: number, featureIndex: number) => {
    const newPackages = [...servicesData.packages];
    newPackages[packageIndex].features = newPackages[packageIndex].features.filter((_: any, i: number) => i !== featureIndex);
    setServicesData({ ...servicesData, packages: newPackages });
  };

  if (!servicesData) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-serif text-[#2c2420] mb-2">Edit Services</h1>
          <p className="text-gray-600">Update service packages and pricing</p>
        </div>
        <button 
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-3 bg-[#a67b5b] text-white rounded hover:bg-[#946b4d] transition-colors"
        >
          <Save size={18} />
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      {/* Hero Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-serif text-[#2c2420] mb-4">Hero Section</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={servicesData.hero.title}
              onChange={(e) => setServicesData({
                ...servicesData,
                hero: { ...servicesData.hero, title: e.target.value }
              })}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
            <input
              type="text"
              value={servicesData.hero.subtitle}
              onChange={(e) => setServicesData({
                ...servicesData,
                hero: { ...servicesData.hero, subtitle: e.target.value }
              })}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
            />
          </div>
        </div>
      </div>

      {/* Service Packages */}
      <div className="space-y-6">
        {servicesData.packages.map((pkg: any, index: number) => (
          <div key={pkg.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-serif text-xl text-[#2c2420]">Package {index + 1}</h3>
              {pkg.featured && (
                <span className="bg-[#a67b5b] text-white text-xs px-3 py-1 rounded">Featured</span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={pkg.title}
                  onChange={(e) => updatePackage(index, 'title', e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number</label>
                <input
                  type="text"
                  value={pkg.number}
                  onChange={(e) => updatePackage(index, 'number', e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={pkg.description}
                onChange={(e) => updatePackage(index, 'description', e.target.value)}
                rows={3}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
              <input
                type="text"
                value={pkg.imageUrl}
                onChange={(e) => updatePackage(index, 'imageUrl', e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
              />
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">Features</label>
                <button
                  onClick={() => addFeature(index)}
                  className="text-sm text-[#a67b5b] hover:text-[#946b4d] flex items-center gap-1"
                >
                  <Plus size={14} /> Add Feature
                </button>
              </div>
              <div className="space-y-2">
                {pkg.features.map((feature: string, featureIndex: number) => (
                  <div key={featureIndex} className="flex gap-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => updateFeature(index, featureIndex, e.target.value)}
                      className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#a67b5b]"
                    />
                    <button
                      onClick={() => removeFeature(index, featureIndex)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`featured-${index}`}
                checked={pkg.featured || false}
                onChange={(e) => updatePackage(index, 'featured', e.target.checked)}
                className="w-4 h-4 text-[#a67b5b] focus:ring-[#a67b5b]"
              />
              <label htmlFor={`featured-${index}`} className="text-sm text-gray-700">
                Mark as Featured Package
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
