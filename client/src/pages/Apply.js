import React from 'react';
import Payment from '../components/Payment';
import ApplicationForm from '../components/ApplicationForm';

import MainNav from '../components/MainNav';

export default class extends React.Component {
 state = {
   currentName: '',
   newName: '',
   address: '',
   witness1Name: '',
   witness1Address: '',
   witness2Name: '',
   witness2Address: '',
   email: ''
 }

 setFormState = e => {
   this.setState({[e.target.id]: e.target.value})
 }

 render () {
   return (
      <div className="Apply">
        <MainNav />
        <h1 className="global-heading">Apply</h1>
        <div className>
          <ApplicationForm formState={this.state} setFormState={this.setFormState} />
          <Payment formState={this.state} />
        </div>
      </div>
    )
  }
}
