import React, { Component } from 'react';
import ReviewCard from './ReviewCard'; 

class Review extends Component {
    state = {
        reviews: [
            { id: 1, date: "Aug '18", name: 'Craig Foot', text: "Nate will go out of his way to make the night perfect, as he did for our wedding. Due to a band canceling last minute Nate was able to step in and honestly I'm glad he did, playing tune after tune..."},
            { id: 2, date: "Jul '18", name: 'Craig Bevan', text: 'Nate did a fantastic job our our daughters 21st Birthday Party. Very easy going, communicates really well, always responded to emails the same day. Happy to include songs that we wanted at the party and the variety was spot on for a mixed aged group and was very obliging during the evening. I would recommend the "well known wedding DJ" without hesitation.'},
            { id: 3, date: "Jun '18", name: 'Claire Viola', text: "Fab night at the tunnels celebrating our wedding! Couldn't have asked for a better DJ highly recommend !!!!!!" },
            { id: 4, date: "May '18", name: 'Kate & Matt Butler', text: "I absolutely can't recommend Nate enough. He stepped in at short notice after a few technical issues with our original DJ meant they had to pull out of our wedding on Saturday. This could have been stressful but Nate is so enthusiastic but in a laid back way, he made me feel totally at ease that everything would be OK. He communicated brilliantly with me to find out exactly what we wanted for the evening and played every song I asked for. The way he structured the playlist was fabulous keeping young and old happy. He did such a great job even the band we also had playing commented on it to us, along with loads of the guests. The dance floor was packed at all times! A fabulous DJ and a fabulous guy!"},
            { id: 5, date: "May '18", name: 'Harry & Claire Fenner Crawley', text: "Nate did an amazing job at our wedding recently. He was reliable and easy-going. He communicated really well with us on the weeks leading up to the wedding and created a mix exactly to our taste. I would highly recommend him!" },
            { id: 6, date: "May '18", name: 'Verena Bowyer', text: "Great set for my cousin's wedding, also Nate is a great chap - great company for supper!!!" }, 
        ]
    }
    render() {
        const reviews = (
               this.state.reviews.map((review) => {
                   return (
                   <ReviewCard
                       name={review.name}
                       id={review.id}
                       text={review.text}
                       date={review.date}
                       key={review.id}
                   />
                   );             
               })
        ); 
           return (
               <div className="all-reviews">
                   {reviews}
               </div>
           ); 
       }; 
   }
   

export default Review; 

