import { useQuery,useMutation} from "@tanstack/react-query";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import api from "@/services/endpoint.ts";
import {type books} from "@/types/auth.ts"

function Books() {
  const fetch = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const data: books = await api.get("allBooks")
      console.log("res", data)
      return data

    },
  
  });

  const del = useMutation({
    mutationFn: async(params:{})=>{
      console.log("the id is ",params)
       await api.remove(`deleteBook`,{params :{id:params}})
    }
  })
  const data = fetch.data
  console.log(data)
  return (
    <Table>
      <TableCaption>List of books</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
          <TableHead>Author</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((value:any) => (

          <TableRow key={value.id}>
            <TableCell>{value.title}</TableCell>
               <TableCell>{value.author}</TableCell>
            <TableCell>{value.description}</TableCell>
          
        {/* <TableCell><Button className="bg-red-700" onClick={()=> del.mutate(value.id)}>Delete</Button></TableCell> */}
        <TableCell>
          <Dialog>
            <DialogTrigger>
              <Button className="bg-red-700">Delete</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Delete</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                Are you sure you want to delete this book
              </DialogDescription>
              <DialogFooter>
                <Button variant="destructive" onClick={() => del.mutate(value.id)}>
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Books;
