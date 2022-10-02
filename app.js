
// add object
let btnCreate = document.querySelector(".btn");


// object selection
let bdyTable = document.querySelector(".tablebody");
let marcaSelectata = "";
let objSelectat="";

// item deletion
let deletion = document.querySelector(".delete")

// inject text
let marca = document.querySelector(".marca");
let model = document.querySelector(".model");
let an = document.querySelector(".an");
let culoare = document.querySelector(".culoare");
let nrKm = document.querySelector(".nrKm");



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



bdyTable.addEventListener("click", (e) => {

    
    let butonEdit = "Edit";

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

        // continutul query selectorului nostru pe baza de clasa devine textul mai sus declarat
        btnCreate.textContent = butonEdit;

        // stocam obiectul selectat, ca sa il putem  sterge inainte de a adauga clasa altui element 
        objSelectat = obj;

        //redefinim obiect
        let car=getCarByMarca(cars,marcaSelectata);


        //inputurile se recompleteaza
        //valoare inputului cu clasa de mai sus este egala cu obiectul.atributul car.marca
        marca.value=car.marca;
        model.value = car.model;
        an.value = car.an;
        culoare.value = car.culoare;
        nrKm.value = car.nrKm;
        

    } else {
        // daca nu contine clasa marca, continutul device cealalta variabila declarata mai sus
        btnCreate.textContent = butonAdauga;
    }
})


deletion.addEventListener("click", () => {

    // dupa click pe delete, array CARS devine = cu functia eliminateCars, care defapt este o re-enumerare a elementelor intr-un array nou 
    //  parametrii functiei eliminateCar / cars, pentru ca acela este arrayul nostru, iar parametru marcaSelectata, pentru ca vrem un nou array din care sa nu faca 
    // parte elementul selectat in eventlistenerul din bdyTable


    cars = eliminateCar(cars, marcaSelectata);


    populateTable(cars);

    btnCreate.textContent = "Adauga masina";

})


populateTable(cars);




