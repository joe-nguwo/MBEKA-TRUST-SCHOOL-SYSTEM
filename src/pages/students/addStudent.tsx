import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Mail,
  User,
  VenusAndMars,
  GraduationCap,
} from "lucide-react";
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

  const iconStyle = "h-5 w-5 shrink-0 text-gray-500";

  const labelStyle =
    "mb-2 block text-sm font-semibold tracking-wide text-gray-700";

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

          {/* First Name */}
          <div>
            <label className={labelStyle}>FIRST NAME</label>

            <div className="flex items-center gap-3">
              <User className={iconStyle} />
              <input
                className={inputStyle}
                type="text"
                name="Fname"
                placeholder="First Name"
                value={values.Fname}
                onChange={handledata}
                required
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label className={labelStyle}>LAST NAME</label>

            <div className="flex items-center gap-3">
              <User className={iconStyle} />
              <input
                className={inputStyle}
                type="text"
                name="Lname"
                placeholder="Last Name"
                value={values.Lname}
                onChange={handledata}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className={labelStyle}>EMAIL ADDRESS</label>

            <div className="flex items-center gap-3">
              <Mail className={iconStyle} />
              <input
                className={inputStyle}
                type="email"
                name="email"
                placeholder="Email Address"
                value={values.email}
                onChange={handledata}
                required
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className={labelStyle}>GENDER</label>

            <div className="flex items-center gap-3">
              <VenusAndMars className={iconStyle} />

              <div className="flex flex-1 gap-6">
                <label className="flex items-center gap-2 text-sm text-gray-700">
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

                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={values.gender === "male"}
                    onChange={handledata}
                  />
                  Male
                </label>
              </div>
            </div>
          </div>

          {/* Grade */}
          <div>
            <label className={labelStyle}>GRADE</label>

            <div className="flex items-center gap-3">
              <GraduationCap className={iconStyle} />
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
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={post.isPending}
            className="w-full rounded-md bg-green-600 py-2.5 font-medium text-white transition hover:bg-green-700 disabled:opacity-50"
          >
            {post.isPending ? "Registering..." : "Register"}
          </button>

        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddStudent;