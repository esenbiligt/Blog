import Carousel from "@/components/Carousel"
import Trending from "./Trending"
import BlogPosts from "./BlogPosts"
import { useEffect, useState, useRef } from "react"
import axios from 'axios';

const api = 'https://dev.to/api/articles?username=gereltuyamz';

// pagination

export default function Content() {
    const [articles, setArticles] = useState(false)
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const getData = async () => {
        let res = await axios.get(api)
        if(res.data.length >= 1){
            setArticles(res.data)
        }
        else{
            setArticles(false)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    console.log(articles)

    return <div className="flex flex-col gap-24">
        {
            articles && <Carousel data={articles[currentSlideIndex]} index={currentSlideIndex} function={setCurrentSlideIndex} length={articles.length} />
        }
        {
            articles && <Trending data={articles} index={currentSlideIndex} function={setCurrentSlideIndex} length={articles.length} />
        }
        {
            articles  && <BlogPosts data={articles} index={currentSlideIndex} function={setCurrentSlideIndex} length={articles.length} />
        }
    </div>
}