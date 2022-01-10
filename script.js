let main_tag = document.getElementsByTagName('main')[0];
let clear_divs = document.getElementById("clear_divs");
let generate_divs = document.getElementById("generate_divs");

initialize();

function initialize() {
    let starting_value = parseInt(document.getElementById("starting_value").value);
    let ending_value = parseInt(document.getElementById("ending_value").value);
    let fizz_value = parseInt(document.getElementById("fizz_value").value);
    let buzz_value = parseInt(document.getElementById("buzz_value").value);

    for (let i = starting_value; i <= ending_value; i++) {
        let new_element = document.createElement('div');
        new_element.setAttribute("id", "myid" + i);
        if((i % fizz_value === 0) && (i % buzz_value === 0)) {
            new_element.setAttribute("class", "both");
            new_element.innerHTML = "FizzBuzz";
        } else if ((i % fizz_value === 0) && (i % buzz_value !== 0)){
            new_element.setAttribute("class", "only3");
            new_element.innerHTML = "Fizz";
        } else if ((i % buzz_value === 0) && (i % fizz_value !== 0)){
            new_element.setAttribute("class", "only5");
            new_element.innerHTML = "Buzz";
        } else {
            new_element.setAttribute("class", "none");
            new_element.innerHTML = ""+i;
        }
        main_tag.appendChild(new_element);
    }
}

clear_divs.addEventListener("click", function(){
    while (main_tag.firstChild) {
        main_tag.removeChild(main_tag.firstChild);
    }
});

generate_divs.addEventListener("click", initialize);