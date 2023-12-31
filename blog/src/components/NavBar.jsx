import { LogoSVG } from "@/images/LogoSVG"
import { SearchIcon } from "@/images/SearchIcon"
export default function NavBar(){
    return (
        <header className="py-10 h-fit flex justify-between mb-20">
            <a href="http://localhost:3000" className="flex gap-2 items-center">
                <LogoSVG/>
                <h1 className="text-2xl tracking-wider">
                    Meta<span className="font-bold">Blog</span>
                </h1>
            </a>
            <div className="flex gap-10 items-center">
                <a href="http://localhost:3000" className="font-light">Home</a>
                <a href="http://localhost:3000/input" className="font-light">Blog</a>
                <a href="http://localhost:3000/contact" className="font-light">Contact</a>
                </div>
            <div className="bg-gray-100 rounded w-fit px-4 flex items-center">
                <input type="text" id="search" placeholder="Search" className="bg-transparent h-full w-32 border-none" />
                <SearchIcon className="h-full"/>
            </div>
        </header>
    )}