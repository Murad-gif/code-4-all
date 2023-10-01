import React from 'react'
import {Link} from "react-router-dom"
import "../../Styles/Forum/Forum_Landing.css"
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import axios from "axios";
import SearchIcon from "../../images/forum/search.png"
import CreateIcon from "../../images/forum/create.png"
import SortIcon from "../../images/forum/sort.png"
import DeleteIcon from "../../images/forum/delete.png"
import Swal from "sweetalert2"

function ForumLanding() {
  const [threads, setthreads] = useState([]);
  const [threadId, setthreadId] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const jwt = localStorage.getItem("jwt");
  const saveLoggedinUser = localStorage.getItem("loggedInUser");
  const navigate = useNavigate();
  const ViewForum = (item) => {
    localStorage.setItem("ThreadID", item);
    navigate("/Forum_page");
  };


  const headers = {
    Authorization: `Bearer ${jwt}`,
  };
  const postamount = (topicamount) => {
    setPostsPerPage(topicamount);
  };

  const threadloader = (e) => {
    axios
      .get(`http://localhost:8080/threads`, {headers,
      })
      .then((resp) => {
        console.log(resp.data);
        setthreads(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }


  const latestthreadsort = (event) => {
    setthreads([...threads.sort((a, b) => b.fTimestampCreated.localeCompare(a.fTimestampCreated))])
  };

  const oldestthreadsort = (event) => {
    setthreads([...threads.sort((a, b) => a.fTimestampCreated.localeCompare(b.fTimestampCreated))])
  };

  //Get current posts
  const endOffset = itemOffset + postsPerPage;
  const currentPosts = threads.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(threads.length / postsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % threads.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  

  const confirmAlert = (message, tId) => {
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
      if (result.isConfirmed) {
        deleteThread(tId);
        Swal.fire("Topic Thread Deleted", "", "success");
      }
    });
  };

  const deleteThread = (tId) => {
    axios
      .delete(`http://localhost:8080/deletethread/${tId}`, {headers})
      .then((response) => {
        if (response.data != null) {
          // alert("deleted successfully ");
        }
        console.log(response);
        threadloader();
      })
      .catch((error) => {
        console.error(error);
      });
      threadloader();
  };

  useEffect(() => {
    threadloader();
    
  }, []);

  return (
    <>
    <div className='fl-navbar-spacing'>
    
    <div className="forums-title">
        <h2>Student Forum Threads</h2>
    </div>
    <div className='thread-pages'>
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
    
    <div className='LandingOptions'>
        
        <a className="LandingSort">
          
          <label for="lsortbtn"><img src={SortIcon}/></label>               
          <input type="checkbox" id="lsortbtn"/> 
          
          <ul className="landingsort-optn">
            <li><a href="#!" onClick={oldestthreadsort}>Oldest Threads</a></li>
            <li><a href="#!" onClick={latestthreadsort}>Last Updated</a></li>
            
          </ul>

        </a>
        <Link to="/Search_thread">
          <a href="/Search_thread"><img src={SearchIcon}/></a>
        </Link>
        
        <Link to="/Create_forum">
          <a href="/"><img src={CreateIcon}/></a>
        </Link>
          
    </div>
    <section className='Thread-List'>
      {currentPosts.map((item, index) => (
      <div className="thread">
        <div className='topic-items'>
          <div className='thread-title'
            onClick={() => {
              ViewForum(item.threadId);
            }}
            >{item.threadName}</div>
            
    
          <ul className='tags'>
            <li>{item.fTags}</li>
          </ul>
          <div className='thread-creator'>
          By <span>{ (item.students.firstName).toUpperCase()} { (item.students.lastName).toUpperCase()}</span> 
          </div>
          {saveLoggedinUser === item.students.email && (
                  <div
                    className="DeleteThread"
                    onClick={() => confirmAlert("Are you sure you want to delete this thread?",item.threadId)}
                  >
                    <img src={DeleteIcon}/>
                  </div>
                )}
          
          <div className='thread-time'>Started on <span>{ (new Date(item.fDateCreated)).toLocaleDateString() }</span> at {item.fTimeCreated}</div>
          
          
        </div>
      </div>
      ))}
    </section>
    </div>
    </>
  )
}

export default ForumLanding
