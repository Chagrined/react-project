import avatarPost from '../../../../../images/avatarPost.png';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src={avatarPost} alt="post avatar" className={style.avatarPost}/>
            <div>
                <span>{props.message}</span>
            </div>
            <button>LIKE {props.likeCount}</button>
        </div>

    )
}

export default Post;