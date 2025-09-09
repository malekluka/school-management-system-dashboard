import React from "react";
import { teacherData } from "../data/mockData";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

import {
  ChevronLeft,
  ChevronRight,
  Plus,
  MoreHorizontal,
  Printer,
  Download,
} from "lucide-react";

const TeacherDashboard = () => {
  const socials = [Facebook, Linkedin, Twitter, Instagram];
  const [selectedRows, setSelectedRows] = React.useState(new Set());

  return (
    <div className="space-y-6 p-4 md:p-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 md:gap-6 items-stretch">
        {/* Profile Bio Section - Column 1, Row 1 */}
        <div className="lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:self-stretch">
        <div className="bg-gray-50 rounded-2xl shadow-sm p-4 md:p-6 h-full max-w-md mx-auto lg:max-w-none lg:mx-0">            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">Bio</h2>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex flex-col items-center font-bold text-center mb-6 md:mb-24.5">
              <img
                src={teacherData.profile.avatar}
                alt="Profile"
                className="w-24 h-24 md:w-35 md:h-35 rounded-full object-cover border-4 border-indigo-100 mb-4"
              />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
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
            <div className="flex justify-center space-x-4">
              {socials.map((Icon, index) => (
                <div
                  key={index}
                  className="p-2 bg-gray-50 rounded-lg flex items-center justify-center"
                >
                  <Icon className="w-5 h-5 text-gray-500 fill-current" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats & Groups - Column 2, Row 1 */}
        <div className="lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:self-stretch space-y-4 md:space-y-6 h-full">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Events */}
            <div className="bg-gray-50 rounded-2xl p-3 md:p-4 text-center shadow-sm">
              <div className="flex items-center justify-center mb-2">
                <span className="text-xl md:text-2xl font-bold text-gray-800">
                  {teacherData.stats.events}
                </span>
              </div>
              <p className="text-xs md:text-sm text-gray-600">Events</p>
            </div>

            {/* Target Achieved */}
            <div className="bg-gray-50 rounded-2xl p-3 md:p-4 text-center shadow-sm">
              <div className="flex items-center justify-center mb-2">
                <span className="text-xl md:text-2xl font-bold text-gray-800">
                  {teacherData.stats.targetAchieved}%
                </span>
              </div>
              <p className="text-xs md:text-sm text-gray-600">Target achieved</p>
            </div>
          </div>

          {/* Groups Section */}
          <div className="space-y-2 flex-1">
            <h4 className="font-bold text-gray-800">Groups</h4>

            <div className="bg-gray-50 p-3 md:p-4 rounded-2xl grid grid-rows-2 gap-3 md:gap-4 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                {teacherData.groups.map((group, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between bg-white shadow-sm p-2 rounded-2xl min-h-[100px] md:min-h-[120px]"
                  >
                    <p className="font-bold text-gray-500 text-center mb-2 text-sm md:text-base">
                      {group.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 text-center mb-3 md:mb-5">
                      {group.type}
                    </p>

                    <button className="px-3 md:px-4 py-1 bg-orange-300 font-bold text-xs md:text-sm rounded-lg hover:bg-orange-200 transition-colors">
                      {group.status}
                    </button>
                  </div>
                ))}
              </div>
              <div className="bg-white shadow-sm rounded-2xl p-3 md:p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button className="w-full sm:w-auto px-3 md:px-4 py-2 text-xs md:text-sm bg-gray-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" />
                  Create New Group
                </button>
                <div className="flex items-center">
                  {teacherData.groupAvatars.map((avatar) => (
                    <img
                      key={avatar.id}
                      src={avatar.src}
                      alt={avatar.alt}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full -ml-2 border-2 border-white first:ml-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exam Results - Columns 1-2, Row 2 */}
        <div className="lg:col-start-1 lg:col-span-2 lg:row-start-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
            <h2 className="text-lg font-bold text-gray-800">Exam helds</h2>
            <div className="flex space-x-2">
              <Printer className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
              <Download className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-sm p-2 md:p-4">
            <div className="overflow-x-auto p-1">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="text-sm text-gray-500">
                    <th className="text-left py-3 px-1 md:px-0">Exam ID</th>
                    <th className="text-left py-3 px-1 md:px-0">Student Name</th>
                    <th className="text-left py-3 px-1 md:px-0">Subject</th>
                    <th className="text-left py-3 px-1 md:px-0">Class</th>
                    <th className="text-left py-3 px-1 md:px-0">Status</th>
                    <th className="text-left py-3 px-1 md:px-0">Sub. Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {teacherData.examHelds.map((result, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-50 ${
                        selectedRows.has(result.id) ? "font-semibold" : ""
                      }`}
                    >
                      <td className="py-3 md:py-4 pl-1 md:pl-3">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-indigo-600"
                          checked={selectedRows.has(result.id)}
                          onChange={() => {
                            setSelectedRows((prev) => {
                              const next = new Set(prev);
                              if (next.has(result.id)) {
                                next.delete(result.id);
                              } else {
                                next.add(result.id);
                              }
                              return next;
                            });
                          }}
                        />
                        <span className="ml-2 text-sm text-gray-800">
                          {result.id}
                        </span>
                      </td>
                      <td className="py-3 md:py-4 text-sm text-gray-800 px-1">
                        {result.studentName}
                      </td>
                      <td className="py-3 md:py-4 text-sm text-gray-600 px-1">
                        {result.subject}
                      </td>
                      <td className="py-3 md:py-4 text-sm text-gray-600 px-1">
                        {result.class}
                      </td>
                      <td className="py-3 md:py-4 px-1">
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
                      <td className="py-3 md:py-4 text-sm text-gray-600 px-1">
                        {result.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 md:mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-sm text-gray-500">
                Showing 1-10 of {teacherData.examHelds.length}
              </div>
              <div className="inline-flex items-center gap-1 md:gap-2 flex-wrap">
                <button className="px-2 md:px-3 py-1 rounded-lg border border-gray-200 text-xs md:text-sm text-gray-700 hover:bg-gray-50">
                  Prev
                </button>
                <button className="px-2 md:px-3 py-1 rounded-2xl bg-orange-300 text-white text-xs md:text-sm">
                  1
                </button>
                <button className="px-2 md:px-3 py-1 rounded-2xl border border-gray-200 text-xs md:text-sm text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="px-2 md:px-3 py-1 rounded-2xl border border-gray-200 text-xs md:text-sm text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="px-2 md:px-3 py-1 rounded-lg border border-gray-200 text-xs md:text-sm text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Event Calendar & Timeline - Column 3, Rows 1-2 */}
        <div className="lg:col-start-3 lg:row-span-2 space-y-4 md:space-y-6 p-3 md:p-5 rounded-2xl bg-gray-50">
          {/* Calendar */}
          <div className="bg-sky-800 rounded-2xl p-4 md:p-6 text-white max-w-md mx-auto lg:max-w-none lg:mx-0">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-base md:text-lg font-semibold">Event Calendar</h2>
              <MoreHorizontal className="w-5 h-5" />
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4 md:mb-6 justify-center">
              <button className="px-3 md:px-4 py-2 bg-orange-500 rounded-lg text-xs md:text-sm">
                Day to day
              </button>
              <button className="px-3 md:px-4 py-2 text-indigo-200 text-xs md:text-sm hover:bg-indigo-500 rounded-lg">
                Events
              </button>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-sm md:text-base">Feb 2023</h3>
                <div className="flex space-x-2">
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:bg-indigo-500 rounded p-1" />
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:bg-indigo-500 rounded p-1" />
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-xs mb-2">
                {["MO", "TU", "WE", "TH", "FR", "SA", "SU"].map((day) => (
                  <div key={day} className="text-center py-1 text-indigo-200">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 text-xs md:text-sm">
                {Array.from({ length: 28 }, (_, i) => (
                  <div
                    key={i}
                    className={`text-center py-1 md:py-2 cursor-pointer rounded hover:bg-indigo-500 ${
                      i + 1 === 16 ? "bg-orange-500" : ""
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline header outside the card */}
          <h2 className="text-base md:text-lg font-bold text-gray-800">Today's Timeline</h2>

          {/* Timeline items as separate rounded cards */}
          <div className="rounded-xl">
            <div className="space-y-3 md:space-y-4">
              {teacherData.timeline.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm p-3 md:p-4 flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm font-medium text-gray-800 mb-1">
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