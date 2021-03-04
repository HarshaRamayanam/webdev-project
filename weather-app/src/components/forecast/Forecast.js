import { React, Component } from "react";
import { render } from "react-dom";
import Moment from "react-moment";
import moment from 'moment';
import axios from  'axios';
require('dotenv').config();
const ApiKey = process.env.REACT_APP_API_KEY;

class Forecast extends Component{
    constructor(props){
        super(props);
        this.state={
            foreCast : []
        }
        
    };
    componentDidUpdate(prevProps){
        if(this.props.lat !== prevProps.lat || this.props.lon !== prevProps.lon){
            this.componentDidMount();
        }
    }
  
   componentDidMount(){
        console.log(this.props.lat);
        console.log(this.props.lon);
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat="+this.props.lat+"&lon="+this.props.lon+"&exclude=minutely&appid="+ApiKey+"")
        .then((Response)=>{
            if (Response.status === 400 || Response.status === 500 || Response.status === 404) {
                console.log("please enter valid city");
              }
            const daily_data = [];
            console.log("in");
            console.log(Response);
            for(let i=1; i<=5; i++){
                daily_data.push(Response.data["daily"][i])  
            }
            this.setState({
                foreCast : daily_data,
                
            })
            console.log(this.state.foreCast);
    });
    }
    

render(){
   
    return(
        <span className="container forecast-container">
            <hr style={{ color: '#FFFFFF',
                        backgroundColor: '#FFFFFF',
                        height: .5,
                        borderColor : '#000000'}}/>
            <h4 className="text-center forecastTitle"><b>5 day Forecast</b></h4>
        
        <div className="row">
           
             {this.state.foreCast.map((item) => (
                
               <div className="col" key={item.dt}>
                  
                   <div className="card weatherCard">
                       
                       <div className="container">
                           <div className="row">
                               <div className="col">
                                   <h3 className="weekday">
                                       <b>{moment.unix(item.dt).format('MM/DD/YYYY')}</b>
                                   </h3 >
                                   <h5 className="weekday"><b>{moment.unix(item.dt).format('dddd')}</b></h5>
                               </div>
                           </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                
                                    <img className="weather-icon" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather icon" width="80px"/>
                                    <p className="desc"><b>{item.weather[0].description}</b></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h6 className="minTemp">
                                        <b>L: 
                                        {Math.floor(item.temp.min - 273.15)}&deg;c</b>
                                    </h6>
                                </div>    
                                <div className="col-6">
                                    <h6 className="maxTemp">
                                        <b>H: 
                                        {Math.floor(item.temp.max - 273.15)}&deg;c</b>
                                    </h6>
                                </div>     
                            </div>
                       </div>
                   </div>
                  </div>  
            ))}  
        </div>
    
    </span>

)}
}

 export default Forecast;


