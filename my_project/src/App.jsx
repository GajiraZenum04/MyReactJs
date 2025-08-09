
function App() {

  return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
        <h1 className="text-orange-400 text-5xl font-extrabold mb-2 tracking-wider">Products</h1>
        <p className="text-gray-300 mb-12"> Affordable quality,every time.</p>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="border border-white p-6 w-64 text-center transition duration-300 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-400/30">
          <div className="w-24 h-24 rounded-full mx-auto mb-6 transform transition duration-300 hover:scale-110"
             style={{backgroundColor: "#e91e63" }}></div>
             <h2 className="font-bold text-lg mb-2">MATTE</h2>
             <div className="w-6 h-[2px] bg-white mx-auto mb-4"></div>
             <p className="text-sm text-gray-300 mb-6">
             a subtle but elegant finish for low-touch and delicate surfaces
             </p>
             <a href="#" className="font-bold uppercase tracking-wide transition duration-300 hover:text-sky-300"
             style={{ color: "#00bfff" }}>
              Explore
             </a>
             </div>

             <div className="border border-white p-6 w-64 text-center transition duration-300 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-400/30">
             <div className="w-24 h-24 rounded-full mx-auto mb-6 transform transition duration-300 hover:scale-110"
             style={{backgroundColor: "#e91e63" }}></div>
             <h2 className="font-bold text-lg mb-2">SEMI-GLOSS</h2>
             <div className="w-6 h-[2px] bg-white mx-auto mb-4"></div>
             <p className="text-sm text-gray-300 mb-6">
                    our signature finish for high-wear parts, details and surfaces.
             </p>
             <a href="#" className="font-bold uppercase tracking-wide transition duration-300 over hover:text-sky-300"
             style={{ color: "#00bfff" }}>
              Explore
             </a>
             </div>

             <div className="border border-white p-6 w-64 text-center transition duration-300 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-400/30">
             <div className="w-24 h-24 rounded-full mx-auto mb-6 transform transition duration-300 hover:scale-110"
              style={{ backgroundColor: "#e91e63" }}></div>
              <h2 className="font-bold text-lg mb-2">HIGH-GLOSS</h2>
              <div className="w-6 h-[2px] bg-white mx-auto mb-4"></div>
              <p className="text-sm text-gray-300 mb-6">
                an eye-stopping sine bst for metal and other smooth surfaces
              </p>
              <a href="#" className="font-bold uppercase tracking-wide transition duration-300 hover:text-sky-300"
              style={{ color: "#00bfff" }}>
                Explore
              </a>
          </div>
        </div>
      </div>
      
  );
}

export default App;
