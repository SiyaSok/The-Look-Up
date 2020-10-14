import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Artist = ({ artist }) => {
	if (!artist) return null;
	const { images, name, followers, genres } = artist;

	return (
		<div className="mt-5 row  Artist">
			<div className="col-sm-6 col-xs-12 Artist-img">
			<img
				className="img-thumbnail mx-auto rounded-circle img-fluid Artist-img"
				src={images[1] && images[1].url}
				alt=""
			/>
			</div>
			<div className="col-sm-6 col-xs-12 Artist-info ">
			<h2 className="mt-5">{name}</h2>
				<p>{followers.total} <span>followers</span></p>
				<p>{genres.join(', ')}</p>
				</div>
		</div>
	);
};

export default Artist;
