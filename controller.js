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

function showNumber(){
    $('#btnAlpha').hide();
    $('#btnNum').hide();
    $('#number').show();
    $('#text').hide();
}
function showAlphabet(){
    $('#btnNum').hide();
    $('#btnAlpha').hide();
    $('#alphabet').show();
    $('#text').hide();
}