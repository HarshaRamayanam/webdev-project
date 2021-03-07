import {React, Component} from 'react'
import moment from 'moment';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

require('dotenv').config();
const ApiKey = process.env.REACT_APP_API_KEY;

class LineChart extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            daily_data : {}
            
        }

    };
    calCelcius(temp) {
        let celcius = Math.floor(temp - 273.15);
        return celcius;
    }
    componentDidUpdate(prevProps){
        if(this.props.lat !== prevProps.lat || this.props.lon !== prevProps.lon){
            this.componentDidMount();
        }
    }
    componentDidMount = async() =>{
        try{
          if(this.props.lat !== undefined && this.props.lon !== undefined){

            const response = await axios.get("https://api.openweathermap.org/data/2.5/onecall?lat="+this.props.lat+"&lon="+this.props.lon+"&exclude=minutely&appid="+ApiKey+"")
                if (response.status === 400 || response.status === 500 || response.status === 404) {
                  console.log("please enter valid city");
                }

              const hourly_temp = [];
              const date_time = [];
              for(let i=0 ;i <= 24; i++){
                  hourly_temp.push(this.calCelcius(response.data["hourly"][i].temp));
                  date_time.push(moment.unix(response.data["hourly"][i].dt).format("hh:mm a"));
              }
          
              this.setState({
                  daily_data: {
                    labels: date_time,
                    datasets: [
                      {
                        label: "Hourly",
                        data: hourly_temp,
                        fill: true,
                        lineTension: 0.2,
                        // backgroundColor: " #9999ff",
                        backgroundColor:"#246107",
                        pointBorderColor: "#000000",
                        pointBackgroundColor: "#000000",
                        pointBorderWidth: 1,
                        pointHoverRadius: 4,
                        pointHoverBackgroundColor: "#000000",
                        pointHoverBorderColor: "#000000",
                        pointHoverBorderWidth: 2,
                        pointRadius: 2,
                        pointHitRadius: 11,
                      },
                    ],
                  },
                });
              }; 
            }
        
        catch(err){

            console.log(err);
        }
    }
    render() {
        return (
          <div>
              <Line
                data={this.state.daily_data}
                options={{
                  responsive: true,
                  scales: {
                    xAxes: [
                      {
                        display: true,
                      },
                    ],
                    yAxes: [
                      {
                        display: true,
                      },
                    ],
                  },
                  title:{
                    display:true,
                    text:'24 hours',
                    fontSize:20,
                    fontColor: "#222222"
                  },
                  legend: {
                      display: true,
                      position: 'top',
                    labels: {
                      fontColor: "#222222",
                      fontSize: 12,
                    },
                  },
                }}
              />
          </div>
        );
    }
}

export default LineChart;