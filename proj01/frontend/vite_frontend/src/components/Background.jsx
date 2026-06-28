import ShortenUrlOutput from './ShortenUrlOutput'

const Background = ({url, shortenUrl}) => {
  return (
        <>
        <div className="flex h-screen bg-[#212121] flex-col">
        <div className="flex flex-1 items-center justify-center px-4 flex-col gap-4">
            {url}
            <ShortenUrlOutput shortenUrl={shortenUrl} />
        </div>
        </div>
        </>

  );
}

export default Background;