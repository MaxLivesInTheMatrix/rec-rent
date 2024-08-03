'use client';

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    return (
        <div className="relative">
            <div className="flex items-center gap-3">
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
                <div className="absolute right-0 top-12 w-[40vw] md:w-[15vw] bg-white rounded-xl shadow-md overflow-hidden text-sm transition ease-in-out">
                    <div className="flex flex-col cursor-pointer">
                        <MenuItem onClick={() => {}} label="Login" />
                        <MenuItem onClick={() => {}} label="Sign up" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
