import Carousel from "@/components/Carousel"
import NavBar from "@/components/NavBar"
export default function Content(){
    return <div className="flex flex-col gap-20">
                <NavBar/>
                <Carousel/>
            </div>
}