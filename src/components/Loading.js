import '../App.css';
import React from "react"
import logo from "../event.png"


const Loading = (props) => {
	return(
		<div className="col-md-12">
		<div className="load-text">Loading Past Events from EventKey</div>
		<img className="App-logo loading" src={logo} />
		</div>

		)
}
export default Loading;