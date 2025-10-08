export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Dotted Grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.05)_1px,_transparent_1px)] 
        [background-size:24px_24px]"
      ></div>

      {/* Random Shapes */}
      <div className="absolute top-10 left-10 w-12 h-12 bg-blue-100 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-pink-200 rotate-45 opacity-20"></div>
      <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-yellow-100 rounded-lg opacity-30 blur-md"></div>
    </div>
  );
}
