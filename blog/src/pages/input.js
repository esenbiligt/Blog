import { useState } from "react";
import axios from "axios";

function getInput(newPost){
    console.log(newPost)
}

export default function input(){
    const [newPost, setNewPost] = useState({
        cover_img: "",
        title: '',
        description: ''
    })

    const handleChanger = (e) => {
        let value = e.target.value;
        let name = e.target.id;

        {name == "tags" && (value = value.split("")[0])}

        {value == " " && (value = (e.target.value).split("").find((e) => {
            return e != " "
        }))}

        setNewPost((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }

    return <div className="px-96">
        <form className="flex flex-col">
            <label for="cover_img">Cover Image</label>
            <input type="file" id="cover_img" onChange={handleChanger} required/>
            <label for="title">Title</label>
            <input type="text" id="title" className="border border-black h-10 w-80" onChange={handleChanger} required/>
            <label for="tags">Tag</label>
            <input type="text" id="tags" className="border border-black h-5 w-80" onChange={handleChanger} required/>
            <label for="description">Description</label>
            <input type="text" id="description" className="border border-black h-40 w-80" onChange={handleChanger} required/>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => getInput(newPost)}>
                <input type="submit"/>
            </button>
        </form>
    </div>
}