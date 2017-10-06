import '../App.css';
import React from "react"

const Card = (props) => {
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
console.log("TODAY",today);

var eventDate = props.data.attributes.endDate;
var edd = eventDate.getDate();
var emm = eventDate.getMonth()+1;
var eyyyy = eventDate.getFullYear();
if(edd<10) {
    edd = '0'+edd
} 

if(emm<10) {
    emm = '0'+emm
} 

eventDate = emm + '/' + edd + '/' + eyyyy;
console.log("EVENT DATE",eventDate);

  console.log("CARD PROPS",props.data.attributes.endDate);
  return(
   <div className="col-md-4">
      <div key={props.id} className="card">
  <img className="card-img-top" src={props.data.attributes.image._url} alt="Card image cap" />
  <div className="card-block">
    <h4 className="card-title"></h4>
    <p className="card-text">This event ended on: <span>{eventDate}</span></p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Attendees: <span>{props.data.attributes.attendeeCount}</span></li>
    <li className="list-group-item">Location: <br/><span> Latitude : {props.data.attributes.location._latitude}</span><br/><span>Longitude: {props.data.attributes.location._longitude}</span></li>
    <li className="list-group-item">Hosted by User: <span>{props.data.attributes.host.id}</span></li>
  </ul>
 
</div>
</div>
        
 
)
}
  

export default Card;