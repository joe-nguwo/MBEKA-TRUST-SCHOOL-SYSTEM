import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  User,
  BookOpen,
  FileText,
} from "lucide-react";
import api from "../../services/endpoint.ts";

function AddBook() {
  const [values, setValues] = useState({
    Title: "",
    Author: "",
    Description: "",
    Grade: "",
  });

  const handledata = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const post = useMutation({
    mutationFn: (data: {
      Title: string;
      Author: string;
      Description: string;
    }) => api.post("addBook", { data }),

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
          Add Book
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <h2 className="text-center text-xl font-bold">
            Register Book
          </h2>
          <p className="text-center text-sm text-gray-500">
            Fill in the books details.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Author */}
          <div>
            <label className={labelStyle}>AUTHOR NAME</label>

            <div className="flex items-center gap-3">
              <User className={iconStyle} />
              <input
                className={inputStyle}
                type="text"
                name="Author"
                placeholder="Author"
                value={values.Author}
                onChange={handledata}
                required
              />
            </div>
          </div>

          {/* Book Title */}
          <div>
            <label className={labelStyle}>BOOK TITLE</label>

            <div className="flex items-center gap-3">
              <BookOpen className={iconStyle} />
              <input
                className={inputStyle}
                type="text"
                name="Title"
                placeholder="Book Title"
                value={values.Title}
                onChange={handledata}
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className={labelStyle}>BOOK DESCRIPTION</label>

            <div className="flex items-center gap-3">
              <FileText className={iconStyle} />
              <input
                className={inputStyle}
                type="text"
                name="Description"
                placeholder="Book Description"
                value={values.Description}
                onChange={handledata}
                required
              />
            </div>
          </div>
            <div>
            <label className={labelStyle}>GRADE</label>

            <div className="flex items-center gap-3">
              <FileText className={iconStyle} />
              <input
                className={inputStyle}
                type="number"
                min="1"
                max="12"
                name="Grade"
                placeholder="Grade"
                value={values.Grade}
                onChange={handledata}
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

export default AddBook;