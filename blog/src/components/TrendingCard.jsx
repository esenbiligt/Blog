export default function TrendingCard(props){
    const {title, cover_image, tags} = props.data;
    return (
        <div className="h-80 w-80 rounded bg-no-repeat bg-cover p-10 flex flex-col justify-end gap-5" style={{backgroundImage: `url(${cover_image})`}}>
            <div className="text-white text-sm bg-blue-600 w-fit p-1 rounded">{tags}</div>
            <h2 className="text-white text-2xl">{title}</h2>
        </div>
    )
}