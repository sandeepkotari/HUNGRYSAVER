import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { 
  LogOut, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  MapPin, 
  Phone, 
  Calendar,
  Package,
  Truck,
  Heart,
  Info
} from 'lucide-react'
import AboutSection from './AboutSection'

interface Donation {
  id: string
  donorName: string
  location: string
  foodType: string
  quantity: string
  phone: string
  scheduledTime: string
  status: 'available' | 'accepted' | 'picked_up' | 'completed'
  description: string
}

const mockDonations: Donation[] = [
  {
    id: '1',
    donorName: 'Raj Palace Hotel',
    location: 'Connaught Place, New Delhi',
    foodType: 'Mixed Vegetarian Meals',
    quantity: '50 portions',
    phone: '+91 98765 43210',
    scheduledTime: '2024-01-20 14:00',
    status: 'available',
    description: 'Fresh cooked meals from wedding function. Includes rice, dal, vegetables, and roti.'
  },
  {
    id: '2',
    donorName: 'Green Valley Restaurant',
    location: 'Sector 18, Noida',
    foodType: 'Surplus Buffet Items',
    quantity: '30 portions',
    phone: '+91 87654 32109',
    scheduledTime: '2024-01-20 16:30',
    status: 'available',
    description: 'Buffet surplus including various curries, bread, and desserts.'
  }
]

export default function VolunteerDashboard() {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('donations')
  const [donations, setDonations] = useState<Donation[]>(mockDonations)

  const updateDonationStatus = (donationId: string, newStatus: Donation['status']) => {
    setDonations(prev => prev.map(d => 
      d.id === donationId ? { ...d, status: newStatus } : d
    ))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-blue-100 text-blue-800'
      case 'accepted': return 'bg-yellow-100 text-yellow-800'
      case 'picked_up': return 'bg-orange-100 text-orange-800'
      case 'completed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available': return <Package className="h-4 w-4" />
      case 'accepted': return <Clock className="h-4 w-4" />
      case 'picked_up': return <Truck className="h-4 w-4" />
      case 'completed': return <CheckCircle className="h-4 w-4" />
      default: return <AlertCircle className="h-4 w-4" />
    }
  }

  if (!user) return null

  const isPending = user.status === 'pending'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-primary-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">Hungry Saver</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Status Badge */}
              <div className={`status-badge ${isPending ? 'status-pending' : 'status-approved'}`}>
                {isPending ? (
                  <>
                    <Clock className="h-4 w-4 mr-1" />
                    Under Acceptance
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Approved Volunteer
                  </>
                )}
              </div>
              
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
        {isPending ? (
          /* Restricted View for Pending Volunteers */
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3" />
                <div>
                  <h3 className="text-lg font-medium text-yellow-800">Account Under Review</h3>
                  <p className="text-yellow-700 mt-1">
                    Your volunteer application is being reviewed by our admin team. 
                    You'll receive access to donation tasks once approved.
                  </p>
                </div>
              </div>
            </div>

            <AboutSection />
          </div>
        ) : (
          /* Full Access for Approved Volunteers */
          <div className="space-y-6">
            {/* Welcome Message */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <div>
                  <h3 className="text-lg font-medium text-green-800">Welcome to the Team!</h3>
                  <p className="text-green-700 mt-1">
                    You're now an approved volunteer. Start accepting donations to help feed those in need.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('donations')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'donations'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Available Donations
                </button>
                <button
                  onClick={() => setActiveTab('about')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'about'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  About Our Mission
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === 'donations' ? (
              <div className="space-y-6">
                <div className="grid gap-6">
                  {donations.map((donation) => (
                    <div key={donation.id} className="card donation-card">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{donation.donorName}</h3>
                          <div className="flex items-center text-gray-600 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {donation.location}
                          </div>
                        </div>
                        <div className={`status-badge ${getStatusColor(donation.status)}`}>
                          {getStatusIcon(donation.status)}
                          <span className="ml-1 capitalize">{donation.status.replace('_', ' ')}</span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Food Type</p>
                          <p className="font-medium">{donation.foodType}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Quantity</p>
                          <p className="font-medium">{donation.quantity}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Contact</p>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-1 text-gray-400" />
                            <p className="font-medium">{donation.phone}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Scheduled Time</p>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                            <p className="font-medium">{new Date(donation.scheduledTime).toLocaleString()}</p>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{donation.description}</p>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        {donation.status === 'available' && (
                          <button
                            onClick={() => updateDonationStatus(donation.id, 'accepted')}
                            className="btn-primary"
                          >
                            Accept Donation
                          </button>
                        )}
                        {donation.status === 'accepted' && (
                          <button
                            onClick={() => updateDonationStatus(donation.id, 'picked_up')}
                            className="btn-primary"
                          >
                            Food Taken
                          </button>
                        )}
                        {donation.status === 'picked_up' && (
                          <button
                            onClick={() => updateDonationStatus(donation.id, 'completed')}
                            className="btn-primary"
                          >
                            Donation Complete
                          </button>
                        )}
                        {donation.status === 'completed' && (
                          <div className="flex items-center text-green-600">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            <span className="font-medium">Completed Successfully</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <AboutSection />
            )}
          </div>
        )}
      </main>
    </div>
  )
}