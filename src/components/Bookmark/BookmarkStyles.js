const BookmarkStyles = (background, full, left, right, title) => {
  return {
    bookmark: {
      background: background,
      width: full ? '100%' : '120px',
      cursor: full ? 'default' : 'pointer',
    },
    title: {
      left: left ? 0 : '',
      right: right ? 0 : '',
      opacity: full ? 0 : 1,
      transform: full
        ? left // bookmark is active
          ? 'translateY(-50%) translateX(-100%)' // for left
          : right
          ? 'translateY(-50%) translateX(100%)' // for right
          : ''
        : left // bookmark is not active
        ? 'translateY(-50%) translateX(20%)' // for left
        : right
        ? 'translateY(-50%) translateX(-20%)' // for right
        : '',
      fontSize: full ? '0px' : '50px',
    },
    children: {
      opacity: full ? 1 : 0,
      visibility: full ? 'visible' : 'hidden',
      padding: title === 'map' ? 0 : 20,
    },
  };
};

export default BookmarkStyles;
