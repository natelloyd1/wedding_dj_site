import React, { Component } from 'react';

class ReviewCard extends Component {
    
    render() {

    return (
        <div className="review-wrap">
            <p>{this.props.text}</p>
            <h3>- {this.props.name} ({this.props.date})</h3>
            </div>
        );
    };
}
export default ReviewCard; 