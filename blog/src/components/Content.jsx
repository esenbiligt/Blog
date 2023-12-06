import Carousel from "@/components/Carousel"
import Trending from "./Trending"
import BlogPosts from "./BlogPosts"
import { useEffect, useState } from "react"
import axios from 'axios';

const api = 'https://dev.to/api/articles?username=gereltuyamz';

export default function Content() {
    const [articles, setArticles] = useState([])
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const getData  = async () => {
        let res = await axios.get(api)
        setArticles((prev) => [...prev, ...res.data])
    }

    useEffect(() => {
        getData()
    }, [])

    return <div className="flex flex-col gap-24">
        {
            articles && <Carousel data={articles[currentSlideIndex]} index={currentSlideIndex} function={setCurrentSlideIndex} length={articles.length}/>
        }
        {
            articles && <Trending data={articles} index={currentSlideIndex} function={setCurrentSlideIndex} length={articles.length}/>
        }
        {
            articles && <BlogPosts data={articles} index={currentSlideIndex} function={setCurrentSlideIndex} length={articles.length}/>
        }
    </div>
}