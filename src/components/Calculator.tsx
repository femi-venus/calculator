import _ from "lodash";
import "./calculator.css";
import { useCalculatorContext } from "./CalculatorProvider";

interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
}

export default function Calculator() {
  const {
    input,
    output,
    handleClick,
    handleAction,
    handleClear,
    handleRemove,
  } = useCalculatorContext();

  const operators = ["+", "-", "X", "/", "%"];
  const components = _.split(input, " ");
  const operator_arr = _.filter(components, (component) =>
    _.includes(operators, component)
  );
  const operator = operator_arr[0];

  return (
    <div className="cal-body">
      <div>
        <input type="text" className="cal-display" value={input} readOnly />
        <input type="text" className="cal-display" value={output} readOnly />
      </div>
      <div className="cal-buttons">
        <div className="cal-button-row">
          <Button value="AC" onClick={handleClear} />
          <Button value=" % " onClick={handleClick} />
          <Button value=" x " onClick={handleRemove} />
          <Button value=" / " onClick={handleClick} />
        </div>
        <div className="cal-button-row">
          <Button value="7" onClick={handleClick} />
          <Button value="8" onClick={handleClick} />
          <Button value="9" onClick={handleClick} />
          <Button value=" X " onClick={handleClick} />
        </div>
        <div className="cal-button-row">
          <Button value="4" onClick={handleClick} />
          <Button value="5" onClick={handleClick} />
          <Button value="6" onClick={handleClick} />
          <Button value=" - " onClick={handleClick} />
        </div>
        <div className="cal-button-row">
          <Button value="1" onClick={handleClick} />
          <Button value="2" onClick={handleClick} />
          <Button value="3" onClick={handleClick} />
          <Button value=" + " onClick={handleClick} />
        </div>
        <div className="cal-button-row">
          <Button value="00" onClick={handleClick} />
          <Button value="0" onClick={handleClick} />
          <Button value="." onClick={handleClick} />

          <Button value=" = " onClick={() => handleAction(operator)} />
        </div>
      </div>
    </div>
  );
}

function Button(props: ButtonProps) {
  const { value, onClick } = props;
  return (
    <button className="cal-button" value={value} onClick={() => onClick(value)}>
      {value}
    </button>
  );
}
