import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea />
                <div><button>add post</button></div>
            </div>
            <div>
                <Post likeCount={3} message='I learn React' />
                <Post likeCount={7} message='Next i will learn Node.js' />
                <Post likeCount={2} message='Node.js it is platform for javascript'/>
                <Post likeCount={15} message='I like codding'/>
            </div>
        </div>
    )
}

export default MyPosts;