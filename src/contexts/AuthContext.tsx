import React, { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
  role: 'volunteer' | 'admin'
  status: 'pending' | 'approved' | 'rejected'
  qualifications?: string
  phone?: string
  joinedDate: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  users: User[]
  updateUserStatus: (userId: string, status: 'approved' | 'rejected') => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock users data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    email: 'priya@example.com',
    role: 'volunteer',
    status: 'pending',
    qualifications: 'Social Work Graduate, 2 years NGO experience',
    phone: '+91 98765 43210',
    joinedDate: '2024-01-15'
  },
  {
    id: '2',
    name: 'Rahul Kumar',
    email: 'rahul@example.com',
    role: 'volunteer',
    status: 'approved',
    qualifications: 'Community Service Volunteer, Local Area Coordinator',
    phone: '+91 87654 32109',
    joinedDate: '2024-01-10'
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@hungrysaver.org',
    role: 'admin',
    status: 'approved',
    joinedDate: '2023-12-01'
  }
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [users, setUsers] = useState<User[]>(mockUsers)

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication
    const foundUser = users.find(u => u.email === email)
    if (foundUser) {
      setUser(foundUser)
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
  }

  const updateUserStatus = (userId: string, status: 'approved' | 'rejected') => {
    setUsers(prev => prev.map(u => 
      u.id === userId ? { ...u, status } : u
    ))
    
    // Update current user if it's them
    if (user && user.id === userId) {
      setUser({ ...user, status })
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, users, updateUserStatus }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}