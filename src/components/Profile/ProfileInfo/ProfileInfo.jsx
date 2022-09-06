import contentImg from '../../../images/content-img.jpg';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={style.profileInfo}>
            <div>
                <img className={style.bgImage} alt='profile-img' src={contentImg} />
            </div>
            <div>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo;