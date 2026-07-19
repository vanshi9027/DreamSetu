import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";

export  default function Dashboard(){
    return(
    <>
    <Navbar/>
    <div className="flex">
  
    <Sidebar/>
    <main className="flex-1">  Main Content</main>
    </div>
    
    </>
        
    ); 
}