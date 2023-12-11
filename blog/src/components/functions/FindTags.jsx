import { all } from "axios";

export default function FindTags(data){
    let allTags = []
    for(let i = 0; i < data.length; i++){
        let temp = data[i].tags.split(",")
        allTags = [...allTags, ...temp]
    }
    console.log(allTags)
    let tags = ["all"];
    tags.push(allTags[0])
    for (let i = 1; i < allTags.length; i++) {
        if(allTags[i].charAt(0) == " "){
            allTags[i] = allTags[i].slice(1)
        }
        if (!tags.includes(allTags[i])) {
            tags.push(allTags[i])
        }
    }
    return tags
}