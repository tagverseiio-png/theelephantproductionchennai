'use client';

import { useAdmin } from '@/contexts/AdminContext';
import { useRouter } from 'next/navigation';
import { BarChart3, FileText, Image, Users } from 'lucide-react';

export default function AdminDashboard() {
  const { content } = useAdmin();
  const router = useRouter();

  const stats = [
    { icon: FileText, label: 'Total Pages', value: '6', color: 'bg-blue-500' },
    { icon: Image, label: 'Stories', value: content?.stories?.items?.length || '0', color: 'bg-purple-500' },
    { icon: Users, label: 'Services', value: content?.services?.packages?.length || '0', color: 'bg-green-500' },
    { icon: BarChart3, label: 'Media Files', value: '12', color: 'bg-orange-500' },
  ];

  const quickActions = [
    { label: 'Edit Home Page', href: '/admin/dashboard/home', color: 'bg-[#a67b5b]' },
    { label: 'Manage Stories', href: '/admin/dashboard/stories', color: 'bg-[#2c2420]' },
    { label: 'Update Services', href: '/admin/dashboard/services', color: 'bg-[#a67b5b]' },
    { label: 'Media Library', href: '/admin/dashboard/media', color: 'bg-[#2c2420]' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-[#2c2420] mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Manage your website content here.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <span className="text-3xl font-bold text-[#2c2420]">{stat.value}</span>
            </div>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <h2 className="text-xl font-serif text-[#2c2420] mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={() => router.push(action.href)}
              className={`${action.color} text-white p-4 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium`}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-serif text-[#2c2420] mb-4">Getting Started</h2>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-[#a67b5b] rounded-full mt-1.5"></div>
            <p>Click on any menu item in the sidebar to edit that section</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-[#a67b5b] rounded-full mt-1.5"></div>
            <p>All changes are saved locally in your browser</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-[#a67b5b] rounded-full mt-1.5"></div>
            <p>Use the Media Library to manage images and videos</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-[#a67b5b] rounded-full mt-1.5"></div>
            <p>Password: <code className="bg-gray-100 px-2 py-1 rounded">elephant2024</code></p>
          </div>
        </div>
      </div>
    </div>
  );
}
