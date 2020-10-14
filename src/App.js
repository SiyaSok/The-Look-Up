import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Artist from './Component/Artist/Artist';
import Search from './Component/Search/Search';
import Tracks from './Component/Tracks/Tracks';
import Logo from './Component/logo/Logo';
import Header from './Component/Header/Header';


const API_ADD = 'https://spotify-api-wrapper.appspot.com/artist';

class App extends Component {
	state = {
		artist: null,
		tracks: [],
		err:''
	};

	// componentDidMount() {
	// 	this.searchArtist('J cole');
	// }

	searchArtist = (artistQuery) => {
		fetch(`${API_ADD}/${artistQuery}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.artists.total > 0) {
					const artist = data.artists.items[0];
					this.setState({ artist });

					fetch(`${API_ADD}/${artist.id}/top-tracks`)
						.then((res) => res.json())
						.then((data) => {
							this.setState({ tracks: data.tracks });
							console.log(data.tracks);
						})
						.catch((err) => alert("Try a differnt name"));
				} else {
					alert(`${artistQuery} does not exist. Try a differnt name`);
				}
			})
			.catch((err) => alert("Try a differnt name"));
	};
	render() {
		return (
			<div className="App container-fluid p-0">
				<div className="row navbar p-2">
					<div className="col-sm-6 col-xs-12">
						<Logo />
					</div>
					<div className="col-sm-6 col-xs-12">
						<Search searchArtist={this.searchArtist} />
					</div>
				</div>
				<Header artist={this.state.artist}/>
				<div className=" container">
				<div className="row ">
				<Artist artist={this.state.artist} />
					<Tracks tracks={this.state.tracks} />
				</div>
			</div>
			</div>
		);
	}
}

export default App;
