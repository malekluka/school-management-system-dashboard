import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { studentData } from "../data/mockData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ChevronLeft, ChevronRight, MoreHorizontal, Clock } from "lucide-react";
import studentIcon from "../assets/student-icon.png";

const StudentDashboard = () => {
  const COLORS = ["#4F46E5", "#F59E0B", "#10B981", "#EF4444"];
  const socialIcons = [Facebook, Linkedin, Twitter, Instagram];

  const pieData = [
    {
      name: "Present",
      value: studentData.attendanceStats.Present,
      color: "#4F46E5",
    }, // was '#6366f1'
    {
      name: "Half Day Present",
      value: studentData.attendanceStats.HalfDay,
      color: "#F59E0B",
    }, // was '#f97316'
    {
      name: "Late Coming",
      value: studentData.attendanceStats.Late,
      color: "#10B981",
    }, // was '#22c55e'
    {
      name: "Absent",
      value: studentData.attendanceStats.Absent,
      color: "#EF4444",
    }, // was '#ef4444'
  ];

  return (
    <div className="space-y-6">
      {/* Header with welcome message */}

      <div className="flex space-x-6">
        {/* Left Sidebar with Profile */}
        <div className="space-y-6 w-[350px]">
          {/* Profile */}
          <div className="bg-gray-50 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Bio</h2>
              <button className="text-gray-400">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Profile Card */}
            <div className="text-center">
              <img
                src={studentIcon}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-100"
              />
              <h3 className="font-bold text-gray-800">
                {studentData.profile.name}{" "}
                <span className="text-orange-500">
                  ({studentData.profile.role})
                </span>
              </h3>
              <p className="font-bold text-sm text-gray-600 mb-1">
                {studentData.profile.email}
              </p>
              <p className="font-bold text-sm text-gray-600">
                + {studentData.profile.phone}
              </p>
            </div>

            {/* Personal Details (collapsible UI mock) */}
            <div className="mt-6 rounded-xl bg-white">
              <div className="bg-orange-50 text-gray-800 rounded-t-xl px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Personal Details:</span>
                <span className="text-gray-500">^</span>
              </div>
              <div className="border border-orange-100 border-t-0 rounded-b-xl divide-y">
                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-600">
                  <span>Gender:</span>
                  <span className="text-gray-800">
                    {studentData.personalDetails.gender}
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-600">
                  <span>Father's Name:</span>
                  <span className="text-gray-800">
                    {studentData.personalDetails.fatherName}
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-600">
                  <span>Mother's Name:</span>
                  <span className="text-gray-800">
                    {studentData.personalDetails.motherName}
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-600">
                  <span>Date Of Birth:</span>
                  <span className="text-gray-800">
                    {studentData.personalDetails.dob}
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-600">
                  <span>Religion:</span>
                  <span className="text-gray-800">
                    {studentData.personalDetails.religion}
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-600">
                  <span>Father Occupation:</span>
                  <span className="text-gray-800">
                    {studentData.personalDetails.fatherOccupation}
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-600">
                  <span>Admission Date:</span>
                  <span className="text-gray-800">
                    {studentData.personalDetails.admissionDate}
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-600">
                  <span>Address:</span>
                  <span className="text-gray-800">
                    {studentData.personalDetails.address}
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-600">
                  <span>Class:</span>
                  <span className="text-gray-800">
                    {studentData.personalDetails.className}
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-600">
                  <span>Section:</span>
                  <span className="text-gray-800">
                    {studentData.personalDetails.section}
                  </span>
                </div>
              </div>
            </div>

            {/* Social icons row */}
            <div className="mt-6 flex items-center justify-center space-x-4">
              {socialIcons.map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <Icon className="w-5 h-5 text-gray-500 fill-current" />
                </div>
              ))}
            </div>

            {/* About Student */}
            <div className="mt-6 bg-white rounded-xl p-6 ">
              <h3 className="text-gray-800 font-semibold mb-2">
                About Student
              </h3>
              <p className="text-sm text-gray-600 leading-6">
                {studentData.about}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 space-y-6 mx-6">
          {/* Stats Cards */}
          <div className="flex gap-6 mb-6">
            <div className="flex-1 bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="w-6 h-6 bg-indigo-600 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-500 mb-1">Events</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">
                {studentData.stats.events}
              </div>
            </div>

            <div className="flex-1 bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="w-6 h-6 bg-indigo-600 rounded"></div>
              </div>
              <div className="text-xs text-gray-500 mb-1">Growth</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">
                {studentData.stats.targetAchieved}%
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Attendance
            </h2>

            <div className="flex items-center justify-center mb-6">
              <div className="relative w-32 h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Present</span>
                </div>
                <span className="text-sm font-medium text-gray-800">
                  {studentData.attendanceStats.Present}%
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Half Day Present
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-800">
                  {studentData.attendanceStats.HalfDay}%
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Late Coming</span>
                </div>
                <span className="text-sm font-medium text-gray-800">
                  {studentData.attendanceStats.Late}%
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Absent</span>
                </div>
                <span className="text-sm font-medium text-gray-800">
                  {studentData.attendanceStats.Absent}%
                </span>
              </div>
            </div>
          </div>
          {/* All Exam Results */}{" "}
          <div className="bg-gray-50 rounded-xl shadow-sm p-6">
            {" "}
            <div className="flex items-center justify-between mb-4">
              {" "}
              <h2 className="text-lg font-semibold text-gray-800">
                {" "}
                All Exam Results{" "}
              </h2>{" "}
            </div>{" "}
            <div className="overflow-x-auto rounded-xl">
              {" "}
              <table className="w-full">
                {" "}
                <thead>
                  {" "}
                  <tr className="text-xs text-gray-500">
                    {" "}
                    <th className="text-left py-3 w-10"></th>{" "}
                    <th className="text-left py-3">Exam Id</th>{" "}
                    <th className="text-left py-3">Type</th>{" "}
                    <th className="text-left py-3">Subject</th>{" "}
                    <th className="text-left py-3">Grade</th>{" "}
                    <th className="text-left py-3">%</th>{" "}
                    <th className="text-left py-3">Date</th>{" "}
                  </tr>{" "}
                </thead>{" "}
                <tbody className="bg-white">
                  {" "}
                  {studentData.examResults?.map((row, index) => (
                    <tr key={index} className="border-b border-gray-50">
                      {" "}
                      <td className="py-4">
                        {" "}
                        <input type="checkbox" className="w-4 h-4" />{" "}
                      </td>{" "}
                      <td className="py-4 text-sm text-gray-800">{row.id}</td>{" "}
                      <td className="py-4 text-sm text-gray-600">{row.type}</td>{" "}
                      <td className="py-4 text-sm text-gray-800">
                        {" "}
                        {row.subject}{" "}
                      </td>{" "}
                      <td className="py-4 text-sm text-gray-800">
                        {" "}
                        {row.grade}{" "}
                      </td>{" "}
                      <td className="py-4 text-sm text-gray-600">
                        {" "}
                        {row.percent}{" "}
                      </td>{" "}
                      <td className="py-4 text-sm text-gray-600">{row.date}</td>{" "}
                    </tr>
                  ))}{" "}
                </tbody>{" "}
              </table>{" "}
            </div>{" "}
            <div className="flex items-center justify-center space-x-2 mt-6">
              <button className="w-8 h-8 bg-orange-400 text-white rounded-lg flex items-center justify-center">
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
        </div>

        {/* Right Sidebar */}
      <  div className="space-y-6 w-[320px] max-h-[420px]">
          {/* Event Calendar */}
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
                    className={`text-center py-1 cursor-pointer rounded text-sm ${
                      i + 1 === 16
                        ? "bg-orange-500 text-white"
                        : "text-indigo-100 hover:bg-indigo-500"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
