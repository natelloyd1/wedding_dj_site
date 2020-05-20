require('isomorphic-fetch');

const url = `https://www.instagram.com/graphql/query/?query_hash=ad99dd9d3646cc3c0dda65debcd266a7&variables={"id":"34373069","first":12}`;

const cache = {
    lastFetch: 0,
    posts: [],
};

async function getPosts() {
    const timeSinceLastFetch = Date.now() - cache.lastFetch;
    if(timeSinceLastFetch <= 1800000) {
        return cache.posts; 
    }
    const data = await fetch(url).then(res => res.json());
    const posts = slimUpPosts(data); 
    cache.lastFetch = Date.now(); 

    cache.posts = posts; 
    
    return posts;
}

function slimUpPosts(response) {
    return response.data.user.edger_owner_to_timeline_media.edges.map(
        edge => ({
            thumbnail: edge.node.thumbnail.src,
            url: `https://instagram.com/p/${edge.node.shortcode}`,
            caption: edge.node.edge_media_to_caption.edges[0]
            .node.text,
            id: edge.node.id,
        })
    )
}

exports.handler = async function(even, context, callback) {

    const posts = await getPosts(); 

    callback(null, {
    statusCode: 200,
    headers: {
        'Content-Type': 'application/json', 
    },
        body: JSON.stringify(posts),
    });
}


