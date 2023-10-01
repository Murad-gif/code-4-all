import React from 'react'
import {Link} from "react-router-dom"
import Header from "./Header";
import Accordion from "./Accordion";
import FaqGetTable from './FAQgettable';
import '../../Styles/FAQStyles/FormButton.css';
import '../../Styles/FAQStyles/FAQ.css';

const FAQ = () => {
  return (
    <div className="container">
      <Header />
      <Accordion />
      <FaqGetTable />
      <div className="grid">
      <Link to="/Contact">
        <a href="/">
          <button className="btn">Contact Us</button>
        </a>
      </Link>

      </div>
    </div>
  );
};

export default FAQ;


