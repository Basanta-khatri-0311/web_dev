import React, { forwardRef, useRef } from "react";

// const MyButton = ({ ref }) => {
//   return <input ref={ref} placeholder="search....." />;
// };

const MyButton = forwardRef((prop, ref) => {
  return <input ref={ref} placeholder="search....." />;
});

const LearnuseRef = () => {
  const inputRef = useRef();

  const onFocusClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <MyButton ref={inputRef} />
      <button onClick={onFocusClick}>Focus On Input</button>
    </div>
  );
};

export default LearnuseRef;
