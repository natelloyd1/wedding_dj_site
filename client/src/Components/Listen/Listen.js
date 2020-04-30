import React, { Component } from 'react';
import ListenCard from './ListenCard';

class Listen extends Component {
    state = {
        tapes: [
            {   id: '001', name: 'The Wedding Mixtape 001', subtitle: 'Time to get your groove on', link: 'https://soundcloud.com/wellknownweddingdj/theweddingmixtape001' },
            {   id: '002', name: 'The Wedding Mixtape 002', subtitle: 'Get ready to sing your heart out', link: 'https://soundcloud.com/wellknownweddingdj/the-wedding-mixtape-002' }
        ]
    }

    render() {
     const listentapes = (
            this.state.tapes.map((tape) => {
                return (
                <ListenCard
                    name={tape.name}
                    id={tape.id}
                    subtitle={tape.subtitle}
                    link ={tape.link}
                    key={tape.id}
                />
                );             
            })
     ); 
            
        return (
            <div>
                {listentapes}
            </div>
        ); 
    }; 
}

export default Listen; 