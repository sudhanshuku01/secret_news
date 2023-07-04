import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

 let li=document.getElementsByTagName('li');
 Array.from(li).forEach((element)=>{
  element.addEventListener('click',()=>{
    document.getElementById('change').checked=false;
  })
 })
  return (<>
    <div className='navbar'>
          <div className='nameandcategory'>
            <input style={{display:'none'}} type="checkbox" id='change' />
              <label htmlFor='change' id='navtoggle'><i className="fa-solid fa-bars"></i></label>
              <div id='name'><Link to="/">Secret News</Link></div>
              <ul className='category'>
                <li><Link to="/business">Business</Link></li>
                <li><Link to="/entertainment">Entertainment</Link></li>
                <li><Link to="/health">Health</Link></li>
                <li><Link to="/science">Science</Link></li>
                <li><Link to="/sports">Sports</Link></li>
                <li><Link to="/technology">Technology</Link></li>
                <li><Link to="/about">About Me</Link></li>
              </ul>
          </div>
    </div>
  </>
  )
}

