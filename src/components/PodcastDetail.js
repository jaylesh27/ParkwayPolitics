import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const PodcastDetail = (props) => {
    
    console.log(props.location.state);
    const podcastDetails = props.location.state.podcastData;


    const showNotes = podcastDetails.sourceLinks.map((source) => {
        return(
            <li key={podcastDetails.episode}>
                <a href={source.link} target="_blank">{source.linkHeadline}</a>
            </li>
        );
    });


    return (
        <div>
            <NavBar />
            <div className="container-fluid podcast-details">
                <div className="row justify-content-center">
                    <h3>Episode {podcastDetails.episode}: {podcastDetails.title}</h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10 col-sm-12">
                    <div dangerouslySetInnerHTML={{__html: podcastDetails.soundcloudLink}} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-8 col-sm-12">
                        <p className="text">
                            Release date: {podcastDetails.releaseDate}
                        </p>
                        <p className="text">
                            Length: {podcastDetails.length}
                        </p>
                        <p className="text">
                            {podcastDetails.description}
                        </p>
                        <div className="text">
                            {/* Check out these links to see the articles that we referenced in this episode */}
                            <ul>{showNotes}</ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PodcastDetail;