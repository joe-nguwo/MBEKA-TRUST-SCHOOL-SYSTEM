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
      const data:students[] = await api.get("allStudents")
      console.log("res",data)
      return data
      
    },
      
  });


  const data= fetch.data
  console.log(data)
 

 return (
    <Table>
      <TableCaption>List of students</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>name</TableHead>
          <TableHead>gender</TableHead>
          <TableHead>email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((value) => (
         
          <TableRow key={value.id}>
            
            <TableCell>{value.firstName}</TableCell>
            <TableCell>{value.gender}</TableCell>
            <TableCell>{value.email}</TableCell>
              
          </TableRow>
         
        ))}
      </TableBody>
    </Table>
 );
}

export default ShowStudents;
