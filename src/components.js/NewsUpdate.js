
import React from 'react'

function NewsUpdate(props) {
  return (




<div className='my-3'> 
    <div className="card" style={{ width: "20rem",height:"28rem" }}>
      <img src={props.urlOfImage} alt=" news here" className="card-img-top" height={"200px"}  />
      <div className="card-body cardbodycolor">
        <h5 className="card-title"> {props.title}</h5>
        <p className="card-text">
          {props.descr}..........
        </p>
        <a rel='noreferrer' href={props.urlof} className="btn btn-primary">Read More</a>
      </div>
    </div>
</div>
  )
}

export default NewsUpdate





