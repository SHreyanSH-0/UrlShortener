import Sidebar from "./Sidebar";
import { useState, useRef } from "react";

const Url =({setShortenUrl}) => {
    const urlRef = useRef(null); 
    
    const generateUrl = () =>{
        const url = urlRef.current.value;
        setShortenUrl(url);
    }
    return (
        <div className="flex w-full max-w-2xl items-center rounded-3xl border border-neutral-700 bg-[#303030] px-4 py-3 shadow-lg">
        <input
            type="url"
            ref={urlRef}
            placeholder="Paste a website URL..."
            className="flex-1 bg-transparent text-white placeholder:text-neutral-500 outline-none"
        />

        <button className="ml-3 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200 cursor-pointer" onClick={generateUrl}>
            Shorten
        </button>
        </div>
    );
};

export default Url;