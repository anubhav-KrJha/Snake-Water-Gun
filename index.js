let times= prompt("Enter how many times you want to play:")
times= Number.parseInt(times);
for(let i=0; i< times; i++){
    let arr =["S", "W", "G"];
    let comp= arr[(Math.floor(Math.random() * arr.length))]

    let player=prompt("What will you choose");


    if(comp==player){
        console.log("Round tie");
    }
    else if (comp=="S" && player=="W"){
        console.log("Computer wins");
    }
    else if(comp=="W" && player=="G"){
        console.log("Computer wins");
    }
    else if(comp=="G" && player=="S"){
        console.log("Computer wins");
    }
    else{
        console.log("You win")
    }
    let choice= confirm("Do you want to play again")
    if(!choice){
        break;
    }

}