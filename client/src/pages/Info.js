import React from 'react';
import MainNav from '../components/MainNav';

export default () => {
  return (
    <div className="Info">
      <MainNav />
      <h1>Info</h1>
      <div>
        You do not have to follow a legal process to start using a new name.
        But you might need a ‘deed poll’ to apply for or to change official documents
        like your passport or driving licence. There are two types of Deed Poll: unenrolled and enrolled.
        Unenrolled Deed Polls are accepted by most organisations inculding the uk passport office, the DVLA and HMRC.
        Some organisations will only accept an enrolled Deed Poll. If you are under 16, you will need an enrolled Deed Poll.

        Deed Polls supplied from this site are unenrolled. You can make an unenrolled Deed Poll yourself,
        this website is simply for convenience. The Deed Poll template that we use was drafted by an
        experienced solicitor and is much more likely to be accepted than a home-made document.

        If you need an enrolled Deed Poll, you must apply to the Royal Courts of Justice.
        For more information visit <a href="https://www.gov.uk/change-name-deed-poll/enrol-a-deed-poll-with-the-courts">GOV UK</a>

        If you have any questions or problems regarding your Deed Poll, or you want a refund, visit our Contact page
      </div>
    </div>
  )
}
