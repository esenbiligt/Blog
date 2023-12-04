import { LeftArrow } from "@/images/LeftArrow"
import CarouselCard from "./CarouselCard"
export default function Carousel(){
    return (
    <div className="px-96 w-full h-fit">
        <CarouselCard />
        <div className="flex justify-end gap-3 mt-5">
            <button className="w-14 h-14 rounded-2xl border border-black flex justify-center items-center"><LeftArrow/></button>
            <button className="w-14 h-14 rounded-2xl border border-black flex justify-center items-center rotate-180"><LeftArrow/></button>
        </div>
    </div>
    )
}