export default function ChangeSelectedPosts(currentTag, data, showIndex){
    let selectedPosts
    if (currentTag == "all") {
        selectedPosts = data.slice(0, showIndex)
    }
    else {
        let temp = data.filter((e) => {
            return e.tags.includes(currentTag);
        })
        selectedPosts = temp.slice(0, showIndex)
    }
    // selectedPosts = data.slice(0, showIndex)
    return selectedPosts;
}