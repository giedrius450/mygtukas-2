/*Sukuriamas masyvas su pateiktais paveikslėliais*/
const images_array = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg'];

/* Sukurima funkcija pirmajmam mygtukui*/
function firstButton() {
    let button = document.getElementById("mygtukas");
    /*Paspaudus mygtuką rodyti, jisai pranyksta*/
    button.style.display = "none";

    const myList = document.getElementById("myList");
    /*Turinį išvalome, kad nepridėtų daug kartu tu pačių paveikslėlių*/
    myList.innerHTML = "";

    /*Pridedame  10 li elementų ir kiekviename li elemente paveikslėlio elementas*/
    for (let i = 0; i < images_array.length; i++) {

        /*Sukuriamas li elementas*/
        const li = document.createElement("li");

        /*Sukuriamas img elementas*/
        const img = document.createElement("img");

        /*Priskiriame img elementui reikšmes iš masyvo*/
        img.src = `./img/${images_array[i]}`;

        /*Suteikiame img elementui pavadinimą*/
        img.alt = `Image ${i + 1}`;

        /*Nustatome paveikslėliui stilius*/
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';

        /*Nustatomas li elemento stilius*/
        li.style.height = '250px';
        li.style.margin = '5px';
        li.style.width = '24%';
        li.style.display = 'inline-block';
        li.style.boxSizing = 'border-box';

        /*Pridedame nuotrauką prie li elemento*/
        li.appendChild(img);

        /*Pridedame li elementą prie ul elemento*/
        myList.appendChild(li);


    }

}

/*Sukuriama funkcija antrajam mygtukui*/
function mixButton() {

    /*Sumaišomi paveikslėliai esantys masyve*/
    const selectedImages = [...images_array].sort(() => Math.random() - 0.5);
    const myList = document.getElementById("myList");

    /*Turinį išvalome, kad nepridėtų daug kartų tų pačių paveikslėlių*/
    myList.innerHTML = "";

    /*Pridedame 10 li elementų ir kiekviename li elemente paveikslėlio elementus*/
    for (let i = 0; i < images_array.length; i++) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = `./img/${selectedImages[i]}`;
        img.alt = `Image ${i + 1}`;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        li.style.height = '250px';
        li.style.margin = '5px';
        li.style.width = '24%';
        li.style.display = 'inline-block';
        li.style.boxSizing = 'border-box';
        li.appendChild(img);
        myList.appendChild(li);

        /*Pridedame Event listener, kuris pakeis paveikslėlį, paspaudus ant jo du kartus*/
        img.addEventListener("dblclick", function () {
            img.src = "./images/11.jpg";
            img.alt = "";
        });


    };



};
