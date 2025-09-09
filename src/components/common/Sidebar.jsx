import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  UserCheck, 
  CreditCard, 
  BookOpen, 
  FileText, 
  Bus, 
  Bell, 
  Settings, 
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Students', path: '/student-dashboard' },
    { icon: GraduationCap, label: 'Teachers', path: '/teacher-dashboard' },
    { icon: UserCheck, label: 'Parents', path: '/parents' },
    { icon: CreditCard, label: 'Account', path: '/account' },
    { icon: BookOpen, label: 'Class', path: '/class' },
    { icon: FileText, label: 'Exam', path: '/exam' },
    { icon: Bus, label: 'Transport', path: '/transport' },
    { icon: Bell, label: 'Notice', path: '/notice' },
  ];

  const bottomItems = [
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: LogOut, label: 'Log out', path: '/logout' },
  ];

  return (
    <div className="w-16 lg:w-64 bg-gray-50 shadow-lg flex flex-col transition-all duration-300">
      <div className="p-4 lg:p-6">
        <div className="flex items-center lg:space-x-2 justify-center lg:justify-start">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="text-xl font-bold text-gray-800 hidden lg:block">ACERO</span>
        </div>
      </div>
      
      <nav className="flex-1 px-2 lg:px-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-center lg:justify-start lg:space-x-3 px-2 lg:px-4 py-3 rounded-lg transition-colors group relative ${
                isActive || (location.pathname === '/' && item.path === '/student-dashboard')
                  ? 'bg-indigo-50 text-indigo-600 lg:border-r-2 lg:border-indigo-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium hidden lg:block">{item.label}</span>
              
              {/* Tooltip for collapsed state */}
              <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 space-y-1">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center justify-center lg:justify-start lg:space-x-3 px-2 lg:px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors group relative"
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium hidden lg:block">{item.label}</span>
              
              {/* Tooltip for collapsed state */}
              <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;