import dollarIcon from "../../public/assets/images/icon-dollar.svg";
import personIcon from "../../public/assets/images/icon-person.svg";

import Button from "./common/Button";

import InputField from "./common/InputField";
import InputContainer from "./common/InputContainer";

import { useState, useEffect } from "react";
const tipValues = [5, 10, 15, 25, 50];

function Tip() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [tipCustom, setTipCustom] = useState("");
  const [numPerson, setNumPerson] = useState("");

  const tipHandler = (e) => {
    const value = Number(e.target.value);
    if (!tipCustom) setTip(value);
  };

  const calculateTip = () => {
    let tipValue = 0;
    if (tip) tipValue = tip;
    else tipValue = tipCustom;

    const tipAmount = (bill * tipValue) / 100;
    const tipPerPerson = tipAmount / numPerson;
    const totalPerPerson = bill / numPerson + tipPerPerson;
    return [tipPerPerson, totalPerPerson];
  };

  const toString = (number) => {
    return number.toLocaleString("en-US", { maximumFractionDigits: 2 });
  };
  useEffect(() => {
    if (bill && (tip || tipCustom) && numPerson) {
      if (bill != 0 && numPerson != 0) {
        const [tipPerPerson, totalPerPerson] = calculateTip();
        setResults([toString(tipPerPerson), toString(totalPerPerson)]);
      }
    }
  }, [bill, tip, tipCustom, numPerson]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-white max-w-170 rounded-t-3xl rounded-b-0 sm:rounded-3xl p-7">
      <div className="flex flex-col gap-8">
        <InputContainer label="Bill" value={bill} icon={dollarIcon}>
          <InputField
            type="number"
            name="bill"
            value={bill}
            placeholder="0"
            inputHandler={(e) => setBill(e.target.value)}
          />
        </InputContainer>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <p className="text-neutral-light font-bold tracking-normal col-span-2 sm:col-span-3 text-sm block">
            Select Tip %
          </p>
          {tipValues.map((value) => (
            <Button
              style={` text-white py-2 sm:py-1 text-sm sm:text-[1.1rem]
                ${value == tip ? "bg-neutral-basic" : "bg-neutral-darker"}`}
              value={value}
              text={`${value}%`}
              clickHandler={tipHandler}
            />
          ))}
          <div
            className={`bg-neutral-input pr-2 flex items-center rounded-xs has-[input:focus-within]:outline-[1.5px] has-[input:focus-within]:outline-neutral-basic hover:outline-[1.5px] hover:outline-neutral-basic`}
          >
            <InputField
              type="number"
              name="tip"
              value={tipCustom}
              placeholder="Custom"
              inputHandler={(e) => {
                if (!tip) setTipCustom(e.target.value);
              }}
              style="focus:outline-none placeholder:text-center"
            />
          </div>
        </div>
        <InputContainer
          label="Number of people"
          value={numPerson}
          icon={personIcon}
        >
          <InputField
            type="number"
            name="numPerson"
            value={numPerson}
            placeholder="0"
            inputHandler={(e) => setNumPerson(e.target.value)}
          />
        </InputContainer>
      </div>
    </div>
  );
}

export default Tip;
