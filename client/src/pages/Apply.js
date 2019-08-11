import React, { useState } from 'react';

import MainNav from '../components/MainNav';
import { Link } from 'react-router-dom';

export default () => {
  const [currentName,setCurrentName] = useState('');
  const [newName,setNewName] = useState('');
  const [address,setAddress] = useState('');
  const [witness1Name,setWitness1Name] = useState('');
  const [witness1Address,setWitness1Address] = useState('');
  const [witness2Name,setWitness2Name] = useState('');
  const [witness2Address,setWitness2Address] = useState('');
  const [email,setEmail] = useState('');

  return (
    <div className="Apply">
      <MainNav />
      <h1>Apply</h1>
      <div>
        <form>
          <label>Current Name
            <input type="text" value={currentName} onChange={e => setCurrentName(e.target.value)} />
          </label>
          <label>New Name
            <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
          </label>
          <label>Address
            <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
          </label>
          <label>Witness 1 name
            <input type="text" value={witness1Name} onChange={e => setWitness1Name(e.target.value)} />
          </label>
          <label>Witness 1 address
            <input type="text" value={witness1Address} onChange={e => setWitness1Address(e.target.value)} />
          </label>
          <label>Witness 2 name
            <input type="text" value={witness2Name} onChange={e => setWitness2Name(e.target.value)} />
          </label>
          <label>Witness 2 address
            <input type="text" value={witness2Address} onChange={e => setWitness2Address(e.target.value)} />
          </label>
          <label>Email
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
        </form>
      </div>
    </div>
  )
}
