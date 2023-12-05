import { useState } from "react"
import BlogPostCard from "./BlogPostCard";
export default function BlogPosts(props){
    const [currentTag, setCurrentTag] = useState(("all"))
    // const tags = ["All", "Design", "Travel", "Fashion", "Technology", "Branding"]
    const tags = ["All", "Webdev", "Programming", "Nextjs"]

    let tagTitle;
    let content;
    let selectedPosts;

    if(currentTag == "all"){
        tagTitle = "All Blog Posts"
        selectedPosts = props.data
    }
    else{
        tagTitle = currentTag.charAt(0).toUpperCase() + currentTag.slice(1)
        tagTitle += " Posts"
        selectedPosts = props.data.filter((e) => {
            return e.tags == currentTag;
        })
    }
    
    content = selectedPosts.map((e) => {
        return <BlogPostCard data={e} />
    })

    let buttons = tags.map((e) => {
        let selected;
        if(currentTag == e.charAt(0).toLowerCase() + e.slice(1)){
            selected = "text-yellow-500"
        }
        else{
            selected = "text-black"
        }
        return <button className={`${selected}`} onClick={() => {
            setCurrentTag(e.charAt(0).toLowerCase() + e.slice(1))
        }}>{e}</button>
    })
    
    return (
        <div className="flex flex-col gap-5">
            <h2 className="font-bold text-xl tracking-wide">{tagTitle}</h2>
            <div className="flex justify-between">
                <div className="flex gap-5">
                    {buttons}
                </div>
                <button>View All</button>
            </div>
            <div className="grid grid-cols-3 gap-5 justify-between">
                {content}
            </div>
        </div>
    )
}