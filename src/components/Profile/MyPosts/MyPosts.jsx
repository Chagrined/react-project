import style from './MyPosts.module.css';
import Post from './Post/Post';

let postsState = [
    {id:1, message: 'I learn React', likeCount: 3},
    {id:2, message: 'Next i will learn Node.js', likeCount: 25},
    {id:3, message: 'Node.js it is platform for javascript', likeCount: 1000},
    {id:4, message: 'I like codding', likeCount: 4000}
]

const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea />
                <div><button>add post</button></div>
            </div>
            <div>
                {postsState.map(item => <Post likeCount={item.likeCount} message={item.message} />)}
            </div>
        </div>
    )
}

export default MyPosts;