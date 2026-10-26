import logo from "@/assets/images/logo.svg"
import menuIcon from "@/assets/images/icon-menu.svg"
import closeIcon from "@/assets/images/icon-close.svg"

export default function Header({ isMenuOpen, setMenuOpen }) {

    return (
        <header className={`p-5 flex justify-between items-center ${!isMenuOpen && "border-b border-neutral-700/20"}`}>
            <img src={logo}/>
            <img src={isMenuOpen ? closeIcon : menuIcon} onClick={() => setMenuOpen(o => !o)} className="cursor-pointer p-1 border border-neutral-700/20 rounded-sm"/>
        </header>
    )
}