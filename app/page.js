export default function Home() {
  return (
    <div className="grid bg-[rgb(20,20,20)] grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-4 gap-7 p-3 w-full  text-white text-center">
      <div className="bg-yellow-950 sm:col-span-3  border-solid border-b-2 border-r-white flex justify-center items-center">
        Welcome to learning responsive layouts
      </div>
      <div className="bg-neutral-600 sm:row-span-2 sm:col-span-1  border-solid border-b-2 border-r-white flex justify-center items-center">
        Hello World
      </div>
      <div className="bg-amber-600 sm:col-span-2 sm:row-span-2  border-solid border-b border-r-white flex justify-center items-center ">
        Soooooonnnnn.......
      </div>
      <div className="bg-amber-600 sm:col-span-3 sm:row-span-1  border-solid border-b border-r-white flex justify-center items-center ">
        Soooooonnnnn.......
      </div>
    </div>
  );
}
