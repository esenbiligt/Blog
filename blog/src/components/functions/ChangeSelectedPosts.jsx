export default function ChangeSelectedPosts(currentTag, data, showIndex){
    let selectedPosts
    if (currentTag == "all") {
        selectedPosts = data.slice(0, showIndex)
    }
    else {
        selectedPosts = data.filter((e) => {
            return e.tags == currentTag;
        })
    }
    return selectedPosts;
}