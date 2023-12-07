export default function FindTags(data){
    const allTags = data.map(e => {
        return e.tags
    })
    let tags = ["all"];
    tags.push(allTags[0])
    for (let i = 1; i < allTags.length; i++) {
        if (!tags.includes(allTags[i])) {
            tags.push(allTags[i])
        }
    }
    return tags
}