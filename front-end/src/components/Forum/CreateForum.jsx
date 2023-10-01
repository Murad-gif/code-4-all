import React from 'react'
import {useState} from "react";
import {Link} from "react-router-dom"
import  "../../Styles/Forum/Create_Forum.css"
import DeleteIcon from "../../images/forum/delete.png"
import ReplyIcon from "../../images/forum/reply.png"
import BoldIcon from "../../images/forum/text-editor/bold.png"
import ItalicIcon from "../../images/forum/text-editor/italic.png"
import UnderlineIcon from "../../images/forum/text-editor/underline.png"
import StrikethroughIcon from "../../images/forum/text-editor/strikethrough.png"
import ColourWheelIcon from "../../images/forum/text-editor/colourwheel.png"
import FontSizeIcon from "../../images/forum/text-editor/fontsize.png"
import replyline from "../../images/forum/text-editor/replyline.png"
import HyperlinkIcon from "../../images/forum/text-editor/hyperlink.png"
import PhotoIcon from "../../images/forum/text-editor/photo.png"
import EmojiIcon from "../../images/forum/text-editor/emoji.png"
import ListIcon from "../../images/forum/text-editor/list.png"
import TextAlignIcon from "../../images/forum/text-editor/textalign.png"
import QuoteIcon from "../../images/forum/text-editor/quote.png"
import SpoilerIcon from "../../images/forum/text-editor/spoiler.png"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function CreateForum() {
  const reDirect = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const [threadName, setthreadName] = useState("");
  const [fTags, setfTags] = useState("");
  const navigate = useNavigate();
  console.log(threadName);
  console.log(fTags);
  const CreateLanding = (newthreadId) => {
    localStorage.setItem("ThreadID", newthreadId);
    navigate("/Forum_page");
  };
  const handlecreatethread = (e) => {
    e.preventDefault();
    if (localStorage.getItem("loggedInUser") === "") {
      const message = "Please Login To Create A Topic Thread",
        icon = "error",
        nevigate = "true";
      fireAlert(message, icon, nevigate);
    }
    else if (threadName === "" || fTags ==="") {
      const message = "Please fill in all fields",
            icon = "error";
          fireAlert(message, icon);
    }
    else{
      axios
        .post("http://localhost:8080/threads/create", {threadName, fTags},
          {headers: { Authorization: `Bearer ${jwt}` }},
          
        )
        .then((res) => {
            console.log(res);
            CreateLanding(res.data.threadId);
  })
        .then(() => {
          setthreadName("");
          setfTags("");
        })
        .catch((err) => {
          alert(`Please login to create a forum thread`);
          console.log(err);

        });
    }
      
    }


    const fireAlert = (message, icon, nevigate) => {
      Swal.fire({
        container: "swal2-container",
    
        title: message,
    
        icon: icon,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (nevigate)
          if (result.isConfirmed) {
            reDirect("/Account");
          }
      });
    };


  return (
    <>
    <div className='cf-navbar-spacing'>
    <h2 className='CreateForum-Title'>Create Forum Threads</h2>
    <section className='thread-create'>
      <div className='createthread-title'>
        <label for="cthread-title">Thread Title: </label>
        <input type="text" id="cthread-title" name="cthread-title" placeholder="  Add Topic Thread Title" onChange={(e) => setthreadName(e.target.value)}/>
      </div>
      <div className='createtags'>
        <label for="c_tags">Tags: </label>
        <input type="text" id="c_tags" name="c_tags" placeholder="  Catergorise Topic Tags" onChange={(e) => setfTags(e.target.value)}/>
      </div>
        <div className="ThreadTextEditorCreate" onClick={handlecreatethread}>
          <a href="/" ><img src={ReplyIcon} alt="reply icon"/></a>
          <label>Post Thread</label>
        </div>
    </section>
    </div>
    </>
  )
}


export default CreateForum