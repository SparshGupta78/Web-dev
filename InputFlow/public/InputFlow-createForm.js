let randomValue = '';

    // ADDING CONTENT

let contentRoom = document.querySelector('.content-room');

let addContent = () => {
    randomValue = Math.floor(Math.random() * 100000000);
    let contentData = `<div class="content-box"><div class="question-container"><input type="text" name="q-${randomValue}" class="question q-${randomValue}" placeholder="Enter Question"/></div><div class="answers-container"><div class="answer-box"><input type="radio" name="a-${randomValue}" class="answer-radios a-${randomValue}" disabled><input type="text" class="answers" placeholder="Option"><span onclick="this.parentNode.remove()"><ion-icon name="close-circle-outline"></ion-icon></span></div><div class="answer-box"><input type="radio" name="a-${randomValue}" class="answer-radios a-${randomValue}" disabled><input type="text" class="answers" placeholder="Option"><span onclick="this.parentNode.remove()"><ion-icon name="close-circle-outline"></ion-icon></span></div></div><div class="options-container"><span class="btn" onclick="addAnswer(this)"><ion-icon name="add-circle-outline"></ion-icon>Add</span><span class="btn" onclick="deleteContent(this)"><ion-icon name="trash-outline"></ion-icon>Delete</span></div></div>`;
    contentRoom.innerHTML += contentData;
};

    //DELETE CONTENT

let deleteContent = (e) => {
    e.parentNode.parentNode.remove();
}

    // ADDING ANSWERS IN CONTENT

let answersContainer = document.querySelector('.answers-container');

let addAnswer = (e) => {
    let content = e.parentNode.parentNode;
    let id = content.querySelector('.question-container input').classList[1];
    let answersContainerData = `<div class="answer-box"><input type="radio" name="a-${id}" class="answer-radios" disabled><input type="text" class="answers" placeholder="Option"><span onclick="this.parentNode.remove()"><ion-icon name="close-circle-outline"></ion-icon></span></div>`;
    let answersContainer = content.querySelector('.answers-container');
    answersContainer.innerHTML += answersContainerData;
}

    //CLEAR RESPONSE

let clearResponse = (e) => {
    let answerRadios = e.parentNode.parentNode.querySelectorAll('.answer-radios');
    answerRadios.forEach((radio) => {
        radio.checked = false;
    })
}

    //CREATE

let createForm = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    
    let contentBoxs = document.querySelectorAll('.content-box');

    contentBoxs.forEach((contentBox) => {
        let questionValue = contentBox.querySelector('.question').value;
        if (questionValue == ''){
            contentBox.remove();
        }
    });

    if(document.querySelector('.content-room').children.length >= 2){

        formReview = document.querySelector('.form-review');
        formReview.innerHTML += `Reviewing the form`;

        let formTitleContainer = document.querySelector('.form-title-container');
        let formTitle = document.querySelector('.form-title').value;
    
        if (formTitle != ''){
            formTitleContainer.innerHTML = `<p>${formTitle}</p>`;
        } else {
            formTitleContainer.innerHTML = `<p>Untitled Form</p>`;
        }

        contentBoxs.forEach((contentBox) => {

            let id = contentBox.querySelector('.question-container input').classList[1].slice(2);
            
            let questionContainer = contentBox.querySelector('.question-container');
            let questionValue = contentBox.querySelector('.question').value;
    
            questionContainer.innerHTML = `<p class="q-${id}">${questionValue}</p>`;

            let answersValue = [];
            let answers = contentBox.querySelectorAll('.answers');

            for(let answer of answers){
                if(answer.value != ''){
                    answersValue.push(answer.value);
                }
            }

            let answersContainer = contentBox.querySelector('.answers-container');
            answersContainer.innerHTML = '';
            answersValue.forEach((e) => {
                answersContainer.innerHTML += `<div class="answer-box"><input type="radio" name="${questionValue}" class="answer-radios a-${id}" value="${e}"><p>${e}</p></div>`;
            });

            contentBox.querySelector('.options-container').innerHTML = `<span class="btn" onclick="clearResponse(this)">Clear response</span>`;    
                     
        });

        document.querySelector('.editing-options-container').remove();

        let hero = document.querySelector('.hero');
        hero.children[1].remove();
    
        let contentRoomData = hero.querySelector('.content-room').innerHTML;
        hero.innerHTML += `<form action='/publish' method='post' class='hiddenForm'><input type='hidden' name='formHtmlData' value='${contentRoomData}' style='display: none;'><input type='submit' value='Publish' class='btn publish-btn'></form>`;
    
    } else {
        error = document.querySelector('.error');
        error.innerHTML = `Can't create empty form.`;
        setTimeout(() => {
            error.innerHTML = '';
        }, 5000);
        addContent();
    }
}

    //INVOKING THE FIRST CONTENT

addContent();