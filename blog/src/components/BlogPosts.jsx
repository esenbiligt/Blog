import { useEffect, useState } from "react"
import BlogPostCard from "./BlogPostCard";

function findNumTags(data) {
    const allTags = data.map(e => {
        return e.tags
    })
    let tags = ["all"];
    tags.push(allTags[0])
    for (let i = 1; i < allTags.length; i++) {
        if (!tags.includes(allTags[i])) {
            tags.push(allTags[i])
        }
    }
    return tags
}

function loadMore(showIndex, setShowIndex) {
    setShowIndex(showIndex + 3)
}

function viewAll(length, setShowIndex){
    setShowIndex(length)
}

function collapse(half, setShowIndex){
    console.log(half)
    setShowIndex(half);
}

export default function BlogPosts(props) {
    const tags = findNumTags(props.data);
    const [currentTag, setCurrentTag] = useState(("all"))
    const [showIndex, setShowIndex] = useState("")
    const [allShown, setAllShown] = useState(false)
    let half = props.length / 2 - 1;

    useEffect(() => {
        half = props.length - 1;
        setShowIndex(half)
    }, [])

    useEffect(() => {
        if (showIndex >= props.length) {
            setShowIndex(props.length)
            setAllShown(true)
        }
        else{
            setAllShown(false)
        }
    }, [showIndex])

    let tagTitle;
    let content;
    let selectedPosts;

    if (currentTag == "all") {
        tagTitle = "All Blog Posts"
        selectedPosts = props.data.slice(0, showIndex)
    }
    else {
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
        if (currentTag == e) {
            selected = "text-yellow-500"
        }
        else {
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
                <div className="flex gap-5">
                    <button onClick={() => collapse(half, setShowIndex)}>Collapse</button>
                    <button onClick={() => viewAll(props.length, setShowIndex)}>View All</button>
                </div>
            </div>
            <div className="flex flex-col gap-10 items-center mb-20">
                <div className="grid grid-cols-3 gap-10">
                    {content}
                </div>
                {(currentTag == "all" && !allShown) && <button className="border border-gray-400 w-fit p-2 rounded text-gray-500" onClick={() => loadMore(showIndex, setShowIndex)}>Load More</button>}
            </div>
        </div>
    )
}