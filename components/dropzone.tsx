"use client";
import { FiUploadCloud } from 'react-icons/fi';
import { LuFileSymlink } from 'react-icons/lu';
import { MdClose } from 'react-icons/md';
import ReactDropZone from 'react-dropzone';
import bytesToSize from '@/utils/bytes-to-size';
import fileToIcon from '@/utils/file-to-icon';
import { useState, useEffect, useRef } from 'react';
import { useToast } from '@/components/ui/use-toast';
import compressFileName from '@/utils/compress-file-name';
import { Skeleton } from '@/components/ui/skeleton';
import convertFile from '@/utils/convert';
import { ImSpinner3 } from 'react-icons/im';
import { MdDone } from 'react-icons/md';
import { Badge } from '@/components/ui/badge';
import { HiOutlineDownload } from 'react-icons/hi';
import { BiError } from 'react-icons/bi';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from './ui/select';
import { Button } from './ui/button';
import loadFfmpeg from '@/utils/load-ffmpeg';
import type { Actions } from '@/types';
import { FFmpeg } from '@ffmpeg/ffmpeg';

const extensions = {
    image: [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'bmp',
    'webp',
    'ico',
    'tif',
    'tiff',
    'svg',
    'raw',
    'tga',
    ],
    video: [
        'mp4',
        'm4v',
        'mp4v',
        '3gp',
        '3g2',
        'avi',
        'mov',
        'wmv',
        'mkv',
        'flv',
        'ogv',
        'webm',
        'h264',
        '264',
        'hevc',
        '265',
    ],
    audio: ['mp3', 'wav', 'ogg', 'aac', 'wma', 'flac', 'm4a'],
    };




export default function DropZone(){
const [isHover, setIsHover] = useState<boolean>(false);
const [files, setFiles] = useState<Array<any>>([]);
const [actions,setActions] = useState<Actions[]>([]);
const [is_ready, setIsReady] = useState<boolean>(false);
const [is_loaded, setIsLoaded] = useState<boolean>(false);
const [is_converting, setIsConverting] = useState<boolean>(false);
const [is_done, setIsDone] = useState<boolean>(false);
const ffmpegRef = useRef<any>(null);
const {toast} = useToast();

const accepted_files = {
    'image/*': [
        '.jpg',
        '.jpeg',
        '.png',
        '.gif',
        '.bmp',
        '.webp',
        '.ico',
        '.tif',
        '.tiff',
        '.raw',
        '.tga',
    ],
    'audio/*': [],
    'video/*': [],
}

const reset = () =>{
    setIsDone(false);
    setActions([]);
    setFiles([]);
    setIsReady(false);
    setIsConverting(false);
}

const handleUpload = (data:Array<any>) => {
handleExitHover();
setFiles(data);
const temp: Actions[] = [];
data.forEach((file:any) => {
    const formData = new FormData();
    temp.push({
        file_name: file.name,
        file_size: file.size,
        from: file.name.slice(((file.name.lastIndexOf('.') - 1) >>> 0) + 2),
        to: null,
        file_type: file.type,
        file,
        is_converted: false,
        is_converting: false,
        is_error: false,
    })
})
setActions(temp);
};


const handleHover = (): void => setIsHover(true); 
const handleExitHover = (): void => setIsHover(false);


return ( 
    <ReactDropZone
    onDrop={handleUpload}
    onDragEnter={handleHover}
    onDragLeave={handleExitHover}
    accept={accepted_files}
    onDropRejected={()=>{
        handleExitHover();
        toast({
        variant:"destructive",
        title: "Error Uploading your file",
        description: "Allowed files: Video,Audio,Image",
        duration: 3000,
        })
        }}
    onError={()=>{
        handleExitHover();
        toast({
        variant:"destructive",
        title: "Error Uploading your file",
        description: "Allowed files: Video,Audio,Image",
        duration: 3000,
        })
    }}      
    >
    {({getRootProps,getInputProps}) => (
        <div
        {...getRootProps()} 
        className="bg-gray-50 h-72 relative -inset-x-36 lg:h-80 xl:h-96 rounded-3xl shadow-sm border-2 border-dashed cursor-pointer flex items-center justify-center mr-96"
        >
        <input {...getInputProps()} />
        <div className="space-y-4 text-gray-500">
        {isHover ? (
        <>
        <div className="justify-center flex text-6xl">
        <LuFileSymlink/>
        </div>
        <h3 className="text-center font-medium text-2xl">
        Yes,Right Here..
        </h3>
        </>
    ):(
        <>
        <div className="justify-center flex text-6xl">
        <FiUploadCloud />
        </div>
        <h3>
        Click, or drop your files here
        </h3>
        </>
    )}
        </div>
        </div>
    )}
    </ReactDropZone>
);
}


