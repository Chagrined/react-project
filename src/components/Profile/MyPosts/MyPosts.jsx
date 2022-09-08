import style from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea />
                <div><button>add post</button></div>
            </div>
            <div>
                {props.posts.map(item => <Post likeCount={item.likeCount} message={item.message} />)}
            </div>
        </div>
    )
}

export default MyPosts;