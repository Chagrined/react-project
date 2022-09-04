import contentImg from '../../images/content-img.jpg';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.profile}>
            <div>
                <img alt='profile-img' src={contentImg} />
            </div>
            <div>
                ava + desc
            </div>
           <MyPosts />
        </div>
    )
}

export default Profile;