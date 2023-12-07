export default function LoadMore(showIndex, setShowIndex, length, setAllShown){
    if (showIndex + 3 >= length) {
        setShowIndex(length)
        setAllShown(true)
    }
    else{
        setShowIndex(showIndex + 3)
        setAllShown(false)
    }
}