import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableHeader,
  TableBody,
  //TableFooter,
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
    queryFn: () => api.get("allStudents"),
  });

  //let x: students[] = fetch.data;

  return (
    <Table>
      {/* <TableCaption>List of students</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>name</TableHead>
          <TableHead>age</TableHead>
          <TableHead>email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {x.map((x) => (
          <TableRow key={x.id}>
            <TableCell>{x.name}</TableCell>
            <TableCell>{x.age}</TableCell>
            <TableCell>{x.email}</TableCell>
          </TableRow>
        ))}
      </TableBody> */}
    </Table>
  );
}

export default ShowStudents;
