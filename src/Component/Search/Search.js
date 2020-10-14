import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Search extends Component {
	state = {
		artistQuery: ''
	};

	updateArtistQuery = (event) => {
		this.setState({ artistQuery: event.target.value });
	};
	headleKeyPress = (event) => {
		if (event.key === 'Enter') {
			this.searchArtist();
		}
	};

	searchArtist = () => {
		this.props.searchArtist(this.state.artistQuery);
		this.setState({ artistQuery: ''});
	};

	render() {
		return (
			<div className='row Search'>
				<div className="col-xs-12  col-sm-offset-4"></div>
				<Input
					onChange={this.updateArtistQuery}
					onKeyPress={this.headleKeyPress}
					type="text"
					placeholder="Search for a Artist"
					className="d-line"
					value={this.state.artistQuery}
					required
				/>

				<Button onClick={this.searchArtist} className="ml-2 mr-4" color="primary" type="submit">
					Search
				</Button>
			</div>
		);
	}
}

export default Search;
