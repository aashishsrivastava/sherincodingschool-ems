// localStorage.clear();

const employees = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete project documentation",
        taskDescription: "Document all features and modules of the project.",
        taskDate: "2024-11-01",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code review for team",
        taskDescription: "Review code submissions from team members.",
        taskDate: "2024-10-28",
        category: "Review",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update client requirements",
        taskDescription: "Add new features as per the latest client feedback.",
        taskDate: "2024-11-03",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    firstName: "Suman",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix bug in user login",
        taskDescription: "Resolve the login issue for certain user accounts.",
        taskDate: "2024-11-05",
        category: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare project report",
        taskDescription: "Create and submit a report on project progress.",
        taskDate: "2024-10-30",
        category: "Reporting",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize database queries",
        taskDescription: "Improve the efficiency of database queries.",
        taskDate: "2024-11-07",
        category: "Database",
      },
    ],
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team meeting preparation",
        taskDescription: "Gather necessary resources for the team meeting.",
        taskDate: "2024-10-29",
        category: "Meetings",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop API for new feature",
        taskDescription: "Design and implement API endpoints.",
        taskDate: "2024-11-04",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Unit testing",
        taskDescription: "Write unit tests for the latest modules.",
        taskDate: "2024-11-06",
        category: "Testing",
      },
    ],
  },
  {
    id: 4,
    firstName: "Amit",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Frontend styling updates",
        taskDescription: "Update CSS for improved UI consistency.",
        taskDate: "2024-10-31",
        category: "Design",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add logging functionality",
        taskDescription: "Implement logging for error monitoring.",
        taskDate: "2024-11-02",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Data migration",
        taskDescription: "Migrate data from old database to new schema.",
        taskDate: "2024-10-30",
        category: "Database",
      },
    ],
  },
  {
    id: 5,
    firstName: "Anita",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Configure server environment",
        taskDescription: "Set up staging environment for testing.",
        taskDate: "2024-11-01",
        category: "Server",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client feedback analysis",
        taskDescription: "Analyze recent feedback to plan feature updates.",
        taskDate: "2024-11-03",
        category: "Client Relations",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deployment preparation",
        taskDescription: "Prepare files and documentation for deployment.",
        taskDate: "2024-10-29",
        category: "Deployment",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
  },
];

// set data function
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// get data function
export const getLocalStorage = () => {
  // const data = localStorage.getItem("employees");
  // console.log(JSON.parse(data));

  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  // console.log(employees, admin);
  return { employees, admin };
};
