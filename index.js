let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML=='AC'){
            console.log(e.target.innerHTML+"is pressed");
            string = "";
            document.querySelector('input').value=string;
            console.log(e.target.innerHTML+"is pressed");
        }
        else if(e.target.innerHTML=='='){
            string = eval(string);
            document.querySelector('input').value = string;
            console.log(e.target.innerHTML+"is pressed");
        }
        else{
            string = string+e.target.innerHTML;
            document.querySelector('input').value = string;
            console.log(e.target.innerHTML+"is pressed");
        }
    })
})