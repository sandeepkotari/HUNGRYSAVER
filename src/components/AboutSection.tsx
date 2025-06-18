import React from 'react'
import { TrendingDown, Users, Heart, Target, BarChart3, Globe } from 'lucide-react'

export default function AboutSection() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="card bg-gradient-to-r from-primary-50 to-green-50 border-primary-200">
        <div className="text-center">
          <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Fighting Hunger, Reducing Waste</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hungry Saver connects surplus food from events and restaurants with those who need it most, 
            creating a sustainable solution to both food waste and hunger in India.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card text-center">
          <div className="p-3 bg-red-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <TrendingDown className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">40%</h3>
          <p className="text-gray-600">of food produced in India is wasted annually</p>
        </div>
        
        <div className="card text-center">
          <div className="p-3 bg-orange-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Users className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">194M</h3>
          <p className="text-gray-600">people are undernourished in India</p>
        </div>
        
        <div className="card text-center">
          <div className="p-3 bg-primary-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Target className="h-8 w-8 text-primary-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Zero</h3>
          <p className="text-gray-600">hunger by 2030 - UN Sustainable Development Goal</p>
        </div>
      </div>

      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-6 w-6 text-red-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">The Problem</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>68 million tonnes of food wasted annually in India</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Wedding and event surplus food often goes to landfills</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Lack of efficient distribution networks</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Millions go hungry while food is wasted nearby</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="flex items-center mb-4">
            <Heart className="h-6 w-6 text-primary-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Our Solution</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Real-time food donation platform</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Trained volunteer network for pickup & delivery</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Direct connection to shelters and communities</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Technology-driven efficient distribution</span>
            </li>
          </ul>
        </div>
      </div>

      {/* How It Works */}
      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <Globe className="h-6 w-6 text-primary-600 mr-3" />
          How Hungry Saver Works
        </h3>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">1</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Food Donation</h4>
            <p className="text-sm text-gray-600">Event organizers submit surplus food details through our platform</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-yellow-600">2</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Volunteer Alert</h4>
            <p className="text-sm text-gray-600">Approved volunteers receive notifications about nearby donations</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-orange-600">3</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Food Collection</h4>
            <p className="text-sm text-gray-600">Volunteers safely collect and transport food to distribution points</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-green-600">4</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Community Impact</h4>
            <p className="text-sm text-gray-600">Food reaches those in need, reducing waste and fighting hunger</p>
          </div>
        </div>
      </div>

      {/* Impact */}
      <div className="card bg-gradient-to-r from-green-50 to-primary-50 border-green-200">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact So Far</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-primary-600">50,000+</p>
              <p className="text-gray-700">Meals Distributed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600">500+</p>
              <p className="text-gray-700">Active Volunteers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600">25</p>
              <p className="text-gray-700">Cities Covered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}