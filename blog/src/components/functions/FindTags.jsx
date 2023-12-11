export default function FindTags(data){
    let allTags = []
    for(let i = 0; i < data.length; i++){
        let temp = data[i].tags.split(", ")
        allTags = [...allTags, ...temp]
    }
    let tags = ["all", allTags[0]];
    for (let i = 1; i < allTags.length; i++) {
        if (!tags.includes(allTags[i])) {
            tags.push(allTags[i])
        }
    }
    return tags
}