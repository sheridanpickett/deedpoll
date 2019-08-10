import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default ({className}) => {
  const [active, setActive] = useState({
    one: false,
    two: false,
    three: false,
    four: false});

  return (
    <nav className={`MainNav ${className}`}>
      <Logo />
      <Link className={`link one ${active.one ? 'bounce':''}`}
        onMouseEnter={()=>setActive({...active, one: true})}
        onAnimationEnd={()=>setActive({...active, one: false})} to="/">
        <span>Home</span>
      </Link>
      <Link className={`link two ${active.two ? 'bounce':''}`}
        onMouseEnter={()=>setActive({...active, two: true})}
        onAnimationEnd={()=>setActive({...active, two: false})} to="/contact">
        <span>Contact</span>
      </Link>
      <Link className={`link three ${active.three ? 'bounce':''}`}
        onMouseEnter={()=>setActive({...active, three: true})}
        onAnimationEnd={()=>setActive({...active, three: false})} to="/payment">
        <span>Payment</span>
      </Link>
      <Link className={`link four ${active.four ? 'bounce':''}`}
        onMouseEnter={()=>setActive({...active, four: true})}
        onAnimationEnd={()=>setActive({...active, four: false})} to="/apply">
        <span>Apply Now</span>
      </Link>
    </nav>
  )
}
