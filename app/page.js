import Link from "next/link";

export default function Home() {
  return (
    <div className="grid bg-[rgba(20,20,20,0.79)] grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 gap-7 p-3 w-full text-white">
      <div className="bg-[#131313] sm:col-span-3  border-solid border-b-2 border-sky-500 flex justify-center items-center rounded-[5px]">
        Welcome to learning responsive layouts
      </div>
      <div className="bg-[#131313] sm:row-span-2 sm:col-span-1  border-solid border-b-2 border-purple-400 flex justify-center items-center rounded-[5px]">
        Hello World
      </div>
      <div className="bg-[#131313] sm:col-span-2 sm:row-span-2  border-solid border-b border-yellow-200 flex justify-center items-center rounded-[5px] ">
        Soooooonnnnn.......
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
