import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class ListenCard extends Component {
    
    render() {

    return (
            <div className="cardwrap">
                <h3>{this.props.name}</h3>
                <p>{this.props.subtitle}</p>
                <ReactPlayer
                    className='react-player'
                    url={this.props.link}
                    playing={false}
                    lightmode={true}
                    width="100%"
                />
            </div>
        );
    };
}
export default ListenCard; 