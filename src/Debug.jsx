// import React, { useState, useEffect } from 'react';

// const BigComponent = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//    // fetchData();
//   }, []);

//   // const fetchData = async () => {
//   //   try {
//   //     const response = await fetch('https://api.example.com/data');
//   //     const result = await response.json();
//   //     setData(result);
//   //     setLoading(false);
//   //   } catch (error) {
//   //     console.error('Error fetching data:', error);
//   //     setLoading(false);
//   //   }
//   // };

//   const handleDelete = (id) => {
//     const updatedData = data.filter((item) => item.id !== id);
//     setData(updatedData);
//   };

//   const handleUpdate = (id, newText) => {
//     const updatedData = data.map((item) => {
//       if (item.id === id) {
//         return { ...item, text: newText };
//       }
//       return item;
//     });
//     setData(updatedData);
//   };

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>
//               {item.text}
//               <button onClick={() => handleDelete(item.id)}>Delete</button>
//               <button onClick={() => handleUpdate(item.id, 'Updated Text')}>Update</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default BigComponent;

import React, { useEffect, useState } from 'react';

const BigComponent = () => {
  const [data, setData] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
  ]);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleUpdate = (id, newText) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, text: newText };
      }
      return item;
    });
    setData(updatedData);
  };

  const handelClick = ()=>{

    const dommydata = [{name:"sanat",id:1},{name:"gudu",id:2}]
    setData(dommydata)
  }
  useEffect(()=>{
    console.log(data)
  },[data])

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleUpdate(item.id, 'Updated Text')}>Update</button>
          </li>
        ))}
      </ul>

      <button
      onClick={handelClick}
      >CHANGE DATA</button>
    </div>
  );
};

export default BigComponent;
