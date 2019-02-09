const valider = document.getElementById('valider');

valider.addEventListener('click', function(e) {
    e.preventDefault();
    let form = new FormData(document.getElementById('formulaire'));

    fetch("php/verif.php", {
        method: 'POST',
        body: form
    })
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
    })
}) 