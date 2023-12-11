import { useEffect, useState} from "react"
import FindTags from "./functions/FindTags";
import BlogPostCard from "./BlogPostCard";
import ChangeSelectedPosts from "./functions/ChangeSelectedPosts";
import ChangeTagTitle from "./functions/ChangeTagTitle";
import TagButtons from "./TagButtons";
import LoadMore from "./functions/LoadMore";

export default function BlogPosts(props) {
    const [currentTag, setCurrentTag] = useState(("all"))
    const [showIndex, setShowIndex] = useState(Math.min(props.length / 2, 6))

    const tags = FindTags(props.data)

    let tagTitle = ChangeTagTitle(currentTag)
    let selectedPosts =  ChangeSelectedPosts(currentTag, props.data, showIndex)
    let content = selectedPosts.map((e) => {
        return <BlogPostCard data={e} />
    })

    return (
        <div className="flex flex-col gap-10">
            <h2 className="font-bold text-xl tracking-wide">{tagTitle}</h2>
            <div className="flex justify-between">
                <TagButtons tags={tags} currentTag={currentTag} currentTagFunction={setCurrentTag} setShowIndex={setShowIndex} length={props.length}/>
                <div className="flex gap-5">
                    <button onClick={() => {
                        setShowIndex(Math.min(props.data.length / 2, 6));
                    }}>Collapse</button>
                    <button onClick={() => {
                        setShowIndex(props.data.length)
                    }}>View All</button>
                </div>
            </div>
            <div className="flex flex-col gap-10 items-center mb-20">
                <div className="grid grid-cols-3 gap-10">
                    {content}
                </div>
                    {props.data.filter(e => {
                        if(currentTag == "all"){
                            return e
                        }
                        else{
                            return e.tags.includes(currentTag)
                        }
                    }).length > showIndex && <button className="border border-gray-400 w-fit p-2 rounded text-gray-500" onClick={() => LoadMore(showIndex, setShowIndex, props.data.length)}>Load More</button>}
            </div>
        </div>
    )
}