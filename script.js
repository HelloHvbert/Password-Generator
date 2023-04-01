const slider = document.querySelector('#slider');


//Get range value
slider.addEventListener("input", ()=>
{
    const sliderValue = document.getElementById('sliderValue');
    sliderValue.innerHTML = document.getElementById('slider').value; 
}
);

const display = document.querySelector('#display');


//Copy password to clipboard
display.addEventListener('click', ()=>
{
    navigator.clipboard.writeText(display.innerHTML);
});

const btn = document.querySelector('button');

const numbers = '1234567890';
const smallLetters = 'qwertyuiopasdfghjklzxcvbnm';
const capitalLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM';


btn.addEventListener('click',()=>
{
    let checks = document.querySelectorAll('.check');
    if (checks[0].checked === false && checks[1].checked === false && checks[2].checked === false)
    {
        alert('You need to select at least 1 option.');
        return;
    }
    else
    {
        let list = [smallLetters, capitalLetters, numbers];

        let selected = []
        for (let i = 0; i < checks.length; i++)        
            if (checks[i].checked === true)
                selected.push(list[i]);         
        
        const n = slider.value;
        let password = '';
        let rand, rand1, str;

        for (let i = 0; i < n; i++)
        {
            //Get random list
            rand = Math.floor(Math.random() * (selected.length));
            //Get random char from list above
            password += selected[rand][ Math.floor( Math.random() * ( selected[rand].length) ) ];

            //Add chosen char to password
            password += [rand1];       
        }
        display.innerHTML = password;
    }
});