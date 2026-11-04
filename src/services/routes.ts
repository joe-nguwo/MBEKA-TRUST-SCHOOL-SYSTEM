export const ROUTES = {
 login: "/api/v1/login/admin",
 register: "/api/v1/admin/register",
 addStudent:"/api/v1/students/register",
 allStudents:"/api/v1/student/all",
 numOfstdudent:"/api/v1/student/num",
 genderCount:"/api/v1/student/genderCount"

};

export type APIRoute = keyof typeof ROUTES;