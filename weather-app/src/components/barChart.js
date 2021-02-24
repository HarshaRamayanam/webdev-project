import {React, Component} from 'react'
import moment from 'moment';
import {Bar} from 'react-chartjs-2';

require('dotenv').config();
const ApiKey = process.env.REACT_APP_API_KEY;

class Barchart extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            daily_data : {}
            
        }

    };
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
            console.log(response_info);
            const minTemp = [];
            const maxTemp = [];
            var days = [];
            
            for(var i=0;i<8;i++){
                days.push(moment.unix(response_info.daily[i].dt).format('MMMM Do YYYY'));
                minTemp.push(Number(response_info.daily[i].temp.min.toFixed(0)));
                maxTemp.push(Number(response_info.daily[i].temp.max.toFixed(0)));
            }
            this.setState({
                daily_data:{
                        height: 15,
                        width:20,
                        labels:days,
                        datasets:[
                        {
                            label:"Minimum Temperature",
                            data:minTemp,
                            backgroundColor: "#0090ff",
                            borderWidth: 2,
            
                        },
                        {
                            label:"Maximum Temperature",
                            data:maxTemp,
                            backgroundColor: "#ff2600",
                            borderWidth: 2,
            
                        }
                    ]
                },
            });
    }
    catch(err){
        console.log(err);
    }
}

    render(){
        return(
            <div className="graph">
             <Bar
                data={this.state.daily_data}
                width={25}
                height={15}
                options={{
                    responsive: true,
    
                    scales: {
                    xAxes: [
                        {
                        display: true,
                        gridLines: {
                            offsetGridLines: true,
                        },
                        },
                    ],
                    yAxes: [
                        {
                        display: true,
                        },
                    ],
                    },
                }}
            />
  
        </div>

        );

    }
}    

export default Barchart;