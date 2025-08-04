import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-blue-600 text-2xl sm:text-3xl font-bold mb-2">
          HARUNA HANNAH ZENUM
        </h1>
      
        <h2 className="text-green-900 text-lg sm:text-xl font-semibold mb-2">
          FRONTEND DEVELOPER
        </h2>
        <p className="text-gray-500 text-sm sm:text-base font medium">
          Passionate about building user-friendly interfaces and learning new technologies. I love creating clean and elegant designs with code. 
          </p>
        </div>
    </div>
  );
}

export default App;
