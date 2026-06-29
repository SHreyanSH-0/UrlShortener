import React, { useState } from "react";

const ShortenUrlOutput = ({shortenUrl}) => {

    const [text, setText] = useState("Copy");

    return ( shortenUrl && 
        <>
            <div className="flex w-full max-w-2xl items-center rounded-3xl border border-neutral-700 bg-[#303030] px-4 py-3 shadow-lg flex-row">
                
                <p className="mt-0 w-full max-w-2xl rounded-xl border border-neutral-700 bg-[#303030] px-4 py-3 text-center text-blue-400 shadow-lg">
                {shortenUrl}
                </p>

                <button
                    className={`ml-4 w-24 rounded-lg px-4 py-2 text-white ${text === "Copy"? "bg-blue-500 hover:bg-blue-600": "bg-gray-500 hover:bg-gray-600"}`}
                    onClick={() => {                        
                        navigator.clipboard.writeText(shortenUrl);
                        text === "Copy" ? setText("Copied!") : setText("Copy");

                    }}
                >
                    {text}
                </button>
            </div>
        </>
    );
}

export default ShortenUrlOutput;