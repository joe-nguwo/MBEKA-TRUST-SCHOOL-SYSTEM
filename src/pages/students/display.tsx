import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { type students } from "@/types/auth";
import api from "@/services/endpoint.ts";

function ShowStudents() {
  const fetch = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const data: students[] = await api.get("allStudents")
      console.log("res", data)
      return data

    },

  });


  const data = fetch.data
  console.log(data)


  return (
    <Table>
      <TableCaption>List of students</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Grade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((value) => (

          <TableRow key={value.id}>
            <TableCell>{value.firstName}</TableCell>
               <TableCell>{value.lastName}</TableCell>
            <TableCell>{value.gender}</TableCell>
            <TableCell>{value.email}</TableCell>
            <TableCell>{value.grade}</TableCell>

          </TableRow>

        ))}
      </TableBody>
    </Table>
  );
}

export default ShowStudents;
