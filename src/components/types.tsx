export interface State {
  input: string;
  output: number;
  operator: string;
}

// export type Calculation =
//   | "NONE"
//   | "ADD"
//   | "SUBTRACT"
//   | "MULTIPLY"
//   | "DIVIDE"
//   | "PERCENT";

export type Action =
  | { type: "set-input"; payload: string }
  | { type: "set-output"; payload: string }
  | { type: "set-clear" }
  | { type: "set-remove"; payload: string }
  | { type: "set-operation"; payload: string };

export interface CalculatorContextProps {
  input: string;
  output: number;
  operator: string;
  handleClick: (value: string) => void;
  handleAction: (value: string) => void;
  handleClear: () => void;
  handleRemove: (input: string) => void;
}
