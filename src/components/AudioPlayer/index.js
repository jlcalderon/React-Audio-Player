import React, { Component } from "react";
/* import Spotify from "node-spotify-api"; */
import soundFile from "../../assets/marimba.mp3";

let audio = new Audio(soundFile);

/* Fetch a track from spotify */
//0. Create a variable to store the api result
/* let spotifyUrl = ""; */
//1. Create a new spotify object instance
/* const spotify = new Spotify({
    id: "39a6806c58e14e98a1cefb600fc92417",
    secret: "f7ced5cfde0f4fdf9a0bef951bf50a6a"
}); */

//2. Make a request to the api
/* spotify
    .search({ type: 'track', query: 'Breathing Meditation', limit: 1 })
    .then(function(response) {
        console.log(response);
        spotifyUrl = response;
    })
    .catch(function(err) {
        console.log(err);
    }); */

class AudioPlayer extends Component {
    state = {
        playing: false,
        caption: "Play",
    }

    handlePlaying = event => {
        /* const playing = event.target.playing
        let caption = event.target.caption */
        this.setState({
            playing: true,
            caption: "STOP"
        });
        audio.play();
    }

    render() {
        return (
            <div>
                <button
                    playing={this.state.playing}
                    caption={this.state.caption}
                    onClick={this.handlePlaying}
                >
                    {this.state.caption}
                </button>
                
            </div>
        )
    }

}

export default AudioPlayer;