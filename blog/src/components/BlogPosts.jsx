import { useState } from "react"
import BlogPostCard from "./BlogPostCard";

function findNumTags(data){
    const allTags = data.map(e => {
        return e.tags
    })
    let tags = ["all"];
    tags.push(allTags[0])
    for(let i = 1; i < allTags.length; i++){
        if(!tags.includes(allTags[i])){
            tags.push(allTags[i])
        }
    }
    return tags
}

export default function BlogPosts(props){
    const tags = findNumTags(props.data);
    const [currentTag, setCurrentTag] = useState(("all"))

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
        <div className="flex flex-col gap-10">
            <h2 className="font-bold text-xl tracking-wide">{tagTitle}</h2>
            <div className="flex justify-between">
                <div className="flex gap-5">
                    {buttons}
                </div>
                <button>View All</button>
            </div>
            <div className="flex flex-col gap-10 items-center">
                <div className="grid grid-cols-3 gap-10">
                    {content}
                </div>
                {currentTag == "all" && <button className="border border-gray-400 w-fit p-2 rounded text-gray-500">Load More</button>}
            </div>
        </div>
    )
}