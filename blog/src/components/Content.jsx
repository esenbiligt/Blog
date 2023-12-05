import Carousel from "@/components/Carousel"
import Trending from "./Trending"
import { useEffect, useState } from "react"

export default function Content() {
    const [articles, setArticles] = useState()
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    useEffect(() => {
        fetch('https://dev.to/api/articles?username=gereltuyamz')
            .then(response => response.json())
            .then(data => setArticles(data))
    }, [])

    // const fetchData = async()

    return <div className="flex flex-col gap-24">
        {
            articles && <Carousel data={articles[currentSlideIndex]} index={currentSlideIndex} function={setCurrentSlideIndex} length={articles.length}/>
        }
        {
            articles && <Trending data={articles} index={currentSlideIndex} function={setCurrentSlideIndex} length={articles.length}/>
        }
    </div>
}