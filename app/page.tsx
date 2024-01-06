// import DropZone from "@/components/dropzone"

// import Code from "@/components/code";
import DropZone from "@/components/dropzone";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";
// import Image from "next/image";

const Home = () => {
    return ( 
        <div className="space-y-12 pb-8 space-x-72 ">
        <div className="space-y-6">
        <h1 className="text-center text-lime-400 font-serif text-6xl md:text-6xl gap-10 ">FileMagnet🚀</h1>
        <h2 className="text-center font-medium text-3xl md:text-5xl">
        Convert files with ease..
        <div className="relative inset-y-4">
        {/* <ModeToggle/> */}
        <div className="items-center flex flex-col justify-center w-full">
      <Link href="https://www.producthunt.com/posts/filemagnet?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-filemagnet" target="_blank">
          <img 
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=433044&theme=light" 
            alt="FileMagnet - FileMagnet is a free file converter, which is backendless 🎯 | Product Hunt" 
            className="w-[250px] h-[64px] hover:transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
          />
      </Link>
    </div>
        </div>
        </h2>
        </div>
        {/* Upload box */}
        <DropZone /> 
        </div>
    );
}

export default Home;

// "FileMagnet - FileMagnet is a free, file converter which is backendless 🎯 | Product Hunt"
// "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=433044&theme=light"