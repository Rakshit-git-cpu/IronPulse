import React, { useState } from 'react';
import { Mail, Phone, Calendar, User, MessageSquare, Trash2, Eye, Archive } from 'lucide-react';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'replied' | 'archived';
}

const ContactManager = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '(555) 123-4567',
      subject: 'membership',
      message: 'Hi, I\'m interested in learning more about your membership options. Could you please provide me with more details about the Premium plan?',
      date: '2025-01-15T10:30:00Z',
      status: 'new'
    },
    {
      id: '2',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      phone: '(555) 987-6543',
      subject: 'personal-training',
      message: 'I would like to book a personal training session. What are your available time slots?',
      date: '2025-01-14T14:15:00Z',
      status: 'read'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      phone: '',
      subject: 'tour',
      message: 'Can I schedule a tour of your facilities? I\'m available weekdays after 5 PM.',
      date: '2025-01-13T09:45:00Z',
      status: 'replied'
    },
    {
      id: '4',
      name: 'Lisa Brown',
      email: 'lisa.brown@email.com',
      phone: '(555) 456-7890',
      subject: 'classes',
      message: 'What group classes do you offer for beginners? I\'m new to fitness and looking for a supportive environment.',
      date: '2025-01-12T16:20:00Z',
      status: 'new'
    }
  ]);

  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const statusColors = {
    new: 'bg-blue-600',
    read: 'bg-yellow-600',
    replied: 'bg-green-600',
    archived: 'bg-gray-600'
  };

  const subjectLabels = {
    membership: 'Membership Inquiry',
    'personal-training': 'Personal Training',
    classes: 'Group Classes',
    tour: 'Gym Tour',
    other: 'Other'
  };

  const handleStatusChange = (id: string, newStatus: ContactSubmission['status']) => {
    setSubmissions(submissions.map(submission => 
      submission.id === id ? { ...submission, status: newStatus } : submission
    ));
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this contact submission?')) {
      setSubmissions(submissions.filter(submission => submission.id !== id));
      if (selectedSubmission?.id === id) {
        setSelectedSubmission(null);
      }
    }
  };

  const handleView = (submission: ContactSubmission) => {
    setSelectedSubmission(submission);
    if (submission.status === 'new') {
      handleStatusChange(submission.id, 'read');
    }
  };

  const filteredSubmissions = submissions.filter(submission => 
    filterStatus === 'all' || submission.status === filterStatus
  );

  const getStatusCount = (status: string) => {
    if (status === 'all') return submissions.length;
    return submissions.filter(s => s.status === status).length;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Contact Form Submissions</h2>
        <div className="text-gray-400">
          Total: {submissions.length} submissions
        </div>
      </div>

      {/* Status Filter */}
      <div className="flex flex-wrap gap-2">
        {[
          { key: 'all', label: 'All' },
          { key: 'new', label: 'New' },
          { key: 'read', label: 'Read' },
          { key: 'replied', label: 'Replied' },
          { key: 'archived', label: 'Archived' }
        ].map(filter => (
          <button
            key={filter.key}
            onClick={() => setFilterStatus(filter.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filterStatus === filter.key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {filter.label} ({getStatusCount(filter.key)})
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Submissions List */}
        <div className="space-y-4">
          {filteredSubmissions.map((submission) => (
            <div 
              key={submission.id} 
              className={`bg-gray-800 rounded-2xl p-6 cursor-pointer hover:bg-gray-750 transition-colors ${
                selectedSubmission?.id === submission.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => handleView(submission)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-bold text-white">{submission.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${statusColors[submission.status]}`}>
                      {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                    <div className="flex items-center space-x-1">
                      <Mail className="h-4 w-4" />
                      <span>{submission.email}</span>
                    </div>
                    {submission.phone && (
                      <div className="flex items-center space-x-1">
                        <Phone className="h-4 w-4" />
                        <span>{submission.phone}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{subjectLabels[submission.subject] || submission.subject}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(submission.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                {submission.message}
              </p>
              
              <div className="flex space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleView(submission);
                  }}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Eye className="h-4 w-4" />
                  <span>View</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStatusChange(submission.id, submission.status === 'archived' ? 'read' : 'archived');
                  }}
                  className="bg-gray-600 text-white px-4 py-2 rounded-xl hover:bg-gray-700 transition-colors"
                >
                  <Archive className="h-4 w-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(submission.id);
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
          
          {filteredSubmissions.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No submissions found</p>
            </div>
          )}
        </div>

        {/* Submission Detail */}
        <div className="bg-gray-800 rounded-2xl p-6">
          {selectedSubmission ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Submission Details</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${statusColors[selectedSubmission.status]}`}>
                  {selectedSubmission.status.charAt(0).toUpperCase() + selectedSubmission.status.slice(1)}
                </span>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-white font-semibold">{selectedSubmission.name}</p>
                    <p className="text-gray-400 text-sm">Name</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-white">{selectedSubmission.email}</p>
                    <p className="text-gray-400 text-sm">Email</p>
                  </div>
                </div>
                
                {selectedSubmission.phone && (
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-white">{selectedSubmission.phone}</p>
                      <p className="text-gray-400 text-sm">Phone</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-white">{subjectLabels[selectedSubmission.subject] || selectedSubmission.subject}</p>
                    <p className="text-gray-400 text-sm">Subject</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-white">{new Date(selectedSubmission.date).toLocaleString()}</p>
                    <p className="text-gray-400 text-sm">Submitted</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Message</h4>
                <div className="bg-gray-700 rounded-xl p-4">
                  <p className="text-gray-300 leading-relaxed">{selectedSubmission.message}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-white font-semibold">Actions</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleStatusChange(selectedSubmission.id, 'replied')}
                    className="bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition-colors"
                  >
                    Mark as Replied
                  </button>
                  <button
                    onClick={() => handleStatusChange(selectedSubmission.id, 'archived')}
                    className="bg-gray-600 text-white py-2 rounded-xl hover:bg-gray-700 transition-colors"
                  >
                    Archive
                  </button>
                </div>
                <button
                  onClick={() => window.open(`mailto:${selectedSubmission.email}?subject=Re: ${subjectLabels[selectedSubmission.subject] || selectedSubmission.subject}`)}
                  className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Reply via Email
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">Select a submission to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactManager;