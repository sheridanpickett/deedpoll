import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../components/MainNav';

export default () => {
  return (
    <div className="Info">
      <MainNav />
      <h1 className="global-heading">Info</h1>
      <div className="section-one">
        You do not have to follow a legal process to start using a new name.
        But you might need a ‘deed poll’ to apply for or to change official documents
        like your passport or driving licence.
        <br/><br/>
        There are two types of Deed Poll: unenrolled and enrolled.
        <br/><br/>
        Unenrolled Deed Polls are accepted by most organisations inculding the uk passport office, the DVLA and HMRC.
        <br/>
        Some organisations will only accept an enrolled Deed Poll. If you are under 16, you will need an enrolled Deed Poll.
        <br/><br/>
        Deed Polls supplied from this site are unenrolled. You can make an unenrolled Deed Poll yourself;
        this website is simply for convenience. The Deed Poll template that we use was drafted by an
        experienced solicitor and is much more likely to be accepted than a home-made document.
        <br/><br/>
        If you need an enrolled Deed Poll, you must apply to the Royal Courts of Justice.
        For more information visit <a href="https://www.gov.uk/change-name-deed-poll/enrol-a-deed-poll-with-the-courts">GOV UK.</a> If

        you have any questions or problems regarding your Deed Poll, or you want a refund, visit our
        <Link to="/contact"> Contact page</Link>
      </div>
    </div>
  )
}
