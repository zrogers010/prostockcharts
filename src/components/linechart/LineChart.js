import { Component } from 'react';
import { render } from 'react-dom';
import { withRouter } from '../util/withRouter';
import { lineChart } from '../../resources/line-chart.js';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class LineChart extends Component {
    constructor(props) {
		super(props);
		this.state = {
			data: {}
            // chartOptions: {
            //     title: {
            //         text: this.props.params.symbol.toUpperCase()
            //     },
            //     series: [
            //       { data: [] }
            //     ],
            //     plotOptions: {
            //       series: {
            //         point: {
            //           events: {
            //             mouseOver: this.setHoverData.bind(this)
            //           }
            //         }
            //       }
            //     }
            // },
            // hoverData: null
		};
	}

    // setHoverData = (e) => {
    //     // The chart is not updated because `chartOptions` has not changed.
    //     this.setState({ hoverData: e.target.category })
    // }

    applyData(data) {
		this.setState({
			data: data
		})
        console.log("LINECHART: ", this.state.data)
	}
		
	componentDidMount() {
        console.log("props symnbol:L ", this.props.params.symbol);
		lineChart.getChartData(this.props.params.symbol, this.applyData.bind(this))
	}

    render() {
        // console.log("Line Chart");
        // console.log("data: ", this.state.data)

        const { data, chartOptions, hoverData } = this.state;
        const options = {
            title: {
                text: this.props.params.symbol.toUpperCase()
            },
            chart: {
                type: 'line', 
                backgroundColor: '#FFFFFF'
                //,shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                data: this.state.data // [1, 10, 3, 10]
            }]
        }

        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        )
    }
}

export default withRouter(LineChart);

