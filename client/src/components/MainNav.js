import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default ({className}) => {
  const [active, setActive] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false});

  return (
    <nav className={`MainNav ${className}`}>
      <Logo />
      <Link className={`MainNav-link MainNav-dropfade ${active.one ? 'MainNav-bounce':''}`}
        onMouseEnter={()=>setActive({...active, one: true})}
        onAnimationEnd={()=>setActive({...active, one: false})} to="/">
        <span className="MainNav-link-inner">Home</span>
      </Link>
      <Link className={`MainNav-link MainNav-dropfade-delayed ${active.two ? 'MainNav-bounce':''}`}
        onMouseEnter={()=>setActive({...active, two: true})}
        onAnimationEnd={()=>setActive({...active, two: false})} to="/contact">
        <span className="MainNav-link-inner">Contact</span>
      </Link>
      <Link className={`MainNav-link MainNav-dropfade-delayed-two ${active.three ? 'MainNav-bounce':''}`}
        onMouseEnter={()=>setActive({...active, three: true})}
        onAnimationEnd={()=>setActive({...active, three: false})} to="/info">
        <span className="MainNav-link-inner">Info</span>
      </Link>
      <Link className={`MainNav-link MainNav-link-light ${active.four ? 'MainNav-bounce':''}`}
        onMouseEnter={()=>setActive({...active, four: true})}
        onAnimationEnd={()=>setActive({...active, four: false})} to="/apply">
        <span className="MainNav-link-inner">Apply Now</span>
      </Link>
      
    </nav>
  )
}
