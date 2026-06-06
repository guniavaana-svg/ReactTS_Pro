import { NavLink} from "react-router-dom";
import { API_URL } from "../../config";
import { useEffect,useState } from "react";
interface Menu{
    id:number;
    path:string;
    name:string;
}
function Nav (){
    const [menuData,setMenu]=useState<Menu[]>([])
    useEffect(()=>{
        async function getMenu() {
            try{
                const response=await fetch(`${API_URL}/menu`)
                const menuData:Menu[]=await response.json()
                setMenu(menuData);
            }catch(e){
                console.error(e);
            }
        } 
        getMenu()
    },[])

    return(
        <nav className="flex gap-3 p-3">
            {menuData.map(item=>(
               <NavLink key={item.id} to={item.path} end>{item.name}</NavLink>
            ))}
        </nav>
    )
}
export default Nav