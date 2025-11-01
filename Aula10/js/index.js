function getDados() {
    // let email = document.getElementById('email').value;
    // alert("Olá! O email " + email + " foi recebido");

    let radios = document.getElementsByName('happy');

    for (i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            document.querySelector("#result").innerHTML = "Yor are " + radios[i].value;
        }
    }


    let drink = document.querySelector('#drink');
    document.querySelector('#fd').innerHTML = drink.value
}