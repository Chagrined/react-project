import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <ProfileInfo />
            <MyPosts profilePage={props.state.profileReducer} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;