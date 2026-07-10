import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import api from "../../services/endpoint.ts";

function AddStudent() {
  const [values, setValues] = useState({
    Fname: "",
    Lname: "",
    email: "",
    grade: "",
    gender: "",
  });

  const handledata = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const post = useMutation({
    mutationFn: (data: {
      Fname: string;
      Lname: string;
      email: string;
      grade: string;
      gender: string;
    }) => api.post("addStudent", { data }),

    onSuccess: () => {
      console.log("good");
    },

    onError: (error: Error) => {
      console.log("bad", error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values);
    post.mutate(values);
  };

  const inputStyle =
    "w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-green-500";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
          Add Student
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <h2 className="text-center text-xl font-bold">
            Register Student
          </h2>
          <p className="text-center text-sm text-gray-500">
            Fill in the student's details.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className={inputStyle}
            type="text"
            name="Fname"
            placeholder="First Name"
            value={values.Fname}
            onChange={handledata}
            required
          />

          <input
            className={inputStyle}
            type="text"
            name="Lname"
            placeholder="Last Name"
            value={values.Lname}
            onChange={handledata}
            required
          />

          <input
            className={inputStyle}
            type="email"
            name="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handledata}
            required
          />

          <div>
            <p className="mb-2 text-sm font-medium">Gender</p>

            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={values.gender === "female"}
                  onChange={handledata}
                  required
                />
                Female
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="fale"
                  checked={values.gender === "male"}
                  onChange={handledata}
                />
                Male
              </label>
            </div>
          </div>

          <input
            className={inputStyle}
            type="number"
            name="grade"
            placeholder="Grade (1 - 12)"
            value={values.grade}
            onChange={handledata}
            min={1}
            max={12}
            required
          />

          <button
            type="submit"
            disabled={post.isPending}
            className="w-full rounded-md bg-green-600 py-2 font-medium text-white transition hover:bg-green-700 disabled:opacity-50"
          >
            {post.isPending ? "Registering..." : "Register"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddStudent;