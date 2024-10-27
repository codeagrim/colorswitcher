const boxes = document.querySelectorAll('.boxes');
const body = document.querySelector('body');
const clear = document.querySelector('.btn button')
const randomcolor = document.querySelector('#randbtn')


boxes.forEach((buttons)=>
{
console.log(buttons)
buttons.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target.id);

    if(e.target.id === 'red')
    {
        body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id== 'blue'){
        body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id== 'green'){
        body.style.backgroundColor = e.target.id;
    }

});
});

clear.addEventListener('click', (clk)=>{
    if(clk)
    {
        body.style.backgroundColor = clk.target.id;
    }

});

// random color function 
function getRandomColor() {
    // Generate a random number between 0 and 16777215 (0xFFFFFF)
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // Pad with leading zeros if necessary to ensure it is 6 characters long
    return `#${randomColor.padStart(6, '0')}`;
    
}

console.log(getRandomColor()); // Example output: #3e2f1b



randomcolor.addEventListener('click', (r)=>{
console.log(r)

if(r)
    {
        console.log(r)

        body.style.backgroundColor = getRandomColor();
    }
})