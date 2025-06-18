import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import Login from './components/Login'
import VolunteerDashboard from './components/VolunteerDashboard'
import AdminDashboard from './components/AdminDashboard'
import FlowDiagram from './components/FlowDiagram'
import './App.css'

function AppRoutes() {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/flow" element={<FlowDiagram />} />
      <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
      <Route 
        path="/dashboard" 
        element={
          user ? (
            user.role === 'admin' ? <AdminDashboard /> : <VolunteerDashboard />
          ) : (
            <Navigate to="/login" />
          )
        } 
      />
      <Route path="/" element={<Navigate to="/flow" />} />
    </Routes>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App