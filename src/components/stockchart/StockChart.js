import { Component } from 'react';
import { withRouter } from '../util/withRouter';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import './stock-chart.css';
 
class StockChart extends Component {
    render() {
        return (
            <div className='chart'>
                <TradingViewWidget
                symbol={this.props.params.symbol}
                theme={Themes.DARK}
                locale="en"
                autosize
                allow_symbol_change={false}
                hide_side_toolbar={false}
                />
            </div>
        )
    }

}

export default withRouter(StockChart);