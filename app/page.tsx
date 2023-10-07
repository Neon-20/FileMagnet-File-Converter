// import DropZone from "@/components/dropzone"

// import Code from "@/components/code";
import DropZone from "@/components/dropzone";
// import Image from "next/image";

const Home = () => {
    return ( 
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
    );
}

export default Home;