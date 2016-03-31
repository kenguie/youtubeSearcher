import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDOwXShfnoC1OF3Hrrq9ntir38mIURyIpI';

// make a component
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { // an array of videos
			videos: [],
			selectedVideo: null 
		};  

		this.videoSearch('transformers');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});   
		});
	}

	render() { /* passing props to VideoList */
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />  
			</div>
		);
	}
}

// put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));