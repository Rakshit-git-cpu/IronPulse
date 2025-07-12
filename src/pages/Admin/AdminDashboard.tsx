import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  DollarSign, 
  Image, 
  MessageSquare, 
  FileText, 
  Mail,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import MembershipManager from '../../components/Admin/MembershipManager';
import TrainerManager from '../../components/Admin/TrainerManager';
import GalleryManager from '../../components/Admin/GalleryManager';
import ClassScheduleManager from '../../components/Admin/ClassScheduleManager';
import BlogManager from '../../components/Admin/BlogManager';
import TestimonialManager from '../../components/Admin/TestimonialManager';
import ContactManager from '../../components/Admin/ContactManager';
import DashboardOverview from '../../components/Admin/DashboardOverview';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout, user } = useAuth();

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'membership', label: 'Membership Plans', icon: DollarSign },
    { id: 'trainers', label: 'Trainers', icon: Users },
    { id: 'classes', label: 'Class Schedule', icon: Calendar },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'blog', label: 'Blog Posts', icon: FileText },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'contacts', label: 'Contact Forms', icon: Mail },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'membership':
        return <MembershipManager />;
      case 'trainers':
        return <TrainerManager />;
      case 'classes':
        return <ClassScheduleManager />;
      case 'gallery':
        return <GalleryManager />;
      case 'blog':
        return <BlogManager />;
      case 'testimonials':
        return <TestimonialManager />;
      case 'contacts':
        return <ContactManager />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-700">
          <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="mt-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-700 transition-colors ${
                activeTab === item.id ? 'bg-blue-600 text-white' : 'text-gray-300'
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium">{user?.username}</p>
              <p className="text-gray-400 text-sm">Administrator</p>
            </div>
            <button
              onClick={logout}
              className="text-gray-400 hover:text-white"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 h-16 flex items-center justify-between px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <h2 className="text-xl font-semibold text-white capitalize">
            {menuItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
          </h2>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Welcome, {user?.username}</span>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;