import React, { useState, useEffect } from 'react';

// const url = `../../functions/instagram`;

function useInstagram() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch(`../../functions/instagram`)
        .then(res => res.json())
        .then(data => {
          setPosts(data);
        });
    }, []);
    return posts;
  }

// function useInstagram() {
//     const [posts, setPosts] = useState([]);
//     useEffect(() => {
//         fetch(url).then(res => res.json()).then(data => {
//             setPosts(data); 
//         });

//     }, []);
//     return posts;  
// }

export default function Instagram() {
    const gramz = useInstagram();
    return (
        <div>
            {gramz.map(gram => (
                <a href={gram.url} key={gram.id}>
                    <img src={gram.thumbnail} alt={gram.caption} />
                </a>
            ))}
        </div>
    )
}

// useEffect(() => {
//     console.log('fetching the gramz');
//     fetch(url)
//         .then(data => data.json())
//         .then(({ data }) => {
//             console.log('back');

//             const thumbs = data.user.edge_owner_to_timeline_media.edges.map( edge => ({
//                 url: edge.node.
//             }))
//         })
// })