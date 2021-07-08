function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO]');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);

        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        var genero = '';
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade <10){
                img.setAttribute('src', 'img/bebe-homem.jpg')

            }else if (idade < 21){
                img.setAttribute('src', 'img/jovem-homem.jpg')

            }else if (idade < 50){
                img.setAttribute('src', 'img/adulto-homem.jpg')

            }else {
                img.setAttribute('src', 'img/idoso-homem.jpg')

            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade <10){
                img.setAttribute('src', 'img/bebe-mulher.jpg')

            }else if (idade < 21){
                img.setAttribute('src', 'img/jovem-mulher.jpg')

            }else if (idade < 50){
                img.setAttribute('src', 'img/adulta-mulher.jpg')

            }else {
                img.setAttribute('src', 'img/idosa-mulher.jpg')
                
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}



