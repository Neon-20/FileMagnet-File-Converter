import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {BsGithub} from 'react-icons/bs';
import {GrMenu} from 'react-icons/gr';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetHeader,
    SheetTrigger,
    SheetFooter
} from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle";

const NavBar = () => {
    return ( 
    <nav className="w-full backdrop-blur-lg bg-white bg-opacity-30 z-50 fixed h-16 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
    <Link href="https://pranavrajveer.com/" target="_blank">
    <Image 
    alt="logo"
    src="/logo.svg"
    width={50}
    height={100}
    className=" cursor-pointer mt-2"
    />
    </Link>
    <div className="p-6 mt-2 ml-16 gap-4 md:gap-4 lg:gap-6 hidden md:flex items-start justify-center">
        <Button variant={"ghost"} className="font-semibold text-md cursor-pointer hover:bg-slate-300 hover:text-black">
        <Link href="/">Home</Link>
        </Button>
        <Button variant={"ghost"} className="font-semibold text-md cursor-pointer hover:bg-slate-300 hover:text-black">
        <Link href="https://github.com/Neon-20/FileMagnet-File-Converter#filemagnet" target="_blank">About</Link>
        </Button>
        <Button variant={"ghost"} className="font-semibold text-md cursor-pointer hover:bg-slate-300 hover:text-black">
        <Link href="/setup">Setup Locally</Link>
        </Button>
        <Button variant={"ghost"} className="font-semibold text-md cursor-pointer hover:bg-slate-300 hover:text-black">
        <Link href={"https://tally.so/r/woRAPV"} target="_blank">Contact Me</Link>
        </Button>
    </div>
    <Link href="https://github.com/Neon-20/FileMagnet-File-Converter" target="_blank">
    <Button variant={"default"} size={"default"}
    className="rounded-md bg-lime-400 hover:bg-sky-400 text-black w-fit gap-2 items-center hidden md:flex">
    <span> Github Repo </span>
    <span className="text-xl">
        <BsGithub/>
    </span>
    </Button>
    </Link>
    {/* Mobile Sidebar Using sheet shadcn */}
    <Sheet>
        <SheetTrigger className="block md:hidden p-6">
        <span className="text-2xl">
        <GrMenu/>
        </span>
        </SheetTrigger>
        <SheetContent>
        <SheetHeader>
        <SheetDescription>
        <div className="w-full space-y-6">
        <Link href={"/"}>
        <Button variant={"link"} className="font-semibold text-md w-full">
        Home
        </Button>
        </Link>
        <Link href={"https://github.com/Neon-20/FileMagnet-File-Converter#filemagnet"} target="_blank">
        <Button variant={"link"} className="font-semibold text-md w-full">
        About
        </Button>
        </Link>
        <Link href={"https://tally.so/r/woRAPV"} target="_blank">
        <Button variant={"link"} className="font-semibold text-md w-full">
        Contact Me
        </Button>
        </Link>
        </div>
        </SheetDescription>
        </SheetHeader>
        </SheetContent>
    </Sheet>
    </nav>
    );
}


export default NavBar;