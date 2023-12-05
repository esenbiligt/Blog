export default function CarouselCard(props) {
    const { tags, title, cover_image, readable_publish_date} = props.data
    return (
        <div className={`w-full h-[55vh] rounded-2xl bg-blue-100 p-3 flex items-end bg-no-repeat bg-cover`} style={{backgroundImage: `url(${cover_image})`}}>
            <div className="bg-white max-w-xl h-fit rounded-2xl p-10 pr-20 flex flex-col justify-between gap-5 break-word">
                <div className="text-white text-sm bg-blue-600 w-fit p-1 rounded">{tags}</div>
                <h2 className="text-4xl font-semibold">{title}</h2>
                <p className="font-light text-gray-500">{readable_publish_date}</p>
            </div>
        </div>
    )
}