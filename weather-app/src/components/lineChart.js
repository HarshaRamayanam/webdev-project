import {React, Component} from 'react'
import moment from 'moment';
import {Line} from 'react-chartjs-2';

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

            const response = await fetch(
                `http://api.openweathermap.org/data/2.5/onecall?lat=${this.props.lat}&lon=${this.props.lon}&exclude=minutely&appid=${ApiKey}`
            );
            const response_info = await response.json();
            const hourly_temp = [];
            const date_time = [];
            for(let i=0 ;i <= 24; i++){
                hourly_temp.push(this.calCelcius(response_info.hourly[i].temp));
                date_time.push(moment.unix(response_info.hourly[i].dt).format("hh:mm a"));
            }
            console.log(hourly_temp);
            console.log(date_time);
            this.setState({
                daily_data: {
                  labels: date_time,
                  datasets: [
                    {
                      label: "Hourly",
                      data: hourly_temp,
                      fill: true,
                      lineTension: 0.2,
                      backgroundColor: "#41d33b",
                      pointBorderColor: "#00a2ff",
                      pointBackgroundColor: "#00a2ff",
                      pointBorderWidth: 1,
                      pointHoverRadius: 4,
                      pointHoverBackgroundColor: "#00a2ff",
                      pointHoverBorderColor: "#00a2ff",
                      pointHoverBorderWidth: 2,
                      pointRadius: 2,
                      pointHitRadius: 11,
                    },
                  ],
                },
              });
            
        
        }
        catch(err){
            console.log(err);
        }
    }
    render() {
        return (
          <div>
              <Line
                data={this.state.Data}
                height={15}
                width ={25}
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