import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import React, { useState,useContext } from "react";
import  { ColurContext } from "@/context/settings.ts";
import {auth} from "@/context/auth.tsx";

import {  Lock, CircleUser } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import api from "@/services/endpoint.ts";


function Loginpage() {
  const navigate = useNavigate();
  const x = useContext(ColurContext)
  


  const [values, setValue] = useState({
    name: "",
    password: "",
  });

  function handledata(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const post = useMutation({
    mutationFn: (data: { name: string; password: string }) =>
      api.post("login", { data }),
    onSuccess: (data) => {
      auth.setBool = false
      console.log(data);
      navigate("/auth/dashboard");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(values);
    post.mutate(values);
  }

  return (
   <main className="flex items-center justify-center min-h-screen" style={{background:`var(${x?.theme})`}} >
      <Card className="w-full max-w-md p-4 shadow-md"  >
           <button onClick={x?.setTheme}>ChangeTheme</button>
        <CardHeader>
          <CardTitle className="text-center">LOGIN</CardTitle>
          <CardDescription className="text-center"></CardDescription>
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
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-sm font-medium">
                < Lock></ Lock>
                Password:
              </label>
              <input
                type="password"
                value={values.password}
                onChange={handledata}
                id="password"
                name="password"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <CardFooter className="p-0">
              <button
                type="submit"
                disabled={post.isPending}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                {post.isPending ? "Login in ..." : "Login"}
              </button>
            </CardFooter>
          </form>
        </CardContent>

        <CardAction className="flex justify-between items-center mt-4 px-4 text-sm text-blue-600">
          <Link to="/forgot-password" className="hover:underline">
            Forgot Password?
          </Link>
          <Link to="/register" className="hover:underline font-medium">
            Sign Up
          </Link>
        </CardAction>
      </Card>
    </main>
  );
}

export default Loginpage;
