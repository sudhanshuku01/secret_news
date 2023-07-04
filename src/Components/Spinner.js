import React, { Component } from 'react'
import spingif from'./loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <img style={{width:"35px"}} src={spingif} alt="spingif" />
      </div>
    )
  }
}
