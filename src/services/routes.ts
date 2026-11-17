

export const ROUTES = {
 login: "/api/v1/admin/auth/login",
 register: "/api/v1/admin/register",
 addStudent:"/api/v1/students/register",
 allStudents:"/api/v1/students/all",
 numOfstdudent:"/api/v1/student/num",
 genderCount:"/api/v1/student/genderCount",
 deleteStudent:"/api/v1/students/delete/:id",
 addBook:"/api/v1/books/register",
allBooks:"/api/v1/books/all",
deleteBook:"/api/v1/books/delete/:id"

};

export type APIRoute = keyof typeof ROUTES;