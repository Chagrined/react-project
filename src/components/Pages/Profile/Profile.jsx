import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <ProfileInfo />
            <MyPosts profilePage={props.state.profilePage} addPost={props.addPost} changePost={props.changePost}/>
        </div>
    )
}

export default Profile;