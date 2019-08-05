import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default ({className}) => {
  const [active, setActive] = useState({one: false, two: false, three: false});

  return (
    <>
      <nav className={className}>
        <div className="link-container one">
          <Link className={`link ${active.one ? 'bounce':''}`}
            onMouseEnter={()=>setActive({...active, one: true})}
            onAnimationEnd={()=>setActive({...active, one: false})} to="/">
            <span>Home</span>
          </Link>
        </div>
        <div className="link-container two">
          <Link className={`link ${active.two ? 'bounce':''}`}
            onMouseEnter={()=>setActive({...active, two: true})}
            onAnimationEnd={()=>setActive({...active, two: false})} to="/about">
            <span>About</span>
          </Link>
        </div>
        <div className="link-container three">
          <Link className={`link ${active.three ? 'bounce':''}`}
            onMouseEnter={()=>setActive({...active, three: true})}
            onAnimationEnd={()=>setActive({...active, three: false})} to="/payment">
            <span>Payment</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
