'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () =>{
    const router = useRouter();

    return (
        <Image
            alt = "Logo" 
            className="hidden md:block cursor-pointer drop-shadow-sm"
            height = "110"
            width = "110"
            src="/images/recrentlogo.svg"
            onClick = {() => router.push("/")}
            />

    )
}

export default Logo;