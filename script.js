var button = document.getElementById('idReadMore');

button.addEventListener('click', function() {
    var info = document.querySelector('.info-flexivel');
    info.classList.toggle('active');

    if (info.classList.contains('active')){
        return button.textContent = 'Ler menos'
    }

    button.textContent = 'Ler mais'

});
