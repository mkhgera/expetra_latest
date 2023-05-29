function Rectangle({ className, width, height, big = true, ...props }) {
  return (
    <div className={`absolute ${className}  rotate-45 overflow-hidden`}>
      <div
        className={`absolute ${className} ${big ? "h-[25rem] w-[25rem]" : "h-[18rem] w-[18rem] opacity-50"} 
      rounded-[2.5rem] bg-gradient-to-r from-[#6D42EA] to-[#ABF3FF] p-8 blur-sm
      `}
      >
        <div class=" h-full w-full rounded-2xl bg-[#0C0C0C]"></div>
      </div>
    </div>
  );
}

export default Rectangle;
