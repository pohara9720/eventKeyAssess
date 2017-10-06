import React, { Component } from 'react';
import logo from './event.png';
import './App.css';
import Parse from "parse/node"
import Loading from "./components/Loading.js"
import Card from "./components/Card.js"

//  var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
// var yyyy = today.getFullYear();

// if(dd<10) {
//     dd = '0'+dd
// } 

// if(mm<10) {
//     mm = '0'+mm
// } 

// today = mm + '/' + dd + '/' + yyyy;
// console.log("TODAY",today);

// var eventDate = props.data.attributes.endDate;
// var edd = eventDate.getDate();
// var emm = eventDate.getMonth()+1;
// var eyyyy = eventDate.getFullYear();
// if(edd<10) {
//     edd = '0'+edd
// } 

// if(emm<10) {
//     emm = '0'+emm
// } 

// eventDate = emm + '/' + edd + '/' + eyyyy;
// console.log("EVENT DATE",eventDate);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: "Loading",
      term: ""
    }
  }

componentWillMount(){
  let self = this;
        Parse.initialize("f3U4dybGW4Uk5BDIMMVWmN1Mnn142P3XFv8eigwn");
        Parse.serverURL = 'https://eventkey.herokuapp.com/parse'

        Parse.Cloud.run("getCheckIn", {userId: "X8RVN508nc"}).then(function(results){
          // console.log(results) 
            self.setState({
                data:results
            })
      
      })
}


  
  render() {
        console.log("NEW STATE",this.state.data);
        let content;
        if(this.state.data === "Loading" ){
          content = <Loading />
        }
        else if(typeof this.state.data === "object"){
          const events = this.state.data;

            for(let i=0;i<events.length;i++){
              // console.log(events[i].attributes.endDate);
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

                var eventDate = events[i].attributes.endDate;
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
                  if(eventDate < today){
                     content = events.map((event) => <Card key={event.id} id={event.id} data={event} />)
                  }
                  else{
                    console.log("Not Happened Yet")
                  }
            }

         

        }
    return (
      <div className="container">
      
      <div className="jumbotron">
      <p className="title">Past Events from Event Key based of User ID : X8RVN508nc</p><br/>
      <img className="App-logo" src={logo} /> 
      
      </div>
      <div className="row">
      {content}
      </div>
      
      </div>
    );
  }
}

export default App;
