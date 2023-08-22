import { useState } from "react";

export default function LikeButton() {
    const [likes,setLikes] = useState(0);
    return <button onClick={()=>setLikes(old=>1+old)}> Likes: {likes} </button>;
}