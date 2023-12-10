export const Button = (props) => {
  return <button onClick={props.handleButtonClick}>{props.sign}</button>;
};
