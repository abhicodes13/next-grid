export default function Home() {
  return (
    <div className="grid bg-[#1f1f1f] grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-3 gap-4 p-3 w-full  text-white text-center">
      <div className="bg-yellow-950 sm:col-span-3  border-solid border-r-2 border-r-white">
        1111111
      </div>
      <div className="bg-neutral-800 sm:row-span-2 sm:col-span-1  border-solid border-2 border-r-white">
        22222222
      </div>
      <div className="bg-amber-950 sm:col-span-2 sm:row-span-2  border-solid border-2 border-r-white ">
        333333
      </div>
    </div>
  );
}
