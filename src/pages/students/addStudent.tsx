import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleUser, Cake, Mail } from "lucide-react";
import api from "../../services/endpoint.ts";

function AddStudent() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handledata = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const post = useMutation({
    mutationFn: (data: { name: string; email: string; age: string }) =>
      api.post("addStudent", { data }),
    onSuccess: () => {
      console.log("good");
    },
    onError: (error:Error) => {
      console.log("bad",error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values);
    post.mutate(values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition-colors">
          Add Student
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>Students</DialogHeader>

        <Card className="w-full max-w-md shadow-md">
          <CardHeader>
            <CardTitle className="text-center">REGISTER</CardTitle>
            <CardDescription className="text-center">
              Add a student
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="username"
                  className="mb-1 flex items-center gap-2 text-sm font-medium"
                >
                  <CircleUser size={18} />
                  Username
                </label>

                <input
                  id="username"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handledata}
                  required
                  className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-1 flex items-center gap-2 text-sm font-medium"
                >
                  <Mail size={18} />
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handledata}
                  required
                  className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="age"
                  className="mb-1 flex items-center gap-2 text-sm font-medium"
                >
                  <Cake size={18} />
                  Age
                </label>

                <input
                  id="age"
                  type="text"
                  name="age"
                  value={values.age}
                  onChange={handledata}
                  required
                  className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <CardFooter className="p-0">
                <button
                  type="submit"
                  disabled={post.isPending}
                  className="w-full rounded bg-green-600 py-2 text-white transition-colors hover:bg-green-700 disabled:opacity-50"
                >
                  {post.isPending ? "Registering..." : "Register"}
                </button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

export default AddStudent;