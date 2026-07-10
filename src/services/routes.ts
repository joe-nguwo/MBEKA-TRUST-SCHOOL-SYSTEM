export const ROUTES = {
 login: "/api/v1/login/admin",
 register: "/api/v1/admin/register",
 addStudent:"/api/v1/students/register",
 allStudents:"/api/v1/student/all",

};

export type APIRoute = keyof typeof ROUTES;