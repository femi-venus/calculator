import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { reducer, initialState } from "./CalculatorReducer";
import { CalculatorContextProps } from "./types";
import _ from "lodash";

const CalculatorContext = createContext<CalculatorContextProps | undefined>(
  undefined
);

export default function CalculatorProvider(props: PropsWithChildren<{}>) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (value: string) => {
    dispatch({ type: "set-input", payload: value });
  };

  const handleAction = (actionType: string) => {
    dispatch({ type: "set-output", payload: actionType });
  };

  const handleClear = () => {
    dispatch({ type: "set-clear" });
  };

  const handleRemove = (input: string) => {
    dispatch({ type: "set-remove", payload: input });
  };

  const memoizedValue = useMemo(
    () => ({
      input: state.input,
      output: state.output,
      operator: state.operator,
      handleClick,
      handleAction,
      handleClear,
      handleRemove,
    }),
    [state, dispatch]
  );

  return (
    <CalculatorContext.Provider value={memoizedValue}>
      {children}
    </CalculatorContext.Provider>
  );
}

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error(
      "useCalculatorContext must be used within a CalculatorProvider"
    );
  }
  return context;
};
