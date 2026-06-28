import ShortenUrlOutput from './ShortenUrlOutput'

const Background = ({url, shortenUrl}) => {
  return (
        <>
        <div className="flex h-screen bg-[#212121] flex-col">


        <div className="flex flex-1 items-center justify-center px-4 flex-col gap-10">
          <div className="flex flex-col items-center gap-4">
            <p className="text-5xl font-bold text-white">URL Shortener</p>
          </div>
          <div className="w-full flex flex-col items-center gap-4">
            {url}
            <ShortenUrlOutput shortenUrl={shortenUrl} />
          </div>
        </div>
        </div>
        </>

  );
}

export default Background;