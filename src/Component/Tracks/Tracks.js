import React, { Component } from 'react';
import '../Tracks/Tracks';

class Tracks extends Component {
	state = { playing: false, audio: null, playingPreviewUrl: null };

	playAudio = (previewUrl) => () => {
		const audio = new Audio(previewUrl);

		if (!this.state.playing) {
			audio.play();
			this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
		} else {
			this.state.audio.pause();
			if (this.state.playingPreviewUrl === previewUrl) {
				this.setState({ playing: false });
			} else {
				audio.play();
				this.setState({ audio, playingPreviewUrl: previewUrl });
			}
		}
	};
	trackIcon = (track) => {
		if (!track.preview_url) {
			return <span>N/A</span>;
		}
		if (this.state.playing && this.state.playingPreviewUrl === track.preview_url) {
			return (
				<span>
					<img className="icon" src="https://img.icons8.com/ios-filled/50/000000/pause.png" alt="pause" />
				</span>
			);
		} else {
			return (
				<span>
					<img className="icon" src="https://img.icons8.com/ios-glyphs/48/000000/play.png" alt="play" />
				</span>
			);
		}
	};

	render() {
		const { tracks } = this.props;
		return (
			<div className="row">
				{tracks.slice(0,8).map((track) => {
					const { id, name, album, preview_url, track_number } = track;

					return (
						<div className=" col-lg-3 col-sm-6 mt-4 Track" key={id} onClick={this.playAudio(preview_url)}>
							<div className="card">
								<img className="card-img-top" src={album.images[0].url} alt="Cardy cap" />
								<p className="Track-icon">{this.trackIcon(track)}</p>
								<div className="card-body">
									
									<h5 className="card-title m-0">{name}</h5>
									<p className="m-0"><strong>Track:</strong> {track_number}</p>
									<p className="m-0"><strong>Album:</strong> {album.name}</p>
								</div>
								
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Tracks;
