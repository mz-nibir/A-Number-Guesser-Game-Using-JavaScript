let result = document.querySelector("#clickBtn");
let randomNumber = Math.floor(Math.random() * 10 + 1); 

//add eventListener

result.addEventListener('click', (e) => {
    console.log(randomNumber);

    

    let correcr_ans = prompt("Enter the Guess Number: ");

    if(correcr_ans == ""){
        alert("Invalid Input!!");
    }else{
        if(correcr_ans == randomNumber){	 
            alert("CONGRATULATIONS!!! You Win "); 
            
        }else if(correcr_ans > randomNumber) {	 
            alert("Correct answer is smaller! input lower number"); 
        }
        else { 
            alert("Correct answer is greater!  input big number") ;
        }

    }




    e.preventDefault();


});