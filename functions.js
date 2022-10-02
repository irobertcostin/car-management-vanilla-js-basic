//functie ce primeste ca parametru un obiect si returneaza un row

function createRow(obj){


    let text=`
    
    <tr>
    <th class="marca">${obj.marca}</th>
    <td>${obj.model}</td>
    <td>${obj.an}</td>
    <td>${obj.culoare}</td>
    <td>${obj.nrKm}</td>

</tr>
    `


    return text;


}

function populateTable(arr){


    let text="";

    for(let i=0;i<arr.length;i++){

        text+=createRow(arr[i]);
    }


    let  container=document.querySelector(".tablebody");

    container.innerHTML=text;
}


//fce i-a informatiile din inputuri si returneaza un obiect cu ele

function getCar () {

    
    let marca = document.querySelector(".marca");
    let model = document.querySelector(".model");
    let an = document.querySelector(".an");
    let culoare = document.querySelector(".culoare");
    let nrKm = document.querySelector(".nrKm");

    let masina={
        marca:marca.value,
        model:model.value,
        an:+an.value,
        culoare:culoare.value,
        nrKm:+nrKm.value
        
    }



   if(masina.marca!==""&&masina.model!==""&&masina.an!==0&&masina.culoare!==""&&masina.nrKm!==0){
     return masina;
   }else{

        let text = "";

       let erori=[];

        if(masina.marca===""){

             erori.push("Nu s-a introdus marca");
        }

        if(masina.model==="") {

            erori.push("Nu s-a introdus un model");
        }

        if(masina.an !=0 ) {
            erori.push("Nu s-a introdus an");
        }

        if(masina.culoare==="") {
            erori.push("Nu ati introdus o culoare");
        }

        if(masina.nrKm ==0) {
            erori.push("Kilometrii depasesc normele magazinului");
        }

        return erori;
        
    }
}

//functie ce  primeste ca parametru un array si o marca iar sterge masina cu marca respectiva
// defapt se creaza un array nou , si pentru fiecare element pe care il gaseste in parametrul arr (adica CARS al nostru)
// o sa verifice daca atributul marca e diferit de parametrul pe care il dam noi ca marca 
// daca e diferit, atunci va crea practic un array nou, creat prin eliminarea elementelor care contineau parametrul indicat de noi 

function eliminateCar (arr,marca) {


    let nou=[];

    for(let i=0;i<arr.length;i++){

        if(arr[i].marca!==marca){

            nou.push(arr[i]);
        }

    }


    return nou;

}



//functie ce primete ca parametru modelul si ne returneaeaza obiectul


function getCarByMarca (arr,marca) {

    let x = "";
    for (i=0;i<arr.length;i++) {

        if (arr[i].marca == marca) {
            x= arr[i];
        }

    }
    return  x;
}



// functie ce primeste array si un obiect din array 
// arrayul devine 
function updateCar (arr,masina) {
    arr=eliminateCar(arr,masina.marca);
    arr.push(masina);
    return arr;
}



function searchCarByMarca(arr ,marca){


    let filtrat=[];

    for(let i=0;i<arr.length;i++){

        if(arr[i].marca.includes(marca)){

        filtrat.push(arr[i]);
        }
    }

    return filtrat;
}