import React from 'react';

interface IOwnProps {
};

const DemoComponent:React.FC<IOwnProps> = ({

}) => {
  return (
    <div style={{backgroundColor: 'red'}}>데모 컴포넌트</div>
  )
}

export default DemoComponent;