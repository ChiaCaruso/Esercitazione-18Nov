const chicken = document.querySelector(".chick");
const btns = [...document.querySelectorAll(".btn")];



const addClass = (el) =>{
    const id = el.id;
    console.log(id)
    switch (id) {
    case 'up':
        chicken.classList.toggle("up");
        break;
}
}

    
    btns.forEach( (btn) => {    
        btn.addEventListener("click", addClass(btn));          
    }); 
        
 console.log(btns);
    

