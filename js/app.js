const chicken = document.querySelector(".chick");
const btns = [...document.querySelectorAll(".btn")];

btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        const id = btn.id;

        let a = 0;
        let b = 0;

        switch (id) {
            case 'up':
                chicken.style.top = "150px"; 
                chicken.style.backgroundPosition = "right -130px";
                break;
            case 'dx':
                chicken.style.right = "150px";
                chicken.style.backgroundPosition = "right -390px";
                break;
            case 'down':
                chicken.style.bottom = "-150px"; 
                chicken.style.backgroundPosition = "right 0px";
                break;
            case 'sx':
                chicken.style.left = "-150px";
                chicken.style.backgroundPosition = "right -260px";
                break;
        }



    })
})
    

