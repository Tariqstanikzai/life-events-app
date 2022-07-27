import Post from "../components/Posts/Post/Post";

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
    switch (action.type) {
        case 'UPDATE':
            return posts.map((posts) => posts._id === action.paylad._id ? action.payload : Post);
        case 'FETCH_ALL':
            return action.payload;
        case ' CREATE':
            return [ ...posts, action.payload];
        default:
            return posts;
    }
    
}