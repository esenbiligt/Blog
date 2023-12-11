export default function BlogPostCard(props){
    const {title, cover_image, tags, readable_publish_date} = props.data;

    let img = cover_image

    if(!cover_image){
        img = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'
    }

    return (
        <div className="w-full h-96 rounded border border-gray-300 p-4 flex flex-col justify-between">
            <div className="flex flex-col gap-5">
                <img src={img} alt="" className="rounded h-40"/>
                <div className="text-blue-600 text-sm bg-blue-100 w-fit p-1 rounded">{tags}</div>
            </div>
            <div className="gap-5 flex flex-col">
                <h2 className="text-2xl">{title}</h2>
                <p className="font-light text-gray-500">{readable_publish_date}</p>
            </div>
        </div>
    )
}