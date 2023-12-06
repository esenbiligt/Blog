import { LeftArrow } from "@/images/LeftArrow"
import CarouselCard from "./CarouselCard"

function changeIndex(index, length, indexFunction, operator) {
    if(operator == '-' && index == 0){
        indexFunction(length - 1)
    }
    else if(operator == '+' && (index == (length - 1))){
        indexFunction(0)
    }
    else{
        switch(operator){
            case '+':
                indexFunction(index + 1)
                break;
            case '-':
                indexFunction(index - 1)
                break;
        }
    }
}

export default function Carousel(props) {
    return (
        <div className="w-full h-fit">
            <CarouselCard data={props.data} />
            <div className="flex justify-end gap-3 mt-5">
                <button className="w-10 h-10 rounded border border-black flex justify-center items-center" onClick={() => changeIndex(props.index, props.length, props.function, '-')}><LeftArrow /></button>
                <button className="w-10 h-10 rounded border border-black flex justify-center items-center rotate-180" onClick={() => changeIndex(props.index, props.length, props.function, '+')}><LeftArrow /></button>
            </div>
        </div>
    )
}