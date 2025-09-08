import React from "react";
import { teacherData } from "../data/mockData";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Plus,
  MoreHorizontal,
  Printer,
  Download,
  Clock,
} from "lucide-react";

const TeacherDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Bio Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Bio</h2>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex flex-col items-center text-center mb-6">
            <div className="relative mb-4">
              <img
                src="/api/placeholder/100/100"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {teacherData.profile.name}{" "}
              <span className="text-orange-500">
                ({teacherData.profile.role})
              </span>
            </h3>
            <p className="text-gray-600 text-sm mb-1">
              {teacherData.profile.email}
            </p>
            <p className="text-gray-600 text-sm">
              + {teacherData.profile.phone}
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <div className="p-2 bg-gray-100 rounded-lg">🚗</div>
            <div className="p-2 bg-gray-100 rounded-lg">📍</div>
            <div className="p-2 bg-gray-100 rounded-lg">📘</div>
            <div className="p-2 bg-gray-100 rounded-lg">🐦</div>
            <div className="p-2 bg-gray-100 rounded-lg">📷</div>
          </div>
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                </div>
                <span className="ml-2 text-2xl font-bold text-gray-800">
                  {teacherData.stats.events}
                </span>
              </div>
              <p className="text-sm text-gray-600">Events</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-gray-800">
                  {teacherData.stats.targetAchieved}%
                </span>
              </div>
              <p className="text-sm text-gray-600">Target achieved</p>
            </div>
          </div>
          {/* Groups Section */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Groups</h4>
            <div className="space-y-3">
              {teacherData.groups.map((group, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">{group.name}</p>
                    <p className="text-sm text-gray-600">{group.type}</p>
                  </div>
                  <button className="px-4 py-1 bg-orange-100 text-orange-600 text-sm rounded-lg hover:bg-orange-200 transition-colors">
                    {group.status}
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
              <Plus className="w-4 h-4 mr-2" />
              Create New Group
            </button>
          </div>
          // Around line 70, add proper spacing and user avatars:
          <div className="flex items-center justify-end mt-4">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`/api/placeholder/24/24`}
                className="w-6 h-6 rounded-full -ml-2 border-2 border-white"
              />
            ))}
          </div>
        </div>

        {/* Exam Results Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Exam helds</h2>
            <div className="flex space-x-2">
              <Printer className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
              <Download className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-500 border-b">
                  <th className="text-left py-3">Exam ID</th>
                  <th className="text-left py-3">Student Name</th>
                  <th className="text-left py-3">Subject</th>
                  <th className="text-left py-3">Class</th>
                  <th className="text-left py-3">Status</th>
                  <th className="text-left py-3">Sub. Date</th>
                </tr>
              </thead>
              <tbody>
                {teacherData.examResults.map((result, index) => (
                  <tr key={index} className="border-b border-gray-50">
                    <td className="py-4">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-indigo-600"
                      />
                      <span className="ml-2 text-sm text-gray-800">
                        {result.id}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-gray-800">
                      {result.studentName}
                    </td>
                    <td className="py-4 text-sm text-gray-600">
                      {result.subject}
                    </td>
                    <td className="py-4 text-sm text-gray-600">
                      {result.class}
                    </td>
                    <td className="py-4">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          result.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : result.status === "Completed"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {result.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-gray-600">
                      {result.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-center space-x-2 mt-6">
            <button className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center">
              1
            </button>
            <button className="w-8 h-8 text-gray-400 hover:bg-gray-100 rounded-lg flex items-center justify-center">
              2
            </button>
            <span className="text-gray-400">...</span>
            <button className="w-8 h-8 text-gray-400 hover:bg-gray-100 rounded-lg flex items-center justify-center">
              10
            </button>
          </div>
        </div>

        {/* Event Calendar & Timeline */}
        <div className="space-y-6">
          {/* Calendar */}
          <div className="bg-indigo-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Event Calendar</h2>
              <MoreHorizontal className="w-5 h-5" />
            </div>

            <div className="flex space-x-4 mb-6">
              <button className="px-4 py-2 bg-orange-500 rounded-lg text-sm">
                Day to day
              </button>
              <button className="px-4 py-2 text-indigo-200 text-sm hover:bg-indigo-500 rounded-lg">
                Events
              </button>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Feb 2023</h3>
                <div className="flex space-x-2">
                  <ChevronLeft className="w-5 h-5 cursor-pointer hover:bg-indigo-500 rounded p-1" />
                  <ChevronRight className="w-5 h-5 cursor-pointer hover:bg-indigo-500 rounded p-1" />
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-xs mb-2">
                {["MO", "TU", "WE", "TH", "FR", "SA", "SU"].map((day) => (
                  <div key={day} className="text-center py-1 text-indigo-200">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 text-sm">
                {Array.from({ length: 28 }, (_, i) => (
                  <div
                    key={i}
                    className={`text-center py-2 cursor-pointer rounded hover:bg-indigo-500 ${
                      i + 1 === 16 ? "bg-orange-500" : ""
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Today's Timeline
            </h2>

            <div className="space-y-4">
              {teacherData.timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 mb-1">
                      {item.title}
                    </p>
                    {item.class && (
                      <p className="text-xs text-orange-600 mb-1">
                        {item.class}
                      </p>
                    )}
                  </div>
                  {item.time && (
                    <span className="text-xs text-gray-500 flex-shrink-0">
                      {item.time}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
