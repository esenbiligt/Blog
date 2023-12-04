export default function CarouselCard(props) {
    // const { tags, title } = props.data.data
    return (
        <div className="w-full h-[55vh] rounded-2xl bg-blue-100 p-3 flex items-end">
            <div className="bg-white w-5/12 min-h-2/5 h-fit max-h-3/5 rounded-2xl p-10 pr-20 flex flex-col justify-between gap-5">
                <div className="text-white text-sm bg-blue-600 w-fit p-1 rounded"></div>
                <h2 className="text-4xl font-semibold"></h2>
                <p className="font-light text-gray-500">August 20, 2022</p>
            </div>
        </div>
    )
}