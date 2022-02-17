import { Component } from 'react';
import { withRouter } from '../util/withRouter';
import { stockStats } from '../../resources/stock-stats.js';

class StockHeader extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {}
		}
	}
	
	applyData(data) {
		this.setState({
			data: data
		})
	}
		
	componentDidMount() {
		stockStats.getStockStats(this.props.params.symbol, this.applyData.bind(this))
	}

	render() {
		return (
			<div className = "stock-header">
				<h2>{this.state.data.companyName} ({this.state.data.symbol})</h2>
				<h3>${this.state.data.latestPrice} ({this.state.data.change}%)</h3>
			</div>				
		)
	}
}


export default withRouter(StockHeader);