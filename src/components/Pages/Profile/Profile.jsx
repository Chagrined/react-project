import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <ProfileInfo />
            <MyPostsContainer store={props.store} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;