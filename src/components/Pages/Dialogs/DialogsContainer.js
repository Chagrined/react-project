import { addMessageActionCreator, changeMessageActionCreator } from '../../../redux/messagesReducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {

    return {
        dialogsState: state.dialogsPage.dialogsState,
        messagesState: state.dialogsPage.messagesState,
        messagesText: state.dialogsPage.messagesText

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ChangeMessage: (messageText) => {

            dispatch(changeMessageActionCreator(messageText))
        },
        AddMessageText: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;