"use client";
const Index = ({ title, containerStyles, handleClick }) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles} `}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title} </span>
    </button>
  );
};
export default Index;
