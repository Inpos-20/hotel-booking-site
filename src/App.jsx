import Header from "./components/Header"
import Main from "./components/Main"
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col lg:h-screen lg:grid lg:grid-cols-[auto_1fr] lg:grid-rows-[auto_1fr]">
      <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
      <Main isMenuOpen={isMenuOpen}/>
    </div>
  )
}