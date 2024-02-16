// const arr = [1, 2, 3, 4];

// const result = arr.reduce((acc, item) => {
//   acc.push(acc + item);
//   return acc;
// }, []);

// console.log("final result", result);

const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management ",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CREATE_FACULTY",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
  {
    name: "Course Management ",
    children: [
      {
        name: "Offered Course",
        path: "offered-course",
        element: "CREATE_ADMIN",
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: "NABLINK",
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: "NAVLINK",
      })),
    });
  }
  return acc;
}, []);

console.log(JSON.stringify(newArray));
