import '../public/app.css';
import React from "react"
import helpers from "../utils/helpers.js"
import Card from "./Card.js"
import Parse from "parse/node"



Parse.Cloud.run("getCheckIn", {userId: "X8RVN508nc"}).then(function(results){
  console.log("this is results",results);
      
  })

class Grid extends React.Component{
constructor(props){
super(props);
console.log("Grid Props",props)
this.state = {
  data: "Loading",
  term: ""
  
  }

   
}



componentWillMount(){
///grab events to display

}

  render(){
    // const back = (this.state.view === 8) ? <Grid /> : null;
    let content;
   
    if(this.state.data === "Loading"){
        content = 
        <div>
        <div className="loading">Retrieving Past Events</div>
        
        </div>
      } 
      else if (typeof this.state.data === "object"){
         const filterData = this.state.data.filter(event => {
          console.log("FILTER TERM",this.props.term)
      return this.props.term === "" || event.name.toLowerCase().includes(this.props.term.toLowerCase());
    });
        console.log(this.state.data)
        content = (!this.state.selected) 
        ? (
            filterData.map((event) => <Card key={event._id}  {...event} />)
        )
        : 
        <div>
        <div className="col l1"></div>
       <div className="col l9">
    
       </div>
        </div>
      
      }
    return(

      <div className="grid row">
      
       {content}
      </div>
      
    )
  }
}
  

export default Grid;