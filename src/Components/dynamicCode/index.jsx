// import React, { Fragment } from 'react';
// import DivComponent from '../../container/divComponent';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setSelectedResponse } from '../../redux/slice/responseSlice';
// import { map } from 'lodash';

// const DynamicCode = ({ jsonForm }) => {


//   const dispatch=useDispatch();
//   const navigate = useNavigate();

//   const handleClick = (data) => {
//     dispatch(setSelectedResponse({value:data}));
//     navigate("/editor");
//   };



//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
//   {map(jsonForm,(data, index) => (
//     <div onClick={() => handleClick(data)} key={data.key} style={{ width: '200px', height: '200px', border: '1px solid grey', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       {(() => {
//         switch (data.type) {
//           case 'div':
//             return (
//               <DivComponent data={data} />
//             );
//           case 'button':
//             return (
//               <button style={data.styles} >
//                 {data.label}
//               </button>
//             );
//           case 'p':
//             return (
//               <p style={data.styles}>
//                 {data.label}
//               </p>
//             );
//           case 'img':
//             return (
//               <img style={data.styles} src="https://picsum.photos/200" alt={data.label} />
//             );
//           case 'ul':
//             return (
//               <ul style={data.styles}>
//                 <li>List item 1</li>
//                 <li>List item 2</li>
//                 <li>List item 3</li>
//               </ul>
//             );
//           case 'ol':
//             return (
//               <ol style={data.styles}>
//                 <li>List item 1</li>
//                 <li>List item 2</li>
//                 <li>List item 3</li>
//               </ol>
//             );
//           case 'table':
//             return (
//               <table style={data.styles}>
//                 <thead>
//                   <tr>
//                     <th>Table header 1</th>
//                     <th>Table header 2</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>Table item 1</td>
//                     <td>Table item 2</td>
//                   </tr>
//                 </tbody>
//               </table>
//             );
//           default:
//             return <></>;
//         }
//       })()}
//     </div>
//   ))}
// </div>

  
//   )
// };

// export default DynamicCode;
