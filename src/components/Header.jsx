import React, { useState } from 'react';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-red-600 border-r-amber-50 py-2">
      <nav className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="lg:hidden block text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <a href="#" className="text-2xl font-bold text-white ml-2">
            YouTube Mini
          </a>
        </div>

        <div className={`lg:flex items-center ${showMenu ? '' : 'hidden'}`}>
          <ul className="lg:flex space-x-4 ml-auto">
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Trending
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Library
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                History
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
