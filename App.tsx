
import React, { useState, useEffect } from 'react';
import { Page, UserProfile, UserRole } from './types';
import { MOCK_USER, MOCK_ADMIN } from './constants';
import Layout from './components/Layout';
import Auth from './pages/Auth';
import Landing from './pages/Landing';
import MemberDashboard from './pages/Dashboard';
import WorkoutLog from './pages/WorkoutLog';
import AdminDashboard from './pages/AdminDashboard';
import Settings from './pages/Settings';
import AIChatbot from './components/AIChatbot';

const App: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      const savedUser = localStorage.getItem('ironflow_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
        setCurrentPage('dashboard');
      }
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const login = (role: UserRole) => {
    const userData = role === 'admin' ? MOCK_ADMIN : MOCK_USER;
    setUser(userData);
    localStorage.setItem('ironflow_user', JSON.stringify(userData));
    setCurrentPage('dashboard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ironflow_user');
    setCurrentPage('landing');
  };

  const handleUpdateUser = (updatedUser: UserProfile) => {
    setUser(updatedUser);
    localStorage.setItem('ironflow_user', JSON.stringify(updatedUser));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 border-4 border-[#333] border-t-[#CCFF00] rounded-full animate-spin"></div>
        <p className="text-[#CCFF00] font-black uppercase tracking-[0.3em] italic animate-pulse">Initializing AZ Fitness</p>
      </div>
    );
  }

  // If not logged in and current page is landing or login
  if (!user) {
    if (currentPage === 'login') {
      return <Auth onLogin={login} />;
    }
    return <Landing onLogin={login} onGoToLogin={() => setCurrentPage('login')} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return user.role === 'admin' ? <AdminDashboard /> : <MemberDashboard />;
      case 'workouts':
        return <WorkoutLog />;
      case 'admin':
        return <AdminDashboard />;
      case 'subscription':
        return (
          <div className="flex flex-col items-center justify-center h-[70vh] text-center space-y-4">
            <h2 className="text-3xl font-black italic uppercase">Membership <span className="text-[#CCFF00]">Management</span></h2>
            <p className="text-gray-500 max-w-md">Subscription billing and plan management interface is currently under maintenance. Please contact the front desk for immediate renewals.</p>
          </div>
        );
      case 'settings':
        return <Settings user={user} onUpdate={handleUpdateUser} onLogout={logout} />;
      default:
        return <MemberDashboard />;
    }
  };

  return (
    <>
      <Layout 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        user={user} 
        logout={logout}
      >
        {renderPage()}
      </Layout>
      <AIChatbot />
    </>
  );
};

export default App;
