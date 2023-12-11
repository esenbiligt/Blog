export default function CarouselCard(props) {
    if (props.data) {
        const { tags, title, cover_image, readable_publish_date } = props.data

        let img = cover_image

        if(!cover_image){
            img = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'
        }

        return (<div className={`w-full h-[55vh] rounded-2xl bg-blue-100 p-3 flex items-end bg-no-repeat bg-cover`} style={{ backgroundImage: `url(${img})` }}>
        <div className="bg-white max-w-xl h-fit rounded-2xl p-10 pr-20 flex flex-col justify-between gap-5 break-word">
            <div className="text-white text-sm bg-blue-600 w-fit p-1 rounded">{props.data.tags}</div>
            <h2 className="text-4xl font-semibold">{props.data.title}</h2>
            <p className="font-light text-gray-500">{props.data.readable_publish_date}</p>
        </div>
    </div>)
    }
    return (
        <div>ERROR</div> 
    )
}