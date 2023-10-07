// import DropZone from "@/components/dropzone"

// import Code from "@/components/code";
import DropZone from "@/components/dropzone";
import { ModeToggle } from "@/components/mode-toggle";
// import Image from "next/image";

const Home = () => {
    return ( 
        <div className="space-y-12 pb-8 space-x-72 ">
        <div className="space-y-6">
        <h1 className="text-center text-lime-400 font-serif text-6xl md:text-6xl gap-10 ">FileMagnet🚀</h1>
        <h2 className="text-center font-medium text-3xl md:text-5xl">
        Convert files with ease..
        <div className="relative inset-y-4">
        <ModeToggle/>
        </div>
        </h2>
        </div>
        {/* Upload box */}
        <DropZone /> 
        </div>
    );
}

export default Home;