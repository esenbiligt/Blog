export default function TagButtons(props){
    let buttons = props.tags.map((e) => {
        let selected;
        if (props.currentTag == e) {
            selected = "text-yellow-500"
        }
        else {
            selected = "text-black"
        }
        return <button className={`${selected}`} onClick={() => {
            props.currentTagFunction(e.charAt(0).toLowerCase() + e.slice(1))
            props.setShowIndex(Math.min(props.length / 2, 6))
        }}>{e}</button>
    })
    return <div className="grid grid-cols-10 gap-2 w-fit">
        {buttons}
    </div>
}