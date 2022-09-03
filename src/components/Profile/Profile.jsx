import contentImg from '../../images/content-img.jpg';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.profile}>
            <div>
            <img src={contentImg} />
            </div>
            <div>
            ava + desc
            </div>
            <div>
            My posts
                <div>
                    New post
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;