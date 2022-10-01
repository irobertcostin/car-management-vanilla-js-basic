
let masina1 = {
    marca: "dacia",
    model: "logan",
    an: 1998,
    motor: 3.2,
    geam: "securizat",
    parbriz: "incalzit",
    impozit: 2800,
    pret: 1500,
    culoare: "rosu"
}

let masina2 = {
    marca: "dacia",
    model: "sander0",
    an: 2002,
    motor: 5.7,
    geam: "blindat",
    parbriz: "fara parbriz",
    impozit: 8800,
    pret: 1700,
    culoare: "verde"
}

let masina3 = {
    marca: "dacia",
    model: "superNova",
    an: 2019,
    motor: 1.2,
    geam: "securizat",
    parbriz: "incalzit",
    impozit: 80,
    pret: 1900,
    culoare: "negru"
}

let masina4 = {
    marca: "dacia",
    model: "Papuc",
    an: 1889,
    motor: 4.2,
    geam: "fara geam",
    parbriz: "incalzit",
    impozit: 4800,
    pret: 2300,
    culoare: "galben"
}

let masina5 = {
    marca: "renault",
    model: "megane",
    an: 1993,
    motor: 3.2,
    geam: "fara geam",
    parbriz: "incalzit",
    impozit: 2800,
    pret: 2900,
    culoare: "albastru"
}

let masina6 = {
    marca: "citroen",
    model: "xsara",
    an: 2003,
    motor: 1.2,
    geam: "securizat",
    parbriz: "neincalzit",
    impozit: 500,
    pret: 3200,
    culoare: "mov"
}

let masina7 = {
    marca: "bmw",
    model: "2series",
    an: 2011,
    motor: 2.5,
    geam: "securizat",
    parbriz: "incalzit",
    impozit: 1800,
    pret: 4500,
    culoare: "turcoaz"
}

let masina8 = {
    marca: "audi",
    model: "A6",
    an: 2015,
    motor: 3.0,
    geam: "blindat",
    parbriz: "incalzit",
    impozit: 2500,
    pret: 17500,
    culoare: "portocaliu"
}

let masina9 = {
    marca: "audi",
    model: "a4",
    an: 2013,
    motor: 2.0,
    geam: "fara geam",
    parbriz: "neincalzit",
    impozit: 1500,
    pret: 9800,
    culoare: "rosu"
}

let masina10 = {
    marca: "bmw",
    model: "3series",
    an: 2014,
    motor: 3.5,
    geam: "fara geam",
    parbriz: "incalzit",
    impozit: 3500,
    pret: 12300,
    culoare: "verde"
}




//totd functie ce primeste ca prametru 2 masini si returneaza masina mai noua

function compare(x, y) {

    if (x.an > y.an) {

        return x;
    } else if (x.an < y.an) {

        return y;
    } else {

        return "acealsi an";
    }

}


// functie ce primeste 3 masini si o returneaza pe cea mai noua 

function compara(x, y, k) {

    if (x.an > y.an && x.an > k.an) {
        return x;
    } else if (y.an > x.an && y.an > k.an) {
        return y;
    } else return k;

}


//functie ce primeste un parametru o  masina si ne retunreazqa daca masian este  mai veche de 10 ani


function Rabla(x) {

    let minim = 2012;

    if (x.an < minim) {
        return true;
    } else return false;

}

//array  de obiecte


let masini = [masina1, masina2, masina3, masina4, masina5, masina6, masina7, masina8, masina9, masina10];


//functie ce primeste ca parametru un vector si afiseaza elementele vectorului 



function afiseaza(arr) {


    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].marca);
    }
}



//functie ce returenaza marca masinii cea mai scumpa

function ceaMaiScumpa(arr) {

    let masinaPretMaxim = arr[0];


    for (let i = 0; i <arr.length; i++) {

        if (arr[i].pret > masinaPretMaxim.pret) {
            masinaPretMaxim = arr[i];
        }

    
    }


    return masinaPretMaxim.marca;

}



//functie ce  primeste ca parmateru marca si un vector si verifica daca exista marca respectiva


function verificareMarca (arr, marca) {



for (i = 0; i < arr.length; i++) { //verifica fiecare element in parte din vector


    if(arr[i].marca==marca){

        
        return true;
    }
}

return false;

}


// functie de primeste ca parametru culoarea si afiseaza cate masini au culoarea 

function favoriteColor (arr, culoare) {

    let sum = 0

    for(i=0; i< arr.length; i++) {

    if(arr[i].culoare == culoare) {
        sum++;
    }
    
    }

    return sum;

}

// functie ce primeste cel mai mic impozit platit pentru o motorizare de peste 3000cmc


function impozitMinin (arr) {

    let plataMinima = 10**18;
    


for (i=0; i< arr.length; i++) {

    if(arr[i].motor >= 3.0 && arr[i].impozit < plataMinima) {

    plataMinima = arr[i].impozit;

    }

}

return plataMinima;

}


// cea mai ieftina masina cu motor sub 2.0

function problema1 (arr) {

    let ieftina = 10**100; 

    let solutie = 0;

    for (i=0; i<arr.length; i++) {

        if(arr[i].pret< ieftina && arr[i].motor <= 2.0 ) {

        ieftina = arr[i].pret; 
        solutie = arr[i].model;
        }

    }

    return solutie;


}

//cate masini sunt cu impozit peste 3000 lei / afisare modele

function problema2 (arr) {

    let sum=0;
    let sol = "";


    for (i=0; i<arr.length; i++){

        if(arr[i].impozit > 3000){
            sum++;
            sol += arr[i].model + " / "; 
        }


    }

return (sol + sum);
}


// afisare culoare si pret la masinile bmw 

function problema3(arr) {

let sol = "";
    for(i=0;i<arr.length;i++){
        
        if (arr[i].marca == "bmw") {
            sol += arr[i].pret + " " + arr[i].culoare + " / ";
        } 


    }

    return sol;

}

// sa se afiseze ce model are masina dacia galbena


function problema4(arr) {

    let solutie = 0;

    for (i=0; i<arr.length; i++) 


    if (arr[i].culoare == "galben" && arr[i].marca == "dacia") {
        sol = arr[i].model;
    }

    return sol;
}

// sa se calculeze diferenta dintre impozitul minim la morotizarea 3.0 si impozitul maxim la motorizarea sub 2.0
// sa se afiseze masinile comparate, si diferenta de pret dintre ele 
function problema5 (arr) {

    let impozit2 = 0;
    let impozit3 = 10**18;
    let motor2 = 0;
    let motor3 = 0;
    let pret2=0;
    let pret3=0;



    for (i=0 ; i< arr.length; i++) {

        if(arr[i].motor <= 2.0 && arr[i].impozit > impozit2) {
            impozit2 = arr[i].impozit;
            motor2 = arr[i];
            pret2= arr[i].pret
        }

        if(arr[i].motor >= 3.0 && arr[i].impozit < impozit3){
            impozit3 = arr[i].impozit;
            motor3 = arr[i];
            pret3=arr[i].pret;
        }

    }

    console.log(`Masinile comparate au fost:`)
    console.log(motor2 , motor3)
    console.log(`Diferenta de bani este: ${impozit3-impozit2} lei`)
    console.log(`Diferenta de pret este: ${pret3-pret2} lei`)

}



// sa se afiseze cea mai scumpa masina dintre cele cu geam securizat si parbriz incalzit 

function problema6(arr) {

    let scumpa = 0;
    let sol = 0;
    
    for (i=0;i<arr.length;i++) {
        if (arr[i].pret > 0 && arr[i].geam == "securizat" && arr[i].parbriz=="incalzit") {

            scumpa = arr[i].pret;
            sol = arr[i];
        }
    }

    return sol;

}


// sa se afiseze 