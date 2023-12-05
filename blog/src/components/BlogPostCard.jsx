export default function BlogPostCard(props){
    const {title, cover_image, tags, readable_publish_date} = props.data;
    return (
        <div className="w-96 h-96 rounded border border-gray-300 p-4 flex flex-col justify-between">
            <div className="flex flex-col gap-5">
                <img src={cover_image} alt="" className="rounded"/>
                <div className="text-blue-600 text-sm bg-blue-100 w-fit p-1 rounded">{tags}</div>
            </div>
            <div className="gap-5 flex flex-col">
                <h2 className="text-2xl">{title}</h2>
                <p className="font-light text-gray-500">{readable_publish_date}</p>
            </div>
        </div>
    )
}