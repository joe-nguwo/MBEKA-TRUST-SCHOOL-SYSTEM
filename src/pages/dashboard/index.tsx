
import StudentChart from "./StudentChart.tsx"
import  BookChart from "./bookChart.tsx"

export default function Index(){
  return(
   <div className="w-full h-full">
    <div className="flex flex-col md:flex-row gap-4">
        <StudentChart />
        <BookChart />

   </div>
   </div>
  )
}
    

  

