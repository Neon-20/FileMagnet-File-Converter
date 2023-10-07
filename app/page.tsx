// import DropZone from "@/components/dropzone"

import Code from "@/components/code";
import DropZone from "@/components/dropzone";
import Image from "next/image";

const Home = () => {
    return ( 
        <>
        <div className="space-y-12 pb-8 space-x-72 ">
        <div className="space-y-6">
        <h1 className="text-center text-red-500 font-nunito text-5xl md:text-6xl gap-10 ">FileMagnet🚀</h1>
        <h2 className="text-center font-medium text-3xl md:text-5xl">
        Convert files with ease..
        </h2>
        </div>
        {/* Upload box */}
        <DropZone /> 
        </div>
        {/* <footer className=" bg-white rounded-lg mt-20 dark:bg-gray-900 m-4 w-full">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                <Image src="./logo.svg" className="h-8 mr-4" alt="FileMagnet Logo" width={40} height={40}/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white left-full">FileMagnet🚀</span>
            </a>
            <p className="text-center text-black text-lg font-medium">Made with ❤️ by Pranav</p>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/about" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="/contact" className="mr-4 hover:underline md:mr-6">Contact</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/pranav-rajveer/" className="mr-4 hover:underline md:mr-6" target="_blank">Linkedin</a>
                </li>
                <li>
                    <a href="https://github.com/Neon-20/FileMagnet-File-Converter" className="hover:underline" target="_blank">Github</a>
                </li>
            </ul>
            
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mr-8">© 2023 <a href="https://google.com/" className="hover:underline">FileMagnet</a>. All Rights Reserved.</span>
    </div>
        </footer> */}
        </>
    );
}

export default Home;