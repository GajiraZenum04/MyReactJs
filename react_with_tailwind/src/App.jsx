import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          HARUNA HANNAH ZENUM
        </h1>
        
        <div className="bg-white p-4 m-4 border"></div>
        <p className="font-sans text-center underline capitalize"></p>
      
        <h2 className="text-xl font-semibold mb-2">
          FRONTEND DEVELOPER
        </h2>
        <div className="border border-red-500 p-4 rounded-lg">
        <p className="text-sm font medium text-center normal-case">
          Passionate about building user-friendly interfaces and learning new technologies. I love creating clean and elegant designs with code. 
          </p>
          </div>
    </div>
  );
}

export default App;
