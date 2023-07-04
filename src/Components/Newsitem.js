import React, { Component } from 'react'
import defnewsimage from './news-1172463_640.jpg'
export default class Newsitem extends Component {
  render() {
    let { title, description, imageUrl,newsUrl, author, date,source } = this.props;
    return (
        <div className='newsitem'>
          <p>{source}</p>
        <img src={imageUrl?imageUrl:defnewsimage} alt="" />
        <div id='title'>{title}</div>
        <div id='description'>{description}</div>
        <div className='authoranddate'>
          <small id='author'>by {author}</small> <small id='date'> On {date}</small>
        </div>
         <div style={{margin: '17px 12px'}}><a id='readmore' target='_blank' rel="noreferrer" href={newsUrl}>Read More</a></div>
  </div>
    )
  }
}
