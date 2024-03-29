import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialodsElements = state.dialogs.map ( d => <DialogItem name={d.name} key={d.id} id={d.id} /> ); 
    let messagesElements = state.messages.map ( m => <Message message={m.message} key={m.id} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
      props.sendMessage();
    }
    let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body);
    }

    return (
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          { dialodsElements }
        </div>
        <div className={styles.messages}>
          <div>{ messagesElements }</div>
          <div>
            <div><textarea value={newMessageBody} 
                           onChange={onNewMessageChange}
                           placeholder='Enter your message'></textarea></div>
            <div><button onClick={ onSendMessageClick }>Send</button></div>
          </div>
        </div>
      </div>
    )
}

export default Dialogs;