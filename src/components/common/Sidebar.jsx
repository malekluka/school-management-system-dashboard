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
    { icon: LayoutDashboard, label: 'Dashboard', path: '/teacher-dashboard' },
    { icon: Users, label: 'Students', path: '/students' },
    { icon: GraduationCap, label: 'Teachers', path: '/teachers' },
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
    <div className="w-64 bg-gray-50 shadow-lg flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="text-xl font-bold text-gray-800">ACERO</span>
        </div>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-600 border-r-2 border-indigo-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
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
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

