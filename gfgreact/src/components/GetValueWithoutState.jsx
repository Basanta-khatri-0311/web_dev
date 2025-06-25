// import React, { useRef } from "react";

// const GetValueWithoutState = () => {
//   const inputRef = useRef("");
//   const onGetValueClicked = () => {
//     console.log(inputRef.current.value);
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={onGetValueClicked}>Get Value</button>
//     </div>
//   );
// };

// export default GetValueWithoutState;

// import React, { useRef } from "react";

// const GetValueWithoutState = () => {
//   const countRef = useRef(0);

//   const onClickedButton = () => {
//     countRef.current = countRef.current + 1;
//     console.log(countRef.current)
//   };
//   return (
//     <>
//       <div>
//         <button onClick={onClickedButton} >
//           Click Me
//         </button>
//       </div>
//       <div>
//         <p>Tracked click is: {}</p>
//       </div>
//     </>
//   );
// };

// export default GetValueWithoutState;

import React, { useRef } from "react";

const GetValueWithoutState = () => {
  const timerRef = useRef(0);
  const intervalIdRef = useRef(null);

  const onStartClick = () => {
    if (intervalIdRef.current !== null) return;
    intervalIdRef.current = setInterval(() => {
      timerRef.current += 1;
      console.log(timerRef.current);
    }, 1000);
  };

  const onEndClick = () => {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  };

  const onResetClick = () => {
    clearInterval(intervalIdRef.current);
    timerRef.current = 0;
  };

  return (
    <div>
      <button onClick={onStartClick}>start</button>
      <button onClick={onEndClick}>stop</button>
      <button onClick={onResetClick}>reset</button>
    </div>
  );
};

export default GetValueWithoutState;
