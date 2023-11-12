// import React from 'react';
//
// interface Props extends React.PropsWithChildren{
//   show: boolean;
//   title: string;
//   onClose: React.MouseEventHandler;
// }
// const Alert:React.FC<Props> = ({onClose, children}) => {
//   const onInnerClick = (event: React.MouseEvent) => {
//     event.stopPropagation();
//   };
//
//   return (
//     <>
//       <div className="modal show" style={{display: show ? 'block': 'none'}}>
//       <div className="alert-container">
//         <p>alert</p>
//         <button onClick={onInnerClick}>x</button>
//       </div>
//
//     </>
//   );
// };
//
// export default Alert;