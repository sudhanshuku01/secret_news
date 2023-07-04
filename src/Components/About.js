import React, { Component } from 'react'
// import image1 from './IMG20230605174929.jpg'
import image2 from './sudhanshuimage.jpg'
import { Link } from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
      <div className='aboutcontainer'>

        <div className='developerinfo'>
          <div>Hi There,<br /> I'm Sudhanshu</div>
        <div>I'm a Full Stack MERN Developer and Data Scientist</div>
        <div><span>About Me</span></div>
        <div>
        <Link to="https://facebook.com/sudhanshu.kushwaha01/" target='_blank'><i style={{marginLeft:"0"}} className="sociallink fa-brands fa-square-facebook"></i></Link>
        <Link to="https://github.com/sudhanshuku01/" target='_blank' ><i  className="sociallink fa-brands fa-github"></i></Link>
        <Link to="https://instagram.com/sudhanshu.kushwaha01" target='_blank'><i className="sociallink fa-brands fa-square-instagram"></i></Link>
        <Link to="https://facebook.com" target='_blank'><i className="sociallink fa-brands fa-linkedin"></i></Link>
        </div>
        </div>
        <div className='developerinfo2'>
             <div style={{textAlign:"center"}}><img src={image2} alt="" /></div>
             <div>Hey,I am Sudhanshu Kumar a passionate college student of batch(21-25).From the first day of the college I started learning about web developement.Now I'm a full stack MERN Developer.</div>
        </div>

      </div>
    )
  }
}
