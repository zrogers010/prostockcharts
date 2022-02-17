import { Component } from 'react';
import { withRouter } from '../util/withRouter';
 
class Search extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: {}
		}
	}
	
	handleClick(e) {
		this.setState({
			data: e.target.value
		});
        console.log(data);
	}
	
    componentDidMount() {
        
    }

    render() {
        return (
            <div className='chart'>
                <input
                    type="button"
                    value="Alert the text input"
                    onClick={this.handleClick}
                />  
            </div>
        )
    }

}

export default withRouter(Search);