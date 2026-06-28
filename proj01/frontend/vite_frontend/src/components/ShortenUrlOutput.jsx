const ShortenUrlOutput = ({shortenUrl}) => {
    return ( shortenUrl && 
        <>
            <div className="flex w-full max-w-2xl items-center rounded-3xl border border-neutral-700 bg-[#303030] px-4 py-3 shadow-lg">
                <p className="mt-6 w-full max-w-2xl rounded-xl border border-neutral-700 bg-[#303030] px-4 py-3 text-center text-blue-400 shadow-lg">
                {shortenUrl}
                </p>
            </div>
        </>
    );
}

export default ShortenUrlOutput;