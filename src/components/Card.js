import '../public/app.css';
import React from "react"


  return(
   
      <div className="col l5">
          <div key={props.title} className="view card">
            <div className="card-image">
              <img src={props.image}></img>
            </div>
            <div className="card-content">
             <div className="row">
             <span className="card-title">{props.name}</span>
              <ul className="cardList">
              <li className="loc list left">Location: <span className="big">{props.location}</span></li>
              <li className="score list right"> <span className="big">{ props.date}</span></li>
              <li></li>
              </ul>
              </div>
            </div>
            <div className="card-action">
                            
            
            </div>
          </div>
          </div>
        
 
)
}
  

export default Card;