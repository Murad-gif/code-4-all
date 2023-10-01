import React from 'react'
import {Link} from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import axios from "axios";
import Swal from "sweetalert2";
import  "../../Styles/Forum/Search_Thread.css";
import ReplyIcon from "../../images/forum/reply.png";
import SearchIcon from "../../images/forum/search.png";
import SortIcon from "../../images/forum/sort.png";
import { red } from '@mui/material/colors';;


function SearchThread() {

  const [threads, setthreads] = useState([]);
  const [threadName, setThreadName] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [showresult, setshowresult] = useState(false);
  const [threadid, setthreadid] = useState(0);
  const jwt = localStorage.getItem("jwt");
  const resultsfound = threads.length;
  console.log(threadName);
  const navigate = useNavigate();
  const ViewForum = (item) => {
    localStorage.setItem("ThreadID", item);
    navigate("/Forum_page");
  };

  const headers = {
    Authorization: `Bearer ${jwt}`,
  };

  const threadsearch = (e) => {
    e.preventDefault();
    console.log(threadName);
    if (threadName === "") {
      const message = "Please provide a thread title",
            icon = "error";
          fireAlert(message, icon);
    }
    else{
      axios
        .get(`http://localhost:8080/threadName/${threadName}`, { headers })

          .then((resp) => {
            console.log(resp.data);
            setthreads(resp.data);
            setshowresult(true);
          })
          .catch((error) => {
            console.error(error);
      });
    }
    
  }

  const fireAlert = (message, icon) => {
    Swal.fire({
      container: "swal2-container",
  
      title: message,
  
      icon: icon,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
    });
  };

  const latestthreadsort = (event) => {
    setthreads([...threads.sort((a, b) => b.fTimestampCreated.localeCompare(a.fTimestampCreated))])
  }

  const oldestthreadsort = (event) => {
    setthreads([...threads.sort((a, b) => a.fTimestampCreated.localeCompare(b.fTimestampCreated))])
  };
  
  //result pagination
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

  
  return (
    <div className='s-navbar-spacing'>
      <h2 className='SearchForum-Title'>Search Forum Threads</h2>
      <section className='thread-search'>
        <div className='searchthread-title'>
          <label for="sthread-title">Thread Title: </label>
          <input type="text" id="sthread-title" name="sthread-title" placeholder="  Search For Topic Thread Title" onChange={(e) => setThreadName(e.target.value)}/>
        </div>
        
        <div className='searchpost' onClick={threadsearch}>
          <a href="/" className='spost'><img src={SearchIcon} alt="search icon"/></a>
          <label>Search Thread</label>
        </div>
      </section>
      
      <section className='searchResults' style={{ display: showresult ? "block" : "none" }}>
      
        <div className="searchresult-title">
          <h2>You Searched For: "CS"</h2>
        </div>
        <div className='ThreadResultsFound'><h2>{resultsfound} result(s) found</h2></div>
        <nav className='thread-pages'>
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
        </nav>
        
        <div className='SearchResultOptions'>
            
          <a href='/' className="SearchResultSort">
            
            <label for="srsortbtn"><img src={SortIcon} alt="sort icon"/></label>               
            <input type="checkbox" id="srsortbtn"/> 
            
            <ul class="searchresultsort-optn">
              <li><a href="#!" onClick={latestthreadsort}>Last Updated</a></li>
              <li><a href="#!" onClick={oldestthreadsort}>Oldest Threads</a></li>
            </ul>

          </a>
              
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
              
              <div className='thread-creatorname'>Started on {item.fDateCreated} at {item.fTimeCreated} By {item.students.firstName} {item.students.lastName} </div>
              
              
            </div>
          </div>
          ))}
        </section>

        
      </section>
    </div>
    
  )
}

export default SearchThread