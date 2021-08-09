import React from 'react';

const Content = ({ content }) => {
  return (
    <>
      <h3 className="content_title">{content.title}</h3>
      <p className="content">{content.content}</p>
    </>
  );
};

export default Content;
