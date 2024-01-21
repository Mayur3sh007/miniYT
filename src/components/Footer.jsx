import React from 'react';

export default function App() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <p className="text-sm">
            &copy; 2024 YouTube Clone. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-sm">Terms of Service</a>
          <a href="#" className="text-sm">Privacy Policy</a>
          <a href="#" className="text-sm">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
