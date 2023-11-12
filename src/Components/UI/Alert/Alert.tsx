import React from 'react';

interface Props extends React.PropsWithChildren{
  show?: boolean;
  type: string;
  onDismiss?: React.MouseEventHandler;
}
const Alert:React.FC <Props> = ({show=true, type, onDismiss, children}) => {
  return ( <>
    {show ?
      <div className={type} style={{display: show ? 'block': 'none'}}>
        {onDismiss === undefined? null : <button onClick={onDismiss}>X</button>}
        {children}
      </div>
      : null}
  </>
  );
};

export default Alert;