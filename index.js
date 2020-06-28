function displayImages(data){
    console.log(data);
    for (let i=0; i<data.message.length; i++){
        $('.image-collection').append(`<img src=${data.message[i]} alt="">`)
    }
    $('.image-collection').removeClass('hidden');
}

function clearBeforeNew(){
    $('.image-collection').html('');
}

function getInfo(userValue){
    fetch(`https://dog.ceo/api/breeds/image/random/${userValue}`)
        .then(response => response.json())
        .then(data => displayImages(data))
        .catch(error => alert(`Something went wrong. Here is what happened:${error}`));
}

function render(){
    let userValue = $('#user-choice').val();
    getInfo(userValue);
    clearBeforeNew();
}

function getUserInput(){
    $('form').submit( e => {
        e.preventDefault();
        render();
    });
}

$(function(){
    getUserInput();
});