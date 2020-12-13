import React from "react";
import PropTypes from "prop-types";
import { Close, RadioButtonUnchecked } from "@material-ui/icons";

const btnStyle = {
  width: "100%",
  height: "100%",
  background: "none",
  border: "none",
  fontSize: "50px",
  verticalAlign: "bottom",
};

const spanStyles = (row, col) => ({
  border: "6px solid #222",
  width: "70px",
  height: "70px",
  display: "inline-block",
  borderTop: row === 0 ? "transparent" : "solid",
  borderBottom: row === 2 ? "transparent" : "solid",
  borderLeft: col === 0 ? "transparent" : "solid",
  borderRight: col === 2 ? "transparent" : "solid",
});

function BoardBtn({ mark, row, col, disabled, onClick }) {
  let icon;

  const selectPosition = () => {
    const position = 3 * row + col;

    onClick(position);
  };

  if (mark === "x") {
    icon = <Close style={btnStyle} color="primary" />;
  }
  
  if (mark === "o") {
    icon = <RadioButtonUnchecked style={btnStyle} color="secondary" />;
  }

  return (
    <span style={spanStyles(row, col)}>
      {icon || (
        <button style={btnStyle} disabled={disabled} onClick={selectPosition} />
      )}
    </span>
  );
}

BoardBtn.propTypes = {
  mark: PropTypes.string,
  row: PropTypes.number,
  col: PropTypes.number,
  disabled: PropTypes.bool,
};

export default BoardBtn;
