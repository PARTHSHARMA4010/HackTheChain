    let alooParatha = document.querySelector("#Aloo paratha");
    let alooincrement = document.querySelector("#incrementButton2");
    let alooDecrement = document.querySelector("#decrementButton2");
    let CartBtn = document.querySelector(".viewcart");
    let counter = document.querySelectorAll(".counter");
    let counter2 = document.querySelectorAll("#counter2");
    let counter3 = document.querySelectorAll("#counter3");
    let counter4 = document.querySelectorAll("#counter4");
    let counter10 = document.querySelectorAll("#counter10");
    let counter11 = document.querySelectorAll("#counter11");
    let counter12 = document.querySelectorAll("#counter12");
    let counter13 = document.querySelectorAll("#counter13");



    let count = 0 ;

    let incbtn = document.querySelectorAll(".inc");
    let decbtn = document.querySelectorAll(".dec");
    // maggi access
    let maggi_increment = document.querySelector("#incrementButton3");
    let maggi_Decrement = document.querySelector("#decrementButton3");


    //chowmien access 
    let chowmien_increment = document.querySelector("#incrementButton4");
    let chowmien_Decrement = document.querySelector("#decrementButton4");


    //vegRoll access 
    let Veg_Roll_increment = document.querySelector("#incrementButton");
    let Veg_Roll_Decrement = document.querySelector("#decrementButton");

    //tea access 
    let Tea_increment = document.querySelector("#incrementButton10");
    let Tea_Decrement = document.querySelector("#decrementButton10");

    //coffee access
    let coffee_increment = document.querySelector("#incrementButton11");
    let coffee_Decrement = document.querySelector("#decrementButton11");

    //cone acess
    let cone_increment = document.querySelector("#incrementButton12");
    let cone_Decrement = document.querySelector("#decrementButton12");

    //cream-bar access
    let cream_bar_increment = document.querySelector("#incrementButton13");
    let cream_bar_Decrement = document.querySelector("#decrementButton13");



    //cart button show

    alooDecrement.addEventListener('click' , ()=> {
        CartBtn.style.display = "inline";
    });

    alooincrement.addEventListener("click" , () => {
        CartBtn.style.display = "inline";
    });

    //
    maggi_Decrement.addEventListener('click' , ()=> {
        CartBtn.style.display = "inline";
    });

    maggi_increment.addEventListener("click" , () => {
        CartBtn.style.display = "inline";
    });
    //
    chowmien_Decrement.addEventListener('click' , ()=> {
        CartBtn.style.display = "inline";
    });

    chowmien_increment.addEventListener("click" , () => {
        CartBtn.style.display = "inline";
    });
    //

    //
    Veg_Roll_Decrement.addEventListener('click' , ()=> {
        CartBtn.style.display = "inline";
    });

    Veg_Roll_increment.addEventListener("click" , () => {
        CartBtn.style.display = "inline";
    });
    //
    //
    Tea_Decrement.addEventListener('click' , ()=> {
        CartBtn.style.display = "inline";
    });

    Tea_increment.addEventListener("click" , () => {
        CartBtn.style.display = "inline";
    });
    //
    //
    coffee_Decrement.addEventListener('click' , ()=> {
        CartBtn.style.display = "inline";
    });

    coffee_increment.addEventListener("click" , () => {
        CartBtn.style.display = "inline";
    });
    //
    //
    cone_Decrement.addEventListener('click' , ()=> {
        CartBtn.style.display = "inline";
    });

    cone_increment.addEventListener("click" , () => {
        CartBtn.style.display = "inline";
    });
    //

    //
    cream_bar_Decrement.addEventListener('click' , ()=> {
        CartBtn.style.display = "inline";
    });

    cream_bar_increment.addEventListener("click" , () => {
        CartBtn.style.display = "inline";
    });


   
incbtn.forEach(btn => {
    btn.addEventListener("click", () => {
        count++;
        CartBtn.innerText = `Items added: ${count}`;
    });
});

decbtn.forEach(btn => {
   btn.addEventListener("click" , ()=> {
       count--;
       CartBtn.innerText = `Items added: ${count}`;

       if(count == 0) {
        CartBtn.style.display = "none";
       }
   });
});

 
 CartBtn.addEventListener("click" , ()=> {
     window.location.href = "trial2.html";
     
    });

