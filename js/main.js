const fullname = document.getElementById('fullname');
const email = document.getElementById("email");
const valider = document.getElementById("valider");
const texte = document.getElementById("texte");
const contact = document.getElementById("contact");
const all = document.getElementById("all");
const panoramas = document.getElementById("panoramas");
const macros = document.getElementById("macros");
const portraits = document.getElementById("portraits");
const journal = document.getElementById("journal");

// Ajout d'un eventListener sur valider
valider.addEventListener("click", function(e) {
    const formulaire = document.getElementById("formulaire");

    let valeurFullname = fullname.value;
    let valeurEmail = email.value;
    let valeurTexte = texte.value;

    e.preventDefault();

    let regexFullname = /^[a-zA-Z]+[ \-']?[[a-zA-Z]+[ \-']?]*[a-zA-Z]+$/;
    let regexEmail = /^[_a-z0-9-]+(.[a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    let regexTexte = /^.{20,}$/;
    console.log(regexEmail.test(valeurEmail));
    console.log(regexFullname.test(valeurFullname));
    if (!regexFullname.test(valeurFullname)) {
        fullname.style.borderColor = "red";
        return false;
    } else if (!regexEmail.test(valeurEmail)) {
        email.style.borderColor = "red";
        return false;
    } else if (!regexTexte.test(valeurTexte)) {
        texte.style.borderColor = "red";
        return false;
    } else {
        fullname.style.borderColor = "green";
        email.style.borderColor = "green";
    }
    return formulaire.submit();

});

// Création des tableaux pour les filtre--------------------------------------------------------------------------------------

filterSelection('all');

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("cadre");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
};

// Show filtered elements
function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
};

// Hide elements that are not selected
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
};

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("mes_boutons");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
};