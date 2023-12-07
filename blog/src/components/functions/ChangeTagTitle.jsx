export default function ChangeTagTitle(currentTag){
    let tagTitle
    if (currentTag == "all") {
        tagTitle = "All Blog Posts"
    }
    else {
        tagTitle = currentTag.charAt(0).toUpperCase() + currentTag.slice(1)
        tagTitle += " Posts"
    }
    return tagTitle
}