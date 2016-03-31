import React from 'react';

const VideoDetail = ({video}) => {

	if (!video) {  // the first time it's run, the state of videos is empty but react keeps going trying to run the rest of the program
		return <div>Loading...</div>;
	}


	const videoId = video.id.videoId;
	//const url = 'https://www.youtube.com/embed/' + videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;  // using backticks - way to rewrite above line.

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>  
				<div>{video.snippet.description}</div>  
			</div>
		</div>
	);
};

export default VideoDetail;