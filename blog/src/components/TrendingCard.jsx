export default function TrendingCard(props){
    const {title, cover_image, tags} = props.data;

    let img = cover_image

    if(!cover_image){
        img = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'
    }

    return (
        <div className="h-80 w-full rounded bg-no-repeat bg-cover p-10 flex flex-col justify-end gap-5" style={{backgroundImage: `url(${img})`}}>
            <div className="text-white text-sm bg-blue-600 w-fit p-1 rounded">{tags}</div>
            <h2 className="text-white text-2xl">{title}</h2>
        </div>
    )
}