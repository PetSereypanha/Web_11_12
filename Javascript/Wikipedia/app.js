const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const form = document.querySelector('.form');
// console.log(form);
const formInput = document.querySelector('.form-input');
// console.log(formInput);
const result = document.querySelector('.results');
// console.log(result);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = formInput.value;
    if (!value){
        result.innerHTML =
            '<div class="error"> please enter valid search term</div>';
        return;
    }

})




const renderResults = (list) => {

}