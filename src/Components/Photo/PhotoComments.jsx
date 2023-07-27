import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComents.module.css';

const PhotoComments = ({ id, comments, single }) => {
  const { login } = React.useContext(UserContext);
  const commentsSection = React.useRef(null);
  const [comment, setComment] = React.useState(() => comments);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comment]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ''}`}
      >
        {comment.map((item) => (
          <li key={item.comment_ID}>
            <b>
              {item.comment_author}: <span>{item.comment_content}</span>
            </b>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm id={id} setComments={setComment} single={single} />
      )}
    </>
  );
};

export default PhotoComments;
