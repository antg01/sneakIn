import React from 'react';


const ContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    width: "1000px",
    height: "100px"
  }
  const rightside= {
      background :'red',
      display: 'flex',
      justifyContent: 'flex-end',
      width: "3000px",
      height: "100px",
  }
  const leftside= {
    display: "flex-end",
    height: "250px",
  }


function FutureDrops(){
    return(
        <div style= {ContainerStyle}>
            <div style = {leftside}>
           <p> Bye Bye </p></div>
            <div style= {rightside}>
                <p> hello world </p>
            </div>

        </div>
    )
}

export default FutureDrops;
