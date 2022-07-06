const billValue = document.querySelector("#bill");
const numberPerson = document.querySelector("#person");
const tipAmt = document.querySelector("#totalAmt");
const perPerson = document.querySelector("#perPerson");
const buttons = document.querySelectorAll(".btn");
const reset = document.querySelector("#reset");
const customTip = document.querySelector("#custom");

//  CLICKING SELECT THE TIP
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tipValue = e.target.innerText;
    tipValue = tipValue.substr(0, tipValue.length - 1);

    if (billValue.value === "") return;
    if (numberPerson.value === "") numberPerson.value = 1;

    calculateTip(
      parseFloat(billValue.value),
      parseInt(numberPerson.value),
      parseInt(tipValue)
    );
  });
});

// CUSTOM INPUT PART FOR SELECTING TIP
customTip.addEventListener("blur", (e) => {
  if (billValue.value == "") {
    alert("Enter bill Amount first");
    resetEverything();
    return;
  }
  if (numberPerson.value === "") numberPerson.value = 1;

  calculateTip(
    parseFloat(billValue.value),
    parseInt(numberPerson.value),
    parseFloat(e.target.value)
  );
});

// CALCULATE TIP
function calculateTip(billValue, numberPerson, tipValue) {
  let tipAmount = (billValue * (tipValue / 100)) / numberPerson;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(1);
  // console.log(" this is tip" , tip);

  let total = (tipAmount * numberPerson + billValue) / numberPerson;
  total = total.toFixed(1);
  // console.log("this is total" , total);

  tipAmt.innerText = `$${tip}`;
  perPerson.innerText = `$${total}`;
}

//  RESET FUCNTIONALITY HERE IT RESETS EVERYTHING
reset.addEventListener("click", resetEverything);
function resetEverything() {
  billValue.value = "";
  numberPerson.value = "";
  tipAmt.innerText = "0.00";
  perPerson.innerText = "0.00";
  customTip.value = ""
}


