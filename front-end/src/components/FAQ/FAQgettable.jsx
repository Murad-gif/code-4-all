import React, { useState } from "react";
import "../../Styles/FAQStyles/FAQgettable.css"
import axios from "axios";
import {useOutletContext } from "react-router-dom";
import { useEffect } from "react";

    function FaqGetTable(){
        
        const [FAQ,setFAQ] = useState([]);
       // const [question,setQuestion] = useState

       useEffect(() => {
        loadFAQ();
       },[]);


        const loadFAQ=async()=>{
            const result= 
            await axios.get("http://localhost:8080/faq")
            setFAQ(result.data);
        }


    return(
    <table className="content-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
            {
                FAQ.map((faqs)=>(
                    <tr >
                    <td>{faqs.question}</td>
                    <td>{faqs.answer}</td>
                     </tr>
                ))
            }

        </tbody>
      </table>
    );
    }

    export default FaqGetTable

