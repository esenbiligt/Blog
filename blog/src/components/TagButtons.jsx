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
        }}>{e}</button>
    })
    return <div className="flex gap-5">
        {buttons}
    </div>
}