export default function LoadMore(showIndex, setShowIndex, length){
    {showIndex + 6 >= length ? setShowIndex(length) : setShowIndex(showIndex + 6)}
}