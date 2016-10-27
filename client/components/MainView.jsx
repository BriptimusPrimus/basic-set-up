import React from 'react';

const MainView = (props) => {
  let data = JSON.stringify(props.dummyData);
  return(
    <div id="main-view">
      <h1>Hello World!</h1>
      <p>{data}</p>
    </div>
  );
}

export default MainView;