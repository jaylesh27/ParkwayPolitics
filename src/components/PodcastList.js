import React from 'react';
import { Link } from 'react-router-dom';

const PodcastList = (props) => {
    
    if (props.episodes === undefined) {
        return <div className="loading-div">Loading podcasts</div>
    }else {
        const podcastList = props.episodes.map(podcast => {
            return(
                <li className = "podcast-list-item" key={podcast.episode}>
                    <div className="row">
                        <div className = "col-lg-3 col-md-6 col-sm-4">
                            <h5>Episode {podcast.episode}</h5>
                            <div dangerouslySetInnerHTML={{__html: podcast.soundcloudLink}} />
                        </div>
                        <div className = "col-lg-9 col-md-6 col-sm-8">
                            <h5 className="podcast-title">{podcast.title}</h5>
                            <h6>{podcast.releaseDate}</h6>
                            <p>{podcast.description}</p>
                            <button>
                                <Link to={{
                                    pathname: `/episodes/${podcast.episode}`,
                                    state: {
                                        podcastData: podcast
                                    }
                                }}>See more...</Link>
                            </button>
                        </div>
                    </div>
                </li>
            );
        });
        return(
            <ul className="podcast-list">
                {podcastList}
            </ul>
        );
    }
}

export default PodcastList;