(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let equal = document.querySelector(".btn_equal");
  let clear = document.querySelector(".btn_clear");
let result = false;
let history = [];

const renderHistory = () => {
    let html = '';
    history.forEach(item => {
        html += `<div>${item}</div>`;
    })
    document.querySelector('.history').innerHTML = html;
}
renderHistory();
  let my_event = (state) => {
    let customEvent = new Event("customEvent");
    customEvent.state = state;
    window.dispatchEvent(customEvent);
  };

  function removeNumericOperatorsFromStart(str) {
    return str.replace(/^[\+\-\/\*]/, '');
  }
  function removeNumericOperatorsFromEnd(str) {
    return str.replace(/[\+\-\/\*]$/, '');
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      if (result) {
        if ((value=='/' || value=='-' || value=='*' || value=='+')) {
            // screen.value = '';
            result = false;
        } else {
            screen.value = '';
            result = false;
        }
      }
      screen.value += String(value);
      my_event(screen.value);
    });
  });
  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "Please Enter";
    } else {
      let answer = eval(removeNumericOperatorsFromEnd(screen.value));
      let exp = `${removeNumericOperatorsFromEnd(screen.value)}=${Number(answer).toFixed(3)}`;
      history.push(exp);
      renderHistory();
      screen.value = answer;
      result=true;
    }
  });

  window.addEventListener("customEvent", function (e) {
    let formatedString = removeNumericOperatorsFromStart(String(e.state));
    screen.value = formatedString;
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
