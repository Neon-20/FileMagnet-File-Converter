import Image from "next/image";

export default function Code(){
    return(
    <div>
    <div className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono items-center justify-center ml-52 space-y-4 mt-16 border-2 border-sky-500">
    <div className="flex justify-between items-center">
    <div className="flex space-x-2 text-red-500">
    <div className="w-3 h-3 rounded-full bg-red-500" />
    <div className="w-3 h-3 rounded-full bg-yellow-500" />
    <div className="w-3 h-3 rounded-full bg-green-500" />
    </div>
    <p className="text-sm">bash</p>
    </div>
    <div className="mt-4">
    <p className="text-white">Clone the repo</p>
    <p className="text-green-400">$ https://github.com/your-username/FileMagnet-File-Converter.git</p>
    </div>
    </div>
    <div className="bg-black border-2 border-sky-500 text-white p-6 rounded-lg w-full max-w-lg font-mono items-center justify-center ml-52 space-y-4 mt-16">
    <div className="flex justify-between items-center">
    <div className="flex space-x-2 text-red-500">
    <div className="w-3 h-3 rounded-full bg-red-500" />
    <div className="w-3 h-3 rounded-full bg-yellow-500" />
    <div className="w-3 h-3 rounded-full bg-green-500" />
    </div>
    <p className="text-sm">bash</p>
    </div>
    <div className="mt-4">
    <p className="text-white">Install the packages</p>
    <p className="text-green-400">$ npm i</p> <p>or</p>
    <p className="text-green-400">$ pnpm i</p>
    </div>
    </div>
    <div className="bg-black border-2 border-sky-500 text-white p-6 rounded-lg w-full max-w-lg font-mono items-center justify-center ml-52 space-y-4 mt-16">
    <div className="flex justify-between items-center">
    <div className="flex space-x-2 text-red-500">
    <div className="w-3 h-3 rounded-full bg-red-500" />
    <div className="w-3 h-3 rounded-full bg-yellow-500" />
    <div className="w-3 h-3 rounded-full bg-green-500" />
    </div>
    <p className="text-sm">bash</p>
    </div>
    <div className="mt-4">
    <p className="text-white">Run the Application</p>
    <p className="text-green-400">$ npm run dev</p> <p>or</p>
    <p className="text-green-400">$ pnpm dev</p>
    </div>🎉
    </div>
    <p className="items-center space-y-6 justify-center space-x-20 p-6 text-red-500 text-2xl font-medium mt-10 flex">Boom, your Project is setup successfully and you are ready to launch 🎉</p>
<footer className=" bg-white rounded-lg mt-20 dark:bg-gray-900 m-4 w-full">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                <Image src="./logo.svg" className="h-8 mr-4" alt="FileMagnet Logo" width={40} height={40}/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white left-full">FileMagnet🚀</span>
            </a>
            <p className="text-center text-teal-500 text-lg font-medium">Made with ❤️ by Pranav</p>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="https://github.com/Neon-20/FileMagnet-File-Converter#filemagnet" target="_blank" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="https://tally.so/r/woRAPV" target="_blank" className="mr-4 hover:underline md:mr-6">Contact</a>
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
</footer>
      </div>

    )
}