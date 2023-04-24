import React from 'react';

function ImgCard(props){
  return(
    <div>
      <h1 className="heading">{props.contact}</h1>
      <div className="card">
        <div className="top">
          <p className="name">{props.name}</p>
          <img className="circle-img" src={props.imgURL} alt="avatar_img"/>
        </div>
        <div className="bottom">
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
    
  );
}


export default ImgCard;

