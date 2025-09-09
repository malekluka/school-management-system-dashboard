import React from 'react';
import { Search, Mail, Bell, ChevronDown } from 'lucide-react';
import LanguageIcon from '/Language-icon.png';
import AdminIcon from '/Admin.png'

const Header = () => {
  return (
    <header className="flex bg-white relative shadow-sm px-4 lg:px-6 py-4">
      <div className="flex items-center space-x-4 w-full">
        <h1 className="text-xl lg:text-2xl font-semibold text-gray-800">Dashboard</h1>

        <div className="flex items-center space-x-2 lg:space-x-4 flex-1">
          <div className="relative ml-4 lg:ml-10 mr-4 lg:mr-80 hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-64 lg:w-[400px] bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center mr-4 lg:mr-20 sm:flex">
            <img 
              src={LanguageIcon} 
              alt="LanguageIcon" 
              className="w-4 h-4" 
              style={{ filter: "invert(46%) sepia(85%) saturate(5000%) hue-rotate(10deg) brightness(100%) contrast(100%)" }}
            />
            <select className="text-sm text-gray-600 bg-transparent border-none focus:outline-none">
              <option>EN</option>
            </select>
          </div>

          <div className="flex items-center space-x-2 lg:space-x-3 ml-auto">
            <div className="relative">
              <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
              <span className="absolute -top-2 -right-2 bg-orange-300 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </div>
            <div className="relative">
              <Bell className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
              <span className="absolute -top-2 -right-2 bg-indigo-900 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                6
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 lg:space-x-3 pl-2 lg:pl-4 border-l">
            <img
              src={AdminIcon}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-medium text-gray-700">
                Steven Jhon
              </span>
              <span className="text-xs text-gray-500">Admin</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;