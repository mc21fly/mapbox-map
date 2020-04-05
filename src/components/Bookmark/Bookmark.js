import React from 'react';

import './Bookmark.scss';
import BookmarkStyles from './BookmarkStyles';

const Bookmark = ({
  children,
  title,
  background,
  full,
  clickHandler,
  left,
  right,
}) => {
  const styles = BookmarkStyles(background, full, left, right, title); // Styles that depends on props

  return (
    <div
      id={title}
      className="bookmark"
      style={styles.bookmark}
      onClick={clickHandler}>
      <div
        id={`${title}-title`}
        className="bookmark-title"
        style={styles.title}>
        {title}
      </div>

      <div className="bookmark-children" style={styles.children}>
        {children}
      </div>
    </div>
  );
};

export default Bookmark;
