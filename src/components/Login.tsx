import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Mail, Lock, Heart, Users, Truck } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const success = await login(email, password)
    if (!success) {
      setError('Invalid credentials. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 to-primary-800 p-12 flex-col justify-center">
        <div className="text-white">
          <div className="flex items-center mb-8">
            <Heart className="h-10 w-10 mr-3" />
            <h1 className="text-3xl font-bold">Hungry Saver</h1>
          </div>
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 text-primary-100">
            Help us reduce food waste and feed those in need across India
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <Users className="h-6 w-6 mr-4 text-primary-200" />
              <span className="text-lg">Connect volunteers with donors</span>
            </div>
            <div className="flex items-center">
              <Truck className="h-6 w-6 mr-4 text-primary-200" />
              <span className="text-lg">Efficient food distribution network</span>
            </div>
            <div className="flex items-center">
              <Heart className="h-6 w-6 mr-4 text-primary-200" />
              <span className="text-lg">Make a real difference in communities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="lg:hidden flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-primary-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">Hungry Saver</h1>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to your volunteer account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Demo Accounts:</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Volunteer (Pending):</strong> priya@example.com</p>
              <p><strong>Volunteer (Approved):</strong> rahul@example.com</p>
              <p><strong>Admin:</strong> admin@hungrysaver.org</p>
              <p className="text-xs mt-2">Password: any text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}