import { LeftArrow } from "@/images/LeftArrow"
import CarouselCard from "./CarouselCard"
export default function Carousel(props) {
    return (
        <div className="w-full h-fit">
            <CarouselCard data={props.data} />
            <div className="flex justify-end gap-3 mt-5">
                <button className="w-10 h-10 rounded border border-black flex justify-center items-center" onClick={() => {
                    if(props.index == 0){
                        props.function(props.length - 1)
                    }
                    else{
                        props.function(props.index - 1)
                    }
                    }}><LeftArrow /></button>
                <button className="w-10 h-10 rounded border border-black flex justify-center items-center rotate-180" onClick={() => {
                    if(props.index == props.length - 1){
                        props.function(0)
                    }
                    else{
                        props.function(props.index + 1)
                    }
                }}><LeftArrow /></button>
            </div>
        </div>
    )
}