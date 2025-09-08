export const teacherData = {
  profile: {
    name: "Carla Peter",
    email: "carlapeter@gmail.com",
    phone: "+88 9856418",
    role: "IA",
    avatar: "/api/placeholder/100/100"
  },
  stats: {
    events: 6,
    targetAchieved: 84
  },
  groups: [
    { name: "Teacher's", type: "Union", status: "Join" },
    { name: "5th class", type: "Maths", status: "Join" },
    { name: "6th class", type: "Science", status: "Join" }
  ],
  examResults: [
    { id: "#mat21", studentName: "Jason Black", subject: "Maths", class: "5th", status: "Active", date: "21 Jul 2022" },
    { id: "#mut21", studentName: "Gerald Ferrell", subject: "English", class: "7th", status: "Opened", date: "14 Jun 2022" },
    { id: "#mut21", studentName: "Delbert Barna", subject: "Physics", class: "6th", status: "Completed", date: "10 Mar 2022" },
    { id: "#mut21", studentName: "Mary Byrd", subject: "Chemistry", class: "4th", status: "Active", date: "06 Jan 2022" }
  ],
  timeline: [
    { title: "Solve real-world problems involving...", class: "Class: 5th", time: "10:00 am" },
    { title: "Integers and rational numbers.", class: "Class: 8th", time: "11:00 am" },
    { title: "Expressions, equations and inequalities", class: "Class: 6th", time: "2:00 pm" },
    { title: "Geometric transformations", class: "Class: 7th", time: "4:00 pm" },
    { title: "Solve real-world problems involving...", class: "", time: "" }
  ]
};

export const studentData = {
  profile: {
    name: "Jason Black",
    email: "jasonblack@gmail.com",
    phone: "88 9856418",
    role: "1406",
    avatar: "../assets/student.png"
  },
  personalDetails: {
    gender: 'Male',
    fatherName: 'Alex Black',
    motherName: 'Jesica Black',
    dob: '14, June 2006',
    religion: 'Christian',
    fatherOccupation: 'Banker',
    admissionDate: '05, June 2012',
    address: 'House 10, Road 6, Australia.',
    className: '11th',
    section: 'Pink'
  },
  about: `Hi there! My name is Jason, and I am a 11th standard student. I love going to school and learning new things every day. My favourite subject is maths, and I enjoy playing with my friends after school.`,
  stats: {
    hoursSpent: 116,
    overallResult: 76,
    attendance: 92,
    events: 6,
    targetAchieved: 72
  },
  timeSpending: {
    weeklyData: [
      { day: 'Sun', hours: 0 },
      { day: 'Mon', hours: 2 },
      { day: 'Tue', hours: 4 },
      { day: 'Wed', hours: 8.67 },
      { day: 'Thu', hours: 3 },
      { day: 'Fri', hours: 1 },
      { day: 'Sat', hours: 2 }
    ]
  },
  examResults: [
    { id: '#mat21', type: 'Class Test', subject: 'Maths', grade: 'A', percent: 89, date: '21 Jul 2022' },
    { id: '#mat21', type: 'Quarterly Test', subject: 'English', grade: 'A+', percent: 93, date: '14 Jun 2022' },
    { id: '#mat21', type: 'Oral Test', subject: 'Physics', grade: 'B', percent: 78, date: '10 Mar 2022' },
    { id: '#mat21', type: 'Class Test', subject: 'Chemistry', grade: 'A', percent: 88, date: '06 Jan 2022' }
  ],
  homeworkProgress: [
    { subject: "Mathematics solutions", problems: 36, progress: 87, time: "14:20" },
    { subject: "Chemistry equations", problems: 42, progress: 75, time: "12:30" }
  ],
  communities: [
    { subject: "Maths", type: "Problem solving", icon: "π" },
    { subject: "Chemistry", type: "Equations", icon: "⚗️" },
    { subject: "Physics", type: "Directions", icon: "🔬" }
  ],
  courseStats: {
    completed: 50,
    inProgress: 15,
    exams: 20,
    incomplete: 15
  }
};