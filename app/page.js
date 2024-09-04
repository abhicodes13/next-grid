import Link from "next/link";

export default function Home() {
  return (
    <div className="grid bg-[rgba(20,20,20,0.79)] grid-cols-1 grid-rows-6 sm:grid-cols-3 sm:grid-rows-4 gap-7 p-3 w-full text-white">
      <div className="bg-[#131313] sm:col-span-3 sm:row-span-1  border-solid border-b-2 border-sky-500 flex justify-center items-center rounded-[5px] text-[12px] animate-pulse tracking-tighter ">
        This week's top drop
      </div>
      <div className="bg-[#131313] sm:row-span-12 sm:col-span-full row-span-6 border-solid border-purple-400  justify-center items-center rounded-[5px] flex gap-7 flex-wrap overflow-hidden ">
        <iframe
          src="https://www.youtube.com/embed/GJuYvLPPm0s?si=tACbsIDozSWQtzyf"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-full h-[70%] sm:h-[70%] sm:w-[90%]"
        ></iframe>
      </div>

      <div className="bg-[#131313] sm:col-span-3 sm:row-span-1 h-[200px] text-[12px] border-solid border-b border-indigo-400 flex items-center rounded-[5px] ">
        <div className="flex flex-col gap-4 text-[#a2a2a2]">
          <Link href="/careers">Careers</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/careers">Careers</Link>
        </div>
      </div>
    </div>
  );
}
