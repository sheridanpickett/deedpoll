import React from 'react';
import MainNav from '../components/MainNav';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="Apply">
      <MainNav />
      <div className="section-one">
        <h2>
          Do you need an <span>adult</span> application form or a <span>child</span> application form?
        </h2>
        <Link className="g_link" to={{pathname: "apply", search: "?form=adult"}} >Adult Application Form</Link>
        <Link className="g_link" to={{pathname: "apply", search: "?form=child"}}>Child Application Form</Link>
      </div>
    </div>
  )
}
