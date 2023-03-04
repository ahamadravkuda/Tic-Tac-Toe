// x=1;
// y=0;
let turn = "0"
 let isgameover = false;
//  let isgamex = x;
// Turn change condition.....
const changeTurn = ()=>{
    choose_1.addEventListener('click', ()=>{
        turn= "X";
        });
        choose0.addEventListener('click', ()=>{
            turn= "0";
            });
    // return turn === "X"? "0": "X"
    return turn ;
   
}
//
// winning Conditions
     const checkWin = ()=>{
        let boxtext = document.getElementsByClassName('boxtext');
         let wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],  
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
    
    
         ]
         //
         wins.forEach(e =>{
            if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
                isgameover = true

                choose_1.disabled = true;
                choose0.disabled = true;

            }
        })
    reset.addEventListener('click', ()=>{
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    turn = " "; 
    isgameover = false
    choose_1.disabled = false;
                choose0.disabled = false;
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;