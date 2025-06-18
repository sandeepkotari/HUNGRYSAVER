import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  UserPlus, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Eye, 
  Package, 
  Truck, 
  Heart,
  ArrowRight,
  ArrowDown,
  Monitor,
  Users,
  AlertCircle
} from 'lucide-react'

export default function FlowDiagram() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [showMobileScreens, setShowMobileScreens] = useState(false)

  const steps = [
    {
      id: 1,
      title: "Volunteer Registration",
      icon: UserPlus,
      description: "New volunteers sign up with qualifications and contact details",
      color: "blue",
      status: "start"
    },
    {
      id: 2,
      title: "Under Verification",
      icon: Clock,
      description: "Volunteer account is pending admin review. Limited access to About section only.",
      color: "yellow",
      status: "pending"
    },
    {
      id: 3,
      title: "Admin Review Panel",
      icon: Monitor,
      description: "Admin reviews volunteer details, qualifications, and decides approval status",
      color: "purple",
      status: "review"
    },
    {
      id: 4,
      title: "Approval Decision",
      icon: CheckCircle,
      description: "Admin approves or rejects volunteer application",
      color: "green",
      status: "decision"
    },
    {
      id: 5,
      title: "Full Access Dashboard",
      icon: Eye,
      description: "Approved volunteers can view and accept donation tasks",
      color: "green",
      status: "approved"
    },
    {
      id: 6,
      title: "Donation Management",
      icon: Package,
      description: "Accept → Food Taken → Donation Complete workflow",
      color: "primary",
      status: "active"
    },
    {
      id: 7,
      title: "Admin Monitoring",
      icon: Users,
      description: "Admin tracks all volunteer activities and donation progress",
      color: "indigo",
      status: "monitor"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      green: "bg-green-100 text-green-800 border-green-200",
      primary: "bg-primary-100 text-primary-800 border-primary-200",
      indigo: "bg-indigo-100 text-indigo-800 border-indigo-200"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      yellow: "text-yellow-600",
      purple: "text-purple-600",
      green: "text-green-600",
      primary: "text-primary-600",
      indigo: "text-indigo-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-green-50 flow-container">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-10 w-10 text-primary-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Hungry Saver</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Volunteer Approval System - UI/UX Flow & Web App Demo
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() => setShowMobileScreens(!showMobileScreens)}
                className="btn-primary"
              >
                {showMobileScreens ? 'Show Flow Diagram' : 'View Mobile Screens'}
              </button>
              <a href="/login" className="btn-secondary">
                Try Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {!showMobileScreens ? (
            <motion.div
              key="flow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Flow Diagram */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  Volunteer Approval Flow
                </h2>
                
                <div className="relative">
                  {/* Desktop Flow */}
                  <div className="hidden lg:block">
                    <div className="grid grid-cols-4 gap-8">
                      {/* Row 1 */}
                      <div className="col-span-4 flex justify-between items-center">
                        {steps.slice(0, 4).map((step, index) => (
                          <React.Fragment key={step.id}>
                            <motion.div
                              className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                activeStep === step.id ? 'scale-105 shadow-lg' : 'hover:scale-102'
                              } ${getColorClasses(step.color)}`}
                              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="text-center">
                                <step.icon className={`h-8 w-8 mx-auto mb-3 ${getIconColor(step.color)}`} />
                                <h3 className="font-semibold text-sm mb-2">{step.title}</h3>
                                <div className="w-16 h-1 bg-current opacity-30 mx-auto"></div>
                              </div>
                              
                              {activeStep === step.id && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="absolute top-full left-0 right-0 mt-4 p-4 bg-white rounded-lg shadow-lg border z-10"
                                >
                                  <p className="text-sm text-gray-700">{step.description}</p>
                                </motion.div>
                              )}
                            </motion.div>
                            
                            {index < 3 && (
                              <ArrowRight className="h-6 w-6 text-gray-400 flex-shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                      
                      {/* Arrow Down */}
                      <div className="col-span-4 flex justify-center">
                        <ArrowDown className="h-8 w-8 text-gray-400" />
                      </div>
                      
                      {/* Row 2 */}
                      <div className="col-span-4 flex justify-center space-x-8">
                        {steps.slice(4).map((step, index) => (
                          <React.Fragment key={step.id}>
                            <motion.div
                              className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                activeStep === step.id ? 'scale-105 shadow-lg' : 'hover:scale-102'
                              } ${getColorClasses(step.color)}`}
                              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="text-center">
                                <step.icon className={`h-8 w-8 mx-auto mb-3 ${getIconColor(step.color)}`} />
                                <h3 className="font-semibold text-sm mb-2">{step.title}</h3>
                                <div className="w-16 h-1 bg-current opacity-30 mx-auto"></div>
                              </div>
                              
                              {activeStep === step.id && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="absolute top-full left-0 right-0 mt-4 p-4 bg-white rounded-lg shadow-lg border z-10"
                                >
                                  <p className="text-sm text-gray-700">{step.description}</p>
                                </motion.div>
                              )}
                            </motion.div>
                            
                            {index < 2 && (
                              <ArrowRight className="h-6 w-6 text-gray-400 flex-shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Flow */}
                  <div className="lg:hidden space-y-6">
                    {steps.map((step, index) => (
                      <React.Fragment key={step.id}>
                        <motion.div
                          className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            activeStep === step.id ? 'scale-105 shadow-lg' : ''
                          } ${getColorClasses(step.color)}`}
                          onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center">
                            <step.icon className={`h-8 w-8 mr-4 ${getIconColor(step.color)}`} />
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">{step.title}</h3>
                              {activeStep === step.id && (
                                <motion.p
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="text-sm mt-2 opacity-80"
                                >
                                  {step.description}
                                </motion.p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                        
                        {index < steps.length - 1 && (
                          <div className="flex justify-center">
                            <ArrowDown className="h-6 w-6 text-gray-400" />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="h-6 w-6 text-yellow-600 mr-3" />
                    Restricted Access (Pending)
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Status badge shows "Under Acceptance"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Only About section accessible</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Cannot view or accept donations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Educational content about food waste</span>
                    </li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                    Full Access (Approved)
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Status badge shows "Approved Volunteer"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>View available donations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Three-step donation workflow</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Real-time status updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="screens"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Mobile Screens Preview */}
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Mobile App Screens Preview
                </h2>
                <p className="text-gray-600">
                  Clean, modern UI with white and light green theme
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Login Screen */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="bg-primary-600 text-white p-4 text-center">
                    <h3 className="font-semibold">Login Screen</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="text-center">
                      <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                      <h2 className="text-xl font-bold">Welcome Back</h2>
                    </div>
                    <div className="space-y-3">
                      <div className="h-12 bg-gray-100 rounded-lg flex items-center px-3">
                        <Mail className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-500">Email Address</span>
                      </div>
                      <div className="h-12 bg-gray-100 rounded-lg flex items-center px-3">
                        <Clock className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-500">Password</span>
                      </div>
                      <button className="w-full h-12 bg-primary-600 text-white rounded-lg font-medium">
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>

                {/* Pending Volunteer Dashboard */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="bg-yellow-500 text-white p-4 text-center">
                    <h3 className="font-semibold">Pending Status</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Hungry Saver</span>
                      <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                        Under Acceptance
                      </div>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="text-sm text-yellow-800">Account Under Review</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-8 bg-gray-100 rounded"></div>
                      <div className="h-8 bg-gray-100 rounded"></div>
                      <div className="h-8 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Admin Review Panel */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="bg-purple-600 text-white p-4 text-center">
                    <h3 className="font-semibold">Admin Panel</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium">Priya Sharma</p>
                        <p className="text-sm text-gray-600">priya@example.com</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>Social Work Graduate</p>
                      <p>2 years NGO experience</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm">
                        Approve
                      </button>
                      <button className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>

                {/* Approved Volunteer Dashboard */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="bg-green-600 text-white p-4 text-center">
                    <h3 className="font-semibold">Approved Dashboard</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Hungry Saver</span>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Approved
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-sm text-green-800">Welcome to the Team!</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="border rounded-lg p-3">
                        <p className="font-medium text-sm">Raj Palace Hotel</p>
                        <p className="text-xs text-gray-600">50 portions available</p>
                        <button className="w-full mt-2 bg-primary-600 text-white py-1 rounded text-sm">
                          Accept Donation
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Donation Workflow */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="bg-primary-600 text-white p-4 text-center">
                    <h3 className="font-semibold">Donation Flow</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="border rounded-lg p-3">
                      <p className="font-medium text-sm">Green Valley Restaurant</p>
                      <p className="text-xs text-gray-600">30 portions</p>
                      <div className="mt-3 space-y-2">
                        <button className="w-full bg-blue-600 text-white py-2 rounded text-sm">
                          Accept
                        </button>
                        <button className="w-full bg-yellow-600 text-white py-2 rounded text-sm">
                          Food Taken
                        </button>
                        <button className="w-full bg-green-600 text-white py-2 rounded text-sm">
                          Complete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Admin Monitoring */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="bg-indigo-600 text-white p-4 text-center">
                    <h3 className="font-semibold">Admin Monitor</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary-600">2</p>
                        <p className="text-xs text-gray-600">Pending</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">5</p>
                        <p className="text-xs text-gray-600">Active</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <p className="font-medium">Rahul completed donation</p>
                        <p className="text-gray-600">2 hours ago</p>
                      </div>
                      <div className="bg-blue-50 p-2 rounded text-xs">
                        <p className="font-medium">New application received</p>
                        <p className="text-gray-600">4 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}