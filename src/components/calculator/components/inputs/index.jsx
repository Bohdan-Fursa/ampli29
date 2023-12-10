export const CountInput = ({
  onInputChange1,
  onInputChange2,
  value1,
  value2,
}) => {
  return (
    <>
      <input type="number" onChange={onInputChange1} value={value1} />
      <input type="number" onChange={onInputChange2} value={value2} />
    </>
  );
};
