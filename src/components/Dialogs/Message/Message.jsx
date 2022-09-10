import style from '../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={!(props.index % 2) ? style.messageItem : style.messageItemRight}>
            <img src={props.img} alt="avatar" />
            {props.message}
        </div>)
}

export default Message;