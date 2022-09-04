import style from './Post.module.css';
import avatarPost from '../../../../images/avatarPost.png'

const Post = () => {
    return (
        <div className={style.item}>
            <img src={avatarPost} alt="post avatar" />
            <div>
                <span>I learn React!</span>
            </div>
            <button>LIKE</button>
        </div>

    )
}

export default Post;