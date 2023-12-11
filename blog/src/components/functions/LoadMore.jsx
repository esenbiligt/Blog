export default function LoadMore(showIndex, setShowIndex, length, setAllShown){
    if (showIndex + 6 >= length) {
        setShowIndex(length)
        setAllShown(true)
    }
    else{
        setShowIndex(showIndex + 6)
        setAllShown(false)
    }
}