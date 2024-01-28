const Button = (enableStopPropagation) => {
  console.log(enableStopPropagation);

  if (enableStopPropagation === true) {
    return <button>True</button>;
  }
  return <button>False</button>;
};

export default Button;
