function addNumber(){
    let number = $('#number').html();
    if(number == '100'){
        $('#number').html(1);    
    }else{
        number = parseInt(number);
        number += 1;
        $('#number').html(number);
    }
}

function nextAlphabet(){
    let letter = $('#alphabet').html();
    if(letter == 'Z'){
        letter = 'A';
        $('#alphabet').html(letter);
    }else{
        let asciiLetter = letter.charCodeAt(0);
        asciiLetter += 1;
        let newLetter = String.fromCharCode(asciiLetter);
        $('#alphabet').html(newLetter);
    }
}

function getAge(){
    $('.ageDiv').hide();

    let inputDate = new Date($('#dateInput').val())
    let currentDate = new Date();

    let age = currentDate.getFullYear() - inputDate.getFullYear();
    let result = `${age} year(s) old`
    
    $('#yourAge').show();
    $('#yourAge').html(result);
}

function returnBack(){
    $('#btnBack').hide();
    $('#btnAlpha').show();
    $('#btnNum').show();
    $('#btnAge').show();
    $('#number').hide();
    $('#alphabet').hide();
    $('.ageDiv').hide();
    $('#text').show();
    $('#yourAge').hide();
}

function showNumber(){
    $('#btnBack').show();
    $('#btnAlpha').hide();
    $('#btnNum').hide();
    $('#btnAge').hide();
    $('#number').show();
    $('#text').hide();
}

function showAge(){
    $('#btnBack').show();
    $('#btnAlpha').hide();
    $('#btnNum').hide();
    $('#btnAge').hide();
    $('.ageDiv').show();
    $('#text').hide();
    $('#yourAge').hide();
}

function showAlphabet(){
    $('#btnBack').show();
    $('#btnNum').hide();
    $('#btnAlpha').hide();
    $('#btnAge').hide();
    $('#alphabet').show();
    $('#text').hide();
}