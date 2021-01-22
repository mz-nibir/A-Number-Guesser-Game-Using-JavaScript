let result = document.querySelector("#clickBtn");
let randomNumber = Math.floor(Math.random() * 10 + 1); 

//add eventListener

result.addEventListener('click', (e) => {

 for (let i = 0; i < 3; i++) {

     console.log(randomNumber);
    let correcr_ans = prompt("Enter the Guess Number: ");

    if(correcr_ans == ""){
        alert("Invalid Input!!");

    }else if(correcr_ans == randomNumber){
        alert("CONGRATULATIONS!!! You Win ");
        var count = 100; 
        break;
        
    }else if(correcr_ans > randomNumber && correcr_ans < 11){ 	 
            alert("Wrong! Correct Number is less than your input!!! "); 

    }else if(correcr_ans < randomNumber && correcr_ans > 0) { 
        alert("Wrong! Correct Number is greater than your input!!!") ;
    }
    else { 
        alert("please input between 1 to 10 !");

    }

    }

    
     
     
 if (count != 100){
    alert(`You lose the game! The Number was ${randomNumber}` );
 }
 

 

    

 




    e.preventDefault();


});