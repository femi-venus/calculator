import produce from "immer";
import { State, Action } from "./types";
import _ from "lodash";

export const reducer = produce((state: State, action: Action) => {
  const components = _.split(state.input, " ");
  const comp = _.map(components, _.parseInt);
  const elements = _.filter(comp, (comp) => !isNaN(comp));

  switch (action.type) {
    case "set-input":
      const inputs = _.concat(state.input, action.payload);
      state.input = _.join(inputs, "");
      break;
    case "set-clear":
      state.input = "";
      state.output = 0;
      break;

    case "set-output":
      switch (action.payload) {
        case "+":
          const add = _.sum(elements);
          state.output = add;
          console.log(state.output);
          break;
        case "-":
          const subtract = _.reduce(
            elements.slice(1),
            (acc, num) => _.subtract(acc, num),
            elements[0]
          );
          state.output = subtract;
          console.log(state.output);
          break;
        case "X":
          const multiple = _.reduce(
            elements,
            (acc, num) => _.multiply(acc, num),
            1
          );
          state.output = multiple;
          console.log(state.output);
          break;
        case "/":
          const division = _.reduce(
            elements.slice(1),
            (acc, num) => _.divide(acc, num),
            elements[0]
          );
          state.output = division;
          console.log(state.output);
          break;
        case "%":
          const percent = _.divide(elements[0], 100);
          state.output = percent;
          console.log(state.output);
          break;
        default:
          break;
      }
      break;
    case "set-remove":
      const new_input = _.slice(state.input, 0, -1);
      state.input = _.join(new_input, "");
      console.log(state.input);
      break;
    default:
      break;
  }
});

export const initialState: State = {
  input: "",
  output: 0,
  operator: "NONE",
};
