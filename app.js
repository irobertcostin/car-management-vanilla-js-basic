

let btnCreate = document.querySelector(".btn");

let bdyTable = document.querySelector(".tablebody");

let deletion = document.querySelector(".delete");

let show = document.querySelector(".show");

let celeSterse = "";

let marcaSelectata = "";

let objSelectat="";

btnCreate.addEventListener("click", () => {

    // vom evidentia daca returnul din functia getCar este un object sau un array
    // definim un raspuns (ceea ce va returna functia getCar)



    let resp = getCar();

    // daca raspunsul functiei contine un atribut marca , care e diferit de
    //undefined, adica daca exista un atribut marca, sa ne populeze arrayul

    if (resp.marca != undefined) {

        cars.push(resp);

        populateTable(cars);
        //in acest pas stim ca ne va returna un array (adica erorile inregistrate in fct)
    } else {
        //pentru fiecare element al arrayului, vom crea o alerta 
        for (let i = 0; i < resp.length; i++) {
            alert(resp[i]);
        }



    }
});



// ace

bdyTable.addEventListener("click", (e) => {


    let obj = e.target;


    if (obj.classList.contains("marca")) {
        //var objSelectat , daca este diferita de gol, sa ii scoata clasa elementului selectat, inainte de functia de selectare, adica sa ne stearga deja, daca e ceva selectat
        if(objSelectat!==""){
            objSelectat.classList.remove("selected");
        
        }
        // asa adaugam o clasa objectului
        obj.classList.add("selected");
        // am declarat marcaSelectata = cu obiectul din eventul click, ca sa o putem importa in functia de eliminare 
        marcaSelectata = obj.textContent;

        // stocam obiectul selectat, ca sa il putem  sterge inainte de a adauga clasa altui element 
        objSelectat = obj;

    }


    // cauta metode gata implementate precum textContent si classList pentru objects 


})






deletion.addEventListener("click", () => {

    // dupa click pe delete, array CARS devine = cu functia eliminateCars, care defapt este o re-enumerare a elementelor intr-un array nou 
    //  parametrii functiei eliminateCar / cars, pentru ca acela este arrayul nostru, iar parametru marcaSelectata, pentru ca vrem un nou array din care sa nu faca 
    // parte elementul selectat in eventlistenerul din bdyTable


    cars = eliminateCar(cars, marcaSelectata);


    populateTable(cars);



})


populateTable(cars);



