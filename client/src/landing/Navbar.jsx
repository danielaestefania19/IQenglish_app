const Navbar = () => {
    return (
      <nav className="bg-gradient-to-b from-[#0c0e15] to-[#323335]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ">Creativas</span>
          </a>
          <h1 to="/" className="p-4 text-white">Home</h1>
          <h1 className="p-4 text-white">
              <a> Docs </a>
          </h1>
        
              <button className="inline-flex items-center justify-center rounded-xl bg-[#1C00FF] borderpx-3 py-2 text-sm font-semibold text-white  shadow-sm transition-all duration-150">
                  <div className="flex items-center">Logout </div>
              </button>
  
      </div>
  </nav>
    );
  };
  
  export default Navbar;
  