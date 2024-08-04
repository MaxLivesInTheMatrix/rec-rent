'use client';

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
const UserMenu = () => {
    const registerModal = useRegisterModal()
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value);
    }, []);

    return (
        <div className="relative">
            <div className="flex items-center gap-3">
                <div onClick={() => {}} className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                    Rent out your equipment!
                </div>
                <button
                    onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-3 flex items-center gap-3 rounded-full cursor-pointer border border-white hover:shadow-md hover:border-neutral-200 transition ease-in-out duration-200"
                >
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                    <AiOutlineMenu />
                </button>
            </div>
        {isOpen && (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                <div className="flex flex-col cursor-pointer">
                    <>
                        <MenuItem onClick={() => {}} label="Login"/>
                    
                        <MenuItem onClick={registerModal.onOpen} label="Sign up"
                        />
                    </>
                </div>

            </div>
        )}
        </div>
    );
};

export default UserMenu;
