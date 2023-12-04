import Carousel from "@/components/Carousel"
import { useEffect, useState } from "react"

export default function Content() {
    const [articles, setArticles] = useState()
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    useEffect(() => {
        fetch('https://dev.to/api/articles?username=gereltuyamz')
            .then(response => response.json())
            .then(data => setArticles(data))
    }, [])

    return <div className="flex flex-col gap-20">
        {
            articles && <Carousel data={articles[currentSlideIndex]} index={currentSlideIndex} function={setCurrentSlideIndex}/>
        }
    </div>
}