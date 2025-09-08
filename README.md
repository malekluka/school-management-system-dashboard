# School Management System

A modern, pixel-perfect React implementation of a school management system dashboard with two main interfaces: Teacher Dashboard and Student Dashboard.

## 🚀 Features

### Teacher Dashboard
- **Profile Bio Section**: Complete teacher profile with contact information and statistics
- **Groups Management**: Teacher groups with join functionality  
- **Exam Results Table**: Comprehensive exam tracking with filtering and status indicators
- **Event Calendar**: Interactive calendar with day-to-day events
- **Today's Timeline**: Real-time schedule management

### Student Dashboard  
- **Performance Analytics**: Hours spent, overall results, and attendance tracking
- **Interactive Charts**: Time spending visualization with Recharts
- **Homework Progress**: Circular progress indicators for assignments
- **Community Integration**: Subject-based community joining
- **Course Statistics**: Pie chart visualization of course completion status

## 🛠 Tech Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.3.0  
- **Styling**: Tailwind CSS 3.1.6
- **Icons**: Lucide React 0.263.1
- **Charts**: Recharts 2.7.2
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd school-management-system
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

The application will open at [http://localhost:5173](http://localhost:5173)

## 🏗 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Layout.jsx          # Main app layout wrapper
│   │   ├── Sidebar.jsx         # Navigation sidebar
│   │   └── Header.jsx          # Top header with search and notifications
│   └── ui/  
│       ├── Card.jsx
│       ├── Button.jsx         # Navigation sidebar
│       └── Calendar.jsx                   # Reusable UI components
├── data/
│   └── mockData.js             # Static dummy data for both dashboards
├── pages/
│   ├── TeacherDashboard.jsx    # Teacher interface implementation  
│   └── StudentDashboard.jsx    # Student interface implementation
├── App.jsx                      # Main application component with routing
└── index.css                   # Global styles with Tailwind imports
```

## 📱 Screens Implemented

### 1. Teacher Dashboard (`/teacher-dashboard`)
- Pixel-perfect recreation of the teacher interface
- Profile management with bio, contact info, and statistics
- Interactive exam results table with pagination
- Event calendar with timeline integration
- Groups management with join functionality

### 2. Student Dashboard (`/student-dashboard`) 
- Complete student interface with analytics
- Time spending charts and performance metrics
- Homework progress tracking with circular indicators
- Community integration features
- Course statistics with pie chart visualization

## 🎨 Design Features

- **Pixel Perfect**: Exact recreation of the original designs
- **Responsive Layout**: Optimized for desktop and tablet viewports
- **Modern UI**: Clean, professional interface with proper spacing
- **Interactive Elements**: Hover effects, transitions, and animations
- **Consistent Theming**: Unified color scheme and typography

## 🔧 Backend Integration Ready

The codebase is structured for easy Laravel backend integration:

- **Modular Components**: Clean separation of concerns
- **Mock Data Structure**: Matches expected API response formats
- **Service Layer Ready**: Easy to replace mock data with API calls
- **Error Handling**: Prepared for API error states
- **Loading States**: Components ready for async data loading

## 📊 Data Structure

Mock data includes:
- User profiles and authentication
- Academic performance metrics  
- Schedule and calendar events
- Course and assignment data
- Community and group information

## 🚀 Getting Started

1. Navigate to `/teacher-dashboard` to view the teacher interface
2. Navigate to `/student-dashboard` to view the student interface  
3. All data is currently static/mocked for demonstration
4. Components are ready for backend API integration

## 🔄 Backend Integration Points

Key areas for Laravel API integration:
- User authentication and profile management
- Academic data and performance metrics
- Calendar and scheduling functionality
- Assignment and homework tracking
- Community and group management

## 📝 Notes

- All placeholder images use `/api/placeholder/` URLs
- Charts and visualizations are fully functional with mock data
- Responsive design optimized for modern browsers
- Clean, maintainable code structure following React best practices

## 🎯 Interview Task Completion

✅ **Two screens implemented**: Teacher Dashboard and Student Dashboard  
✅ **Pixel-perfect UI/UX**: Exact recreation of provided designs  
✅ **React implementation**: Modern functional components with hooks  
✅ **Static dummy data**: No backend connection required  
✅ **Laravel-ready code**: Clean, reusable, and integration-ready structure