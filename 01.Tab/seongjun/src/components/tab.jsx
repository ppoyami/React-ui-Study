import React from 'react';

const Tab = ({ contents, setCurContentIdx }) => {
  return (
    <>
      <div className="button_container">
        {contents.map((con, idx) => (
          <button
            key={idx}
            className="tab_button"
            onClick={() => {
              setCurContentIdx(idx);
            }}
          >
            {con.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default Tab;
