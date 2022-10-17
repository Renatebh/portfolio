import React from "react";

const PrimaryButton = (props) => {
  console.log(props);

  const { disableBtn, text, onclick } = props;

  return (
    <div>
      <button onClick={props.onclick} disabled={props.disableBtn}>
        {props.text}
        {props.children}
      </button>
    </div>
  );
};

export default PrimaryButton;
