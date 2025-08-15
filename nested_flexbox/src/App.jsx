import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col">

      <header className="bg-pink-200 p-4 text-center font-extrabold">HEADER</header>

      <div className="flex flex-5">

        <aside className="bg-purple-400 w-1/3 flex items-center justify-center font-bold">ASIDE</aside>

        <div className="flex flex-col flex-2">

          <nav className="bg-blue-300 p-4 text-center font-bold">NAV</nav>

          <article className="bg-green-500 flex-2 flex item-center justify-center font-bold">ARTICLE</article>

        </div>
      </div>

      <footer className="bg-yellow-300 p-4 text-center font-bold">FOOTER</footer>
    </div>
  );
}

export default App;
