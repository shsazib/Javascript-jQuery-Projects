


var user_1_btn = document.querySelector('#user_1');
var user_2_btn = document.querySelector('#user_2');
var reset_btn = document.querySelector('#reset_btn');

var user_1_score = document.querySelector('#user_1_score');
var user_2_score = document.querySelector('#user_2_score');

var min_input_Fild = document.querySelector('#min_input_Fild');
var max_input_Fild = document.querySelector('#max_input_Fild');
var set_min_max_value = document.querySelector('#set_min_max_value');

var p1score = 1;
var p2score = 1;


const user_1_fun = (e) => {

    user_1_btn.addEventListener('click', () => {
        var p1scoreResult = p1score++;
        user_1_score.innerText = p1scoreResult;
        if (e <= p1scoreResult) {

            user_1_btn.setAttribute('disabled', 'disabled')

        }
    })
}

const user_2_fun = (e) => {
    user_2_btn.addEventListener('click', () => {
        p2scoreResult = p2score++;
        user_2_score.innerText = p2scoreResult;
        if (e <= p2scoreResult) {
            user_2_btn.setAttribute('disabled', 'disabled')
            
        }
        else{
            user_2_btn.removeAttribute ('disabled')
        }

    })
}


reset_btn.addEventListener('click', () => {
    user_1_score.innerText = '0';
    user_2_score.innerText = '0';
    min_input_Fild.value = '';
    max_input_Fild.value = '';
})

const min_max_Calculation = (max_input_Fild_value, min_input_Fild_value) => {
    return (
        Math.floor(Math.random() * (max_input_Fild_value - min_input_Fild_value + 1) + min_input_Fild_value)
    )
}


set_min_max_value.addEventListener('click', () => {
    var min_input_Fild_value = parseInt(min_input_Fild.value);
    var max_input_Fild_value = parseInt(max_input_Fild.value);
    // if (min_input_Fild_value, max_input_Fild_value) {
    //     var masseg = document.querySelector('#masseg');
    //     masseg.innerText = "Your Value is Set"
    // }
    // else {
    //     var masseg = document.querySelector('#masseg');
    //     masseg.innerText = "Your Value Not Set"

    // }
    var min_max_Calculation_result = min_max_Calculation(max_input_Fild_value, min_input_Fild_value);
    console.log(min_max_Calculation_result);

    user_1_fun(min_max_Calculation_result);
    user_2_fun(min_max_Calculation_result);
});



