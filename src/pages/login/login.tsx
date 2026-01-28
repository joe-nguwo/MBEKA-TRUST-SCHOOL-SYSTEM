import {useMutation} from "@tanstack/react-query"
import React,{ useState} from "react";
import {Lock,CircleUser} from "lucide-react"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import api from "../../services/endpoint.ts"



function Loginpage() {
  const [values, setValue] = useState({
    id: "",
    name: "",
  });




  function handledata(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const post = useMutation({
    mutationFn: (data: { id: string; name: string }) => api.post("login", {data}),
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(values);
    post.mutate(values)
  }


 

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-4 shadow-md">
        <CardHeader>
          <CardTitle className="text-center">LOGIN</CardTitle>
          <CardDescription className="text-center">
           
            
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-1 text-sm font-medium">
                 <CircleUser></CircleUser>
                Username:
              </label>
              <input
                type="text"
                value={values.name}
                onChange={handledata}
                id="username"
                name="name"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-sm font-medium">
                <Lock></Lock>
                Password:
              </label>
              <input
                type="password"
                value={values.id}
                onChange={handledata}
                id="password"
                name="id"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <CardFooter className="p-0">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            </CardFooter>
          </form>
        </CardContent>

       
        <CardAction className="flex justify-between items-center mt-4 px-4 text-sm text-blue-600">
          <a href="/forgot-password" className="hover:underline">
            Forgot Password?
          </a>
          <a href="/register" className="hover:underline font-medium">
            Sign Up
          </a>
        </CardAction>
      </Card>
    </main>
  );
}

export default Loginpage;
