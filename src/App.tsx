import * as React from 'react';
import Checkbox from './Components/Checkbox.tsx';
import './style.css';

export default function App() {
  return (
    <div className="h-screen bg-gradient-to-br from-purple-700 to-blue-700 items-center justify-center flex flex-col">
      <Checkbox />
    </div>
  );
}   
