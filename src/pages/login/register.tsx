import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Lock, CircleUser, Mail} from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import api from "../../services/endpoint.ts";

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handledata(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const post = useMutation({
    mutationFn: (data: { name: string; email: string; password: string }) =>
      api.post("register", { data }),
    onSuccess: () => {
      console.log("good");
      navigate("/auth/dashboard");
    },
    onError: () => {
      console.log("bad");
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(values);
    post.mutate(values);
  }

  return (
   <main className="flex items-center justify-center min-h-screen bg-gray-800">
      <Card className="w-full max-w-md p-4 shadow-md">
        <CardHeader>
          <CardTitle className="text-center">REGISTER</CardTitle>
          <CardDescription className="text-center">
            Create your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-1 text-sm font-medium">
                <CircleUser /> Username:
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
              <label htmlFor="email" className="mb-1 text-sm font-medium">
                < Mail /> Email:
              </label>
              <input
                type="email"
                value={values.email}
                onChange={handledata}
                id="email"
                name="email"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-sm font-medium">
                <Lock /> Password:
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
                {post.isPending ? "Registering..." : "Register"}
              </button>
            </CardFooter>
          </form>
        </CardContent>

        <CardAction className="flex justify-between items-center mt-4 px-4 text-sm text-blue-600">
          <Link to="/" className="hover:underline">
            Back to Login
          </Link>
        </CardAction>
      </Card>
    </main>
  );
}

export default Register;
