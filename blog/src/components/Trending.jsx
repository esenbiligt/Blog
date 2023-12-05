import TrendingCard from "./TrendingCard"
export default function Trending(props){
    let content = props.data.map((e) => {
        return <TrendingCard data={e} />
    })
    return (
        <div className="w-full h-fit">
            <h2 className="font-bold text-xl tracking-wide mb-5">Trending</h2>
            <div className="grid grid-cols-4 gap-10 max-h-80 justify-between overflow-hidden w-full">
                {content}
            </div>
        </div>
    )
}