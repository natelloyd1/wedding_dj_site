import React, { Component } from 'react';

class Faq extends Component {

    render () {
        return (
        
            <div className="faq-wrap">
            
            <h3 className="faq-title">How do you select what music to play? </h3>
            <p className="faq-text">Prior to the event I will request a playlist from you, which can be sent in whatever format you like, such as Spotify, Youtube, email etc.  This isn't mandatory however it helps me create good idea of the music you'd like to hear. I can then also ensure your favourite tracks are played. </p>
            
            <h3 className="faq-title">Do you take requests on the night?</h3>
            <p className="faq-text">Always!</p>

            <h3 className="faq-title">What equipment do you use?</h3>
            <p className="faq-text">I have professional Pioneer equipment and most often tour with a Pioneer XDJ-RX2.  At an additional charge I can DJ using Technics 1210 turntables upon request.</p>

            <h3 className="faq-title">Do you hold Public Liability Insurance and is your equipment PAT tested?</h3>
            <p className="faq-text">I hold public liability cover up to £1 Million and Professional Indemnity up to £1 Million.  All my equipment is PAT tested. </p>

            <h3 className="faq-title" >How much do you charge? </h3>
            <p className="faq-text">Each event I perform at greatly differs from the next, so it's difficult to determine a fixed price for my services. However I usually take into account the following factors - duration of play, distance of travel and equipment required (such as lighting, PA system etc).</p>
            
            </div>
            
        ); 

    }

}

export default Faq; 

