import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import { useOutletContext, useNavigate } from "react-router-dom";
import "../../Styles/Forum/Forum_Page.css"
import DeleteIcon from "../../images/forum/delete.png"
import SortIcon from "../../images/forum/sort.png"
import ReplyIcon from "../../images/forum/reply.png"
import ProfileIcon from "../../images/forum/profile.png"
import axios from 'axios'

import ReactPaginate from 'react-paginate';
import Swal from "sweetalert2";

function ForumPage() {
  const reDirect = useNavigate();

  const [threadName,setthreadName]=useState([]);
  const [threadTag,setthreadtag]=useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [messages, setMessages] = useState([]);
  const [newMessage, setnewMessage] = useState("");
  const [studentId, setStudentId] = useState("");
  const [subbed, setSubbed] = useState([]);
  const [subId, setSubId] = useState(0);
  const[SubButton, setSubButton] = useState("Subscribe");
  const [subcolor,setsubcolor]=useState('white');
  const saveThreadID = localStorage.getItem("ThreadID");
  const saveLoggedinUser = localStorage.getItem("loggedInUser");
  const jwt = localStorage.getItem("jwt");
  const threadnameloader = (e) => {
    axios
    .get(`http://localhost:8080/threadid/${saveThreadID}`, { headers })
  
      .then((resp) => {
        setthreadName(resp.data.threadName);
        setthreadtag(resp.data.fTags);
        console.log("Thread Name: " + threadName);
      })
      .catch((error) => {
        console.error(error);
  });
  }

  useEffect(() => {
    axios.get(`http://localhost:8080/profile/${saveLoggedinUser}`, { headers})
      .then(response => {
        setStudentId(response.data.studentId)

      })
      .catch(error => {
        console.log(error);
      });
  }, []);
console.log("Message created by"+studentId);
  const headers = {
    Authorization: `Bearer ${jwt}`,
  };

const messageloader = (e) => {
  axios
  .get(`http://localhost:8080/messages/${saveThreadID}`, { headers })

    .then((resp) => {
      console.log(resp.data);

      setMessages(resp.data);
      
    })
    .catch((error) => {
      console.error(error);
});
}

const subscriptiondata = async(e) => {
  const subEmail = localStorage.getItem("loggedInUser");
  const threadId = localStorage.getItem("ThreadID");
  await axios
  .get(`http://localhost:8080/getsub/${subEmail}/${threadId}`, { headers })

    .then((resp) => {;
      setSubbed(resp.data);
      setSubId(resp.data[0].subId);
      
      console.log("subbed data:")
      console.log(resp.data);
      console.log(subbed);
      console.log(resp.data.subId);
      if (resp.data.length>0){
        setSubButton("Subscribed");
        setsubcolor("orange");
        
      }
      else{
        setSubButton("Subscribe");
        setsubcolor("white");
      }
      
    })
    .catch((error) => {
      console.error(error);
});
}

const subscribe = (e) => {
  const threadId = localStorage.getItem("ThreadID");
  const subEmail = localStorage.getItem("loggedInUser");
  console.log(saveLoggedinUser);
  console.log(saveThreadID);
  axios
  .post(`http://localhost:8080/sub/create`,{subEmail,threadId}, { headers })

    .then((resp) => {
      console.log(resp.data);
      subscriptiondata();

      
    })
    .catch((error) => {
      console.error(error);
    }
  )
  subscriptiondata();
}
const unsubscribe = (e) => {
  
    axios
    .delete(`http://localhost:8080/deletesub/${subId}`,{ headers })
    .then((response) => {
      if (response.data != null) {
        // alert("deleted successfully ");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  function subbuttonchange(){
    if(SubButton==="Subscribed"){
      confirmAlert("Are you sure you want to unsubscribe?","sub");
      
      
    }
    else if(SubButton ==="Subscribe"){
      subscribe();
      setSubButton("Subscribed");
      setsubcolor("orange");
      const message = "You are now Subscribed to this thread",
        icon = "success";
        fireAlert(message, icon);
        
    }
    
  }

//Get current posts
const endOffset = itemOffset + postsPerPage;
const currentMessages = messages.slice(itemOffset, endOffset);
const pageCount = Math.ceil(messages.length / postsPerPage);

const handlePageClick = (event) => {
  const newOffset = (event.selected * postsPerPage) % messages.length;
  console.log(
    `User requested page number ${event.selected}, which is offset ${newOffset}`
  );
  setItemOffset(newOffset);
};

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

const confirmAlert = (message, alerttype, mId) => {
  Swal.fire({
    title: message,

    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#ff0055",
    cancelButtonColor: "#999999",
    icon: "warning",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */

    if (alerttype === "sub"){
      if (result.isConfirmed) {
        unsubscribe();
        setSubButton("Subscribe");
        setsubcolor("white");
        Swal.fire("You are now Unsubscribed", "", "success");
      }
    }
    else if (alerttype === "message"){
      if (result.isConfirmed) {
        deleteMessage(mId);
        Swal.fire("Message Deleted", "", "success");
      }
    }
  });
};



const newmessagehandle = (e) => {
  e.preventDefault();
  console.log(newMessage);
  if (localStorage.getItem("loggedInUser") === "") {
    const message = "Please Login To Post A Message",
        icon = "error",
        nevigate = "true";
    fireAlert(message, icon, nevigate);
  }
  else if (newMessage === "") {
    const message = "Please Fill In The Text Field",
            icon = "error";
          fireAlert(message, icon);
  }
  else{
    axios
    .post("http://localhost:8080/messages/create", {newMessage,saveThreadID,studentId}, {headers})
    .then((res) => {
        console.log(res);
})
    .then(() => {
      const message = "You have posted a new message",
        icon = "success";
      fireAlert(message, icon);
      setnewMessage("");
      messageloader();
    })
    .catch((err) => {
      console.log(err);

    });
  }
  }

  const deleteMessage = (mId) => {
    axios
      .delete(`http://localhost:8080/deletemessage/${mId}`, {headers})
      .then((response) => {
        if (response.data != null) {
          // alert("deleted successfully ");
        }
        messageloader();
      })
      .catch((error) => {
        console.error(error);
      });
      messageloader();
  };

  //subscribe button colour changer white to orange
  
  //subscribe button text changer "Subscribe" to "Subscribed"
  
  

 

  useEffect(() => {
    subscriptiondata();
    messageloader();
    threadnameloader();
    
  }, []);
  console.log(subbed);
  console.log(subId);


  return (
    <>
    <div className='fp-navbar-spacing'>
    </div>
    <div className="forums-title">
        <h2 className='threadName'>{threadName}</h2>
        <h2 className='threadTag'>{threadTag}</h2>
    </div>
    <div className='thread-messages'>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<Prev"
        renderOnZeroPageCount={null}
        activeClassName="active"
      />
    </div>
    
    {saveLoggedinUser && (
      <div className='SubButton'>
        <button id="subbtn" style={{background:subcolor}} onClick={event=>{subbuttonchange();}}>{SubButton}</button>
      </div>
    )}
    
    {currentMessages.map((item, index) => (

      <div className='Thread-Messages'>
        <div className='ThreadMessage'>
        {item.students.avatar?  <img   className="ThreadProfile" src={"data:image/png;base64," + item.students.avatar } height="90" width="90" alt="" /> :
        <img className="ThreadProfile" src={ProfileIcon} height="90" width="90" alt="" />}
        

          <div className='ThreadParagraph'>
            <p>  {item.message }    
              </p>
          </div>
        </div>
        <div className='ThreadUser'>{item.students.firstName}</div>
        <div className='dateandreply'>
          <div className='ThreadTime'>Posted on <span>{ (new Date(item.mDateCreated)).toLocaleDateString() }</span> at {item.mTimeCreated}</div>
          
          <div className='replydelete'>
            {saveLoggedinUser === item.students.email && (
                    <div
                      className="DeleteReply"
                      onClick={() => confirmAlert("Are you sure you want to delete this message?","message",item.messageID)}
                    >
                      <img src={DeleteIcon}/>
                    </div>
                  )}
            <a href= "#replysection" className="ThreadReply">
              <img src={ReplyIcon}/>
              <label>Reply</label>
            </a>
          </div>
          
        </div>
        
      </div>
    ))}
    <section id="replysection" className='ThreadReplySection'>
      <div className='ThreadTextEditor'>
        <div className='ThreadEditorText'>
          <textarea rows="10" name="pagetext_body" value={newMessage} onChange={(e) => setnewMessage(e.target.value)}></textarea>
        </div>
      </div>
      {/* <div className='ThreadTextEditorTrash'><button className='Threadtrashbutton'><img src={DeleteIcon}/></button></div> */}
      <div className="ThreadTextEditorReply" onClick={newmessagehandle}>
        <a href="/" ><img src={ReplyIcon}/></a>
        <label>Post Reply</label>
      </div>
    </section>
    </>
  )
}

export default ForumPage
