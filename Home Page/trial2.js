
let AlooParatha_count = 0;
let maggi_count = 0;
let chowmine_count = 0;
let coffee_count = 0;
let cone_count = 0;
let creamBar_count = 0;
let Tea_count = 0;
let vegroll_count = 0;

async function fetchData() {
  try {
    const response = await fetch('http://localhost:3030/items');
    const data = await response.json();

    data.forEach(item => {
      AlooParatha_count = item.alooParatha;
      maggi_count = item.maggi;
      chowmine_count = item.chowmien;
      coffee_count = item.coffee;
      cone_count = item.cone;
      creamBar_count = item.creamBar;
      Tea_count = item.tea;
      vegroll_count = item.vegRoll;
    });

    console.log(data);
    let count = 0;
    if (AlooParatha_count != 0) {
        count++;
    }

    if (maggi_count != 0) {
        count++;
    }

    if (chowmine_count != 0) {
        count++;
    }

    if (coffee_count != 0) {
        count++;
    }

    if (creamBar_count != 0) {
        count++;
    }

    if (Tea_count != 0) {
        count++;
    }

    if (vegroll_count != 0) {
        count++;
    }

    if (cone_count != 0) {
        count++;
    }

    console.log(count);

    const outerContainer = document.createElement('div');
    document.body.appendChild(outerContainer);
    outerContainer.classList.add("Container");
    outerContainer.style.cssText = "background-color: #f9fafb;   position: absolute; top: 45%; left: 50%; transform: translate(-50%, -50%); opacity: 0.7; width : 600px ; border-radius : 12px ; box-shadow : 0 0 10px grey";

    if(count > 0) {
        const header = document.createElement("div");
        outerContainer.appendChild(header);

        const h1 = document.createElement("div");
        const text1 = document.createTextNode("Item");
        h1.style.cssText = "font-size : 28px; font-weight: 600; font-style: italic"
         header.appendChild(h1);
         h1.appendChild(text1);

        const h2 = document.createElement("div");
        const text2 = document.createTextNode("Quantity");
        h2.style.cssText = "font-size : 28px; font-weight: 600; font-style: italic"

        header.appendChild(h2);
         h2.appendChild(text2);


        const h3 = document.createElement("div");
        const text3 = document.createTextNode("Price");
        h3.style.cssText = "font-size : 28px; font-weight: 600; font-style: italic"

        header.appendChild(h3);
         h3.appendChild(text3);

            
        header.style.cssText = "display : flex ; flex-direction: row ; justify-content: space-evenly; "; 

        const hr = document.createElement('hr');
   hr.style.borderTop = "4px solid black"; 
   outerContainer.appendChild(hr);

   
   

        //aloo paratha
   if(AlooParatha_count != 0){
    const div1 = document.createElement("div");
    outerContainer.appendChild(div1);
    div1.style.cssText = "display : flex ; flex-direction: row ; justify-content: space-evenly; "; 


    

    const div1Item1 = document.createElement("button");
    div1Item1.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
    const div1Item1Text = document.createTextNode("Aloo-paratha");
    div1.appendChild(div1Item1);
    div1Item1.appendChild(div1Item1Text);

    const div1Qty1 = document.createElement("button");
    div1Qty1.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border:none;background : transparent";
    const div1QtyText = document.createTextNode(`${AlooParatha_count}`);
    div1.appendChild(div1Qty1);
    div1Qty1.appendChild(div1QtyText);


    const div1Price1 = document.createElement("button");
    div1Price1.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border:none ;background : transparent";
    const div1Price1Text = document.createTextNode(`${AlooParatha_count * 40}`);
    div1.appendChild(div1Price1);
    div1Price1.appendChild(div1Price1Text);


     //hr
   const hr1 = document.createElement('hr');
   hr1.style.borderTop = "1px solid black"; 
   outerContainer.appendChild(hr1);
   
   }
  
  

   //maggi
   if (maggi_count != 0) {
    const div2 = document.createElement("div");
    outerContainer.appendChild(div2);
    div2.style.cssText = "display : flex ; flex-direction: row ; justify-content: space-evenly; "; 

    const div2Item2 = document.createElement("button");
    div2Item2.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border:none;background : transparent";
    const div2Item2Text = document.createTextNode("maggi");
    div2.appendChild(div2Item2);
    div2Item2.appendChild(div2Item2Text);

    const div2Qty2 = document.createElement("button");
    div2Qty2.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
    const div2QtyText = document.createTextNode(`${(maggi_count)}`);
    div2.appendChild(div2Qty2);
    div2Qty2.appendChild(div2QtyText);

    const div2Price2 = document.createElement("button");
    div2Price2.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
    const div2Price2Text = document.createTextNode(`${maggi_count * 35}`);
    div2.appendChild(div2Price2);
    div2Price2.appendChild(div2Price2Text);

    const hr2 = document.createElement('hr');
   hr2.style.borderTop = "1px solid black"; 
   outerContainer.appendChild(hr2);
   }
   

    //chowmein
    if (chowmine_count != 0) {
        const div3= document.createElement("div");
        outerContainer.appendChild(div3);
        div3.style.cssText = "display : flex ; flex-direction: row ; justify-content: space-evenly; "; 
    
        const div3Item3= document.createElement("button");
        div3Item3.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
        const div3Item3Text = document.createTextNode("chowmein");
        div3.appendChild(div3Item3);
        div3Item3.appendChild(div3Item3Text);
    
        const div3Qty3 = document.createElement("button");
        div3Qty3.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
        const div3QtyText = document.createTextNode(`${chowmine_count}`);
        div3.appendChild(div3Qty3);
        div3Qty3.appendChild(div3QtyText);
    
        const div3Price3 = document.createElement("button");
        div3Price3.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
        const div3Price3Text = document.createTextNode(`${chowmine_count * 35}`);
        div3.appendChild(div3Price3);
        div3Price3.appendChild(div3Price3Text);

        const hr3 = document.createElement('hr');
        hr3.style.borderTop = "1px solid black"; 
        outerContainer.appendChild(hr3);
    
       }
       
      

       //vegroll
       if (vegroll_count != 0) {
        const div4 = document.createElement("div");
        outerContainer.appendChild(div4);
        div4.style.cssText = "display : flex ; flex-direction: row ; justify-content: space-evenly; "; 
    
        const div4Item4= document.createElement("button");
        div4Item4.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
        const div4Item4Text = document.createTextNode("Veg-roll");
        div4.appendChild(div4Item4);
        div4Item4.appendChild(div4Item4Text);
    
        const div4Qty4 = document.createElement("button");
        div4Qty4.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
        const div4QtyText = document.createTextNode(`${vegroll_count}`);
        div4.appendChild(div4Qty4);
        div4Qty4.appendChild(div4QtyText);
    
        const div4Price4 = document.createElement("button");
        div4Price4.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive  ; border: none;background : transparent";
        const div4Price4Text = document.createTextNode(`${vegroll_count * 35}`);
        div4.appendChild(div4Price4);
        div4Price4.appendChild(div4Price4Text);
       

       const hr4 = document.createElement('hr');
       hr4.style.borderTop = "1px solid black"; 
       outerContainer.appendChild(hr4);
       }


         //Tea
         if (Tea_count != 0) {
            const div5 = document.createElement("div");
            outerContainer.appendChild(div5);
            div5.style.cssText = "display : flex ; flex-direction: row ; justify-content: space-evenly; "; 
        
            const div5Item5= document.createElement("button");
            div5Item5.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive  ; border: none;background : transparent";
            const div5Item5Text = document.createTextNode("Tea");
            div5.appendChild(div5Item5);
            div5Item5.appendChild(div5Item5Text);
        
            const div5Qty5 = document.createElement("button");
            div5Qty5.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive  ; border: none;background : transparent";
            const div5Qty5Text = document.createTextNode(`${Tea_count}`);
            div5.appendChild(div5Qty5);
            div5Qty5.appendChild(div5Qty5Text);
        
            const div5Price5 = document.createElement("button");
            div5Price5.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive  ; border: none;background : transparent";
            const div5Price5Text = document.createTextNode(`${Tea_count * 35}`);
            div5.appendChild(div5Price5);
            div5Price5.appendChild(div5Price5Text);
           
    
           const hr5 = document.createElement('hr');
           hr5.style.borderTop = "1px solid black"; 
           outerContainer.appendChild(hr5);
           }

            //coffee
         if (coffee_count != 0) {
            const div6 = document.createElement("div");
            outerContainer.appendChild(div6);
            div6.style.cssText = "display : flex ; flex-direction: row ; justify-content: space-evenly; "; 
        
            const div6Item6= document.createElement("button");
            div6Item6.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
            const div6Item6Text = document.createTextNode("coffee");
            div6.appendChild(div6Item6);
            div6Item6.appendChild(div6Item6Text);
        
            const div6Qty6 = document.createElement("button");
            div6Qty6.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
            const div6Qty6Text = document.createTextNode(`${coffee_count}`);
            div6.appendChild(div6Qty6);
            div6Qty6.appendChild(div6Qty6Text);
        
            const div6Price6 = document.createElement("button");
            div6Price6.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
            const div6Price6Text = document.createTextNode(`${coffee_count * 35}`);
            div6.appendChild(div6Price6);
            div6Price6.appendChild(div6Price6Text);
           
    
           const hr6 = document.createElement('hr');
           hr6.style.borderTop = "1px solid black"; 
           outerContainer.appendChild(hr6);
           }

           //cone
             if (cone_count != 0) {
                const div7 = document.createElement("div");
                outerContainer.appendChild(div7);
                div7.style.cssText = "display : flex ; flex-direction: row ; justify-content: space-evenly; "; 
            
                const div7Item7= document.createElement("button");
                div7Item7.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive  ; border: none;background : transparent";
                const div7Item7Text = document.createTextNode("Cone");
                div7.appendChild(div7Item7);
                div7Item7.appendChild(div7Item7Text);
            
                const div7Qty7 = document.createElement("button");
                div7Qty7.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
                const div7QtyText = document.createTextNode(`${cone_count}`);
                div7.appendChild(div7Qty7);
                div7Qty7.appendChild(div7QtyText);
            
                const div7Price7 = document.createElement("button");
                div7Price7.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
                const div7Price7Text = document.createTextNode(`${cone_count * 35}`);
                div7.appendChild(div7Price7);
                div7Price7.appendChild(div7Price7Text);
            
        
               const hr7 = document.createElement('hr');
               hr7.style.borderTop = "1px solid black"; 
               outerContainer.appendChild(hr7);
               }

            //cream
         if (creamBar_count != 0) {
            const div8 = document.createElement("div");
            outerContainer.appendChild(div8);
            div8.style.cssText = "display : flex ; flex-direction: row ; justify-content: space-evenly; "; 
        
            const div8Item8= document.createElement("button");
            div8Item8.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
            const div8Item8Text = document.createTextNode("Cream-Bar");
            div8.appendChild(div8Item8);
            div8Item8.appendChild(div8Item8Text);
        
            const div8Qty8 = document.createElement("button");
            div8Qty8.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
            const div8QtyText = document.createTextNode(`${creamBar_count}`);
            div8.appendChild(div8Qty8);
            div8Qty8.appendChild(div8QtyText);
        
            const div8Price8 = document.createElement("button");
            div8Price8.style.cssText = "font-size: 20px; font-weight : 200px ; font- family: cursive ; border: none;background : transparent";
            const div8Price8Text = document.createTextNode(`${creamBar_count * 35}`);
            div8.appendChild(div8Price8);
            div8Price8.appendChild(div8Price8Text);
           
    
           const hr8 = document.createElement('hr');
           hr8.style.borderTop = "4px solid black"; 
           outerContainer.appendChild(hr8);
           }
     
           const div9 = document.createElement("div");
           outerContainer.appendChild(div9);
           div9.style.cssText = "display : flex ; flex-direction: row ; justify-content: space-evenly; "; 
       
           const Total= document.createElement("button");
           Total.style.cssText = "font-size: 28px; font-weight : 600px ; font- style: italic ; border: none ; background : transparent";
           const TotalText = document.createTextNode("Total");
           div9.appendChild(Total);
           Total.appendChild(TotalText);

           const val= document.createElement("button");
           val.style.cssText = "font-size: 28px; font-weight : 600px ; font- style: italic ; border: none ;background : transparent";

           const valText = document.createTextNode(`${AlooParatha_count * 40 + maggi_count * 35 + chowmine_count * 35 + vegroll_count * 35 + Tea_count * 35 + coffee_count * 35 + cone_count * 35 + creamBar_count * 35} `);
           div9.appendChild(val);
           val.appendChild(valText);
        }

  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

fetchData(); // Call the async function to start fetching data
