import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.postData.map ( p => <Post message={p.message} countLikes={p.countLikes} /> );
    
    let newPostElement = React.createRef();

    let onAddPost = () => {
      props.addPost();
    }

    let onPostChange = () => { 
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    }

    return (
        <div className={styles.postsBlock}>
          <h3>My posts</h3>
            <div>
              <div>
                <textarea 
                  ref={newPostElement}
                  value={props.newPostText}
                  onChange={onPostChange} />
              </div>
              <div>
                <button onClick={ onAddPost }>Add post</button>
                <button>Remove</button>
              </div>
            </div>
            <div className={styles.posts}>
              { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;