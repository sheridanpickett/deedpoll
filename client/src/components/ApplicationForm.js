import React from 'react';

export default ({formState, setFormState}) => {
  return (
    <div className="ApplicationForm">
      <form className="ApplicationForm-form">
        <label className="ApplicationForm-label" htmlFor="currentName">Current Name</label>
        <input className="ApplicationForm-input" type="text" id="currentName" value={formState.currentName} onChange={e=>setFormState(e)} noValidate/>
        <label className="ApplicationForm-label" htmlFor="newName">New Name</label>
        <input className="ApplicationForm-input" type="text" id="newName" value={formState.newName} onChange={e=>setFormState(e)} noValidate/>
        <label className="ApplicationForm-label" htmlFor="address">Address</label>
        <input className="ApplicationForm-input" type="text" id="address" value={formState.address} onChange={e=>setFormState(e)} noValidate/>
        <label className="ApplicationForm-label" htmlFor="witness1Name">Witness 1 name</label>
        <input className="ApplicationForm-input" type="text" id="witness1Name" value={formState.witness1Name} onChange={e=>setFormState(e)} noValidate/>
        <label className="ApplicationForm-label" htmlFor="witness1Address">Witness 1 address</label>
        <input className="ApplicationForm-input" type="text" id="witness1Address" value={formState.witness1Address} onChange={e=>setFormState(e)} noValidate/>
        <label className="ApplicationForm-label" htmlFor="witness2Name">Witness 2 name</label>
        <input className="ApplicationForm-input" type="text" id="witness2Name" value={formState.witness2Name} onChange={e=>setFormState(e)} noValidate/>
        <label className="ApplicationForm-label" htmlFor="witness2Address">Witness 2 address</label>
        <input className="ApplicationForm-input" type="text" id="witness2Address" value={formState.witness2Address} onChange={e=>setFormState(e)} noValidate/>
        <label className="ApplicationForm-label" htmlFor="email">Email</label>
        <input className="ApplicationForm-input" type="email" id="email" value={formState.email} onChange={e=>setFormState(e)} noValidate/>
      </form>
    </div>
  )
}
