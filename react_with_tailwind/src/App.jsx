import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-10 space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          HARUNA HANNAH ZENUM
        </h1>
        <p className="font-sans text-center underline capitalize"></p>
      
        <h2 className="text-xl font-semibold mb-2">
          FRONTEND DEVELOPER
        </h2>
        <p className="text-sm font medium text-justify normal-case">
          Passionate about building user-friendly interfaces and learning new technologies. I love creating clean and elegant designs with code. 
          </p>
    </div>
  );
}

export default App;
