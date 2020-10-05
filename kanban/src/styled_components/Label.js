import React, { useState } from "react";
import styled from "styled-components";

function Label(props) {
  const offBgColor = "#6c757d";
  const [bgColor, setBgColor] = useState(offBgColor);

  const LabelStyle = styled.button`
    background-color: ${(props) => (props.bg ? props.bg : "#17a2b8")};
    &:hover {
      filter: brightness(125%);
    }
    border: none;
    margin: 0px 6px 6px 0px !important;
    padding: 5px 10px;
    max-width: 100%;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    font-weight: bold;
    border-radius: 5px;
    color: white;
    &:focus {
      outline: 0;
    }
  `;

  return (
    <React.Fragment>
      <LabelStyle
        bg={bgColor}
        type="button"
        onClick={() =>
          setBgColor(bgColor === offBgColor ? props.color : offBgColor)
        }
      >
        {props.title}
      </LabelStyle>
    </React.Fragment>
  );
}

export default Label;
