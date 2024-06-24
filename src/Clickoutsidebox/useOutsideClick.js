// import { useEffect } from 'react';

// const useOutsideClick = (ref, callback) => {
//   useEffect(() => {
//     const handleClickOutside = (event) => {
    
//       console.log(event , ref.current)
//       if (ref.current && !ref.current.contains(event.target)) {
//         callback();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [ref, callback]);
// };

// export default useOutsideClick;


import React, { useEffect } from 'react';

 const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      // DO NOTHING if the element being clicked is the target element or their children
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback]);
};
export default useOutsideClick
