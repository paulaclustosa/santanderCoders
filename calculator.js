const createCalculator = () => {
  let history = [];

  const operation = (x, operator, y) => {
    let result;

    if (!["+", "-", "*", "/"].includes(operator)) {
      return "Operation not supported. Invalid operator.";
    };

    switch (operator) {
      case "+":
        result = x + y;
        break;
      case "-":
        result = x - y;
        break;
      case "*":
        result = x * y;
        break;
      case "/":
        result = x / y;
        break;
      default:
        break;
    };

    history = [
      ...history,
      {
        operation: `${x}${operator}${y}`,
        result
      }
    ];

    return result;
  };

  const list = () => history;

  const reset = () => {
    history = [];
    return "Your history was cleared!";
  };

  return {
    operation,
    list,
    reset
  };
};
