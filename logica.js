const celulas = document.querySelectorAll(".celula"); //querseletor seleciona todas as celulas



const Jogadorum = "x";

let checarturno = true;

const Jogadordois = "o";


const COMBINAÇOES = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];









document.addEventListener("click", (evento) => {

    if(evento.target.matches(".celula")){
        jogar(evento.target.id);
    }


});



// target retorna o objeto para qual o evento foi feito

// matches retorna true ou falso algum seletor





function jogar(id){

    const celula = document.getElementById(id);
    
    turno = checarturno ? Jogadorum : Jogadordois;

    celula.textContent=turno;

    celula.classList.add(turno);

    checarvencedor(turno);


}


function checarvencedor(turno){

    const vencedor = COMBINAÇOES.some((comb) => {

        return comb.every((index) =>{

            return celulas[index].classList.contains(turno);

            

        })

    });


    if(vencedor){
     
        encerrajogo(turno);


    } else if(checarempate()){


    } else {

        
    checarturno= !checarturno;
        
    }


}

function encerrajogo(vencedor = null) {

    if(vencedor){
        console.log("Tu ganhou");

    }else

    console.log("Empate")


}

function checarempate(){

    return false;
}






