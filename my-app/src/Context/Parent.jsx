import { Outlet } from "react-router";

export default function Parent(){
    const[count,setCount ] = React.useState(0);
    return <Outlet context={[count,setCount]}/>
}