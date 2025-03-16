    //CLEAR RESPONSE

let clearResponse = (e) => {
    let answerRadios = e.parentNode.parentNode.querySelectorAll('.answer-radios');
    answerRadios.forEach((radio) => {
        radio.checked = false;
    })
}