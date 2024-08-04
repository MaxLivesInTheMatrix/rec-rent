'use client';

import {useEffect,useState} from "react";
import LoadingSpinner from "./LoadingSpinner";

interface ClientOnlyProps{
    children:React.ReactNode;
}
const ClientOnly:React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMounted, setHasMounted]= useState(false);

    useEffect(()=>{
        setHasMounted(true);
    },[]);
    if(!hasMounted){
        return <LoadingSpinner />;
    }
    return ( 
        <>
       {children}
       </>
       );
}
 
export default ClientOnly;