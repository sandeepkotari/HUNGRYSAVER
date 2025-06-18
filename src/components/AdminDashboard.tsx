import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { 
  LogOut, 
  Users, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Phone, 
  Mail,
  Calendar,
  Award,
  Activity,
  TrendingUp,
  Heart
} from 'lucide-react'

export default function AdminDashboard() {
  const { user, logout, users, updateUserStatus } = useAuth()
  const [activeTab, setActiveTab] = useState('volunteers')

  if (!user || user.role !== 'admin') return null

  const pendingVolunteers = users.filter(u => u.role === 'volunteer' && u.status === 'pending')
  const approvedVolunteers = users.filter(u => u.role === 'volunteer' && u.status === 'approved')
  const rejectedVolunteers = users.filter(u => u.role === 'volunteer' && u.status === 'rejected')

  const handleApprove = (userId: string) => {
    updateUserStatus(userId, 'approved')
  }

  const handleReject = (userId: string) => {
    updateUserStatus(userId, 'rejected')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-primary-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">Hungry Saver Admin</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome, {user.name}
              </div>
              
              <button
                onClick={logout}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="h-5 w-5 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Pending Reviews</p>
                <p className="text-2xl font-bold text-gray-900">{pendingVolunteers.length}</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Active Volunteers</p>
                <p className="text-2xl font-bold text-gray-900">{approvedVolunteers.length}</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold text-gray-900">{users.filter(u => u.role === 'volunteer').length}</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center">
              <div className="p-2 bg-primary-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Approval Rate</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round((approvedVolunteers.length / Math.max(users.filter(u => u.role === 'volunteer').length, 1)) * 100)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('volunteers')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'volunteers'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Volunteer Management
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'activity'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Activity Monitor
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'volunteers' && (
          <div className="space-y-8">
            {/* Pending Approvals */}
            {pendingVolunteers.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-yellow-600" />
                  Pending Approvals ({pendingVolunteers.length})
                </h2>
                <div className="grid gap-6">
                  {pendingVolunteers.map((volunteer) => (
                    <div key={volunteer.id} className="card volunteer-card">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
                              <Users className="h-6 w-6 text-primary-600" />
                            </div>
                            <div className="ml-4">
                              <h3 className="text-lg font-semibold text-gray-900">{volunteer.name}</h3>
                              <div className="flex items-center text-gray-600">
                                <Mail className="h-4 w-4 mr-1" />
                                {volunteer.email}
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-gray-600">Phone</p>
                              <div className="flex items-center">
                                <Phone className="h-4 w-4 mr-1 text-gray-400" />
                                <p className="font-medium">{volunteer.phone}</p>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Applied Date</p>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                                <p className="font-medium">{new Date(volunteer.joinedDate).toLocaleDateString()}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <p className="text-sm text-gray-600 mb-1">Qualifications</p>
                            <div className="flex items-start">
                              <Award className="h-4 w-4 mr-2 text-gray-400 mt-0.5" />
                              <p className="text-gray-900">{volunteer.qualifications}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3 pt-4 border-t border-gray-200">
                        <button
                          onClick={() => handleApprove(volunteer.id)}
                          className="flex items-center btn-primary"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(volunteer.id)}
                          className="flex items-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                        >
                          <XCircle className="h-4 w-4 mr-2" />
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Approved Volunteers */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Active Volunteers ({approvedVolunteers.length})
              </h2>
              <div className="grid gap-4">
                {approvedVolunteers.map((volunteer) => (
                  <div key={volunteer.id} className="card">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-900">{volunteer.name}</h3>
                          <p className="text-sm text-gray-600">{volunteer.email}</p>
                        </div>
                      </div>
                      <div className="status-badge status-approved">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Active
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Rahul Kumar completed a donation</p>
                    <p className="text-sm text-gray-600">50 meals delivered to shelter - 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <Activity className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">New volunteer application received</p>
                    <p className="text-sm text-gray-600">Priya Sharma applied - 4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                  <Clock className="h-5 w-5 text-yellow-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Donation pickup scheduled</p>
                    <p className="text-sm text-gray-600">Raj Palace Hotel - 6 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}