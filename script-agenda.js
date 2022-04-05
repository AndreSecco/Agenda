// Data Atual Cabeçalho
var data = new Date();
var dias = new Array(
    'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'
);
let mes = new Array(
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
)
let mesCabecalho = new Array(
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maiio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
)
let diaSemanaMin = new Array(
    'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D', 'S', 'T', 'Q', 'Q', 'S', 'S'
)
var divDataAtual = document.getElementById('dia-sem-ano')
divDataAtual.innerText = `${dias[data.getDay()]}, ${data.getDate()} ${mes[data.getMonth()]}, ${data.getFullYear()}`

//Selecionar os dias do mês
window.onload = function () {
    var select = document.querySelector('ul.dias')
    var options = getDiasMes(data.getMonth() + 1, data.getFullYear());
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("li");
        el.textContent = opt
        el.value = opt
        el.id = opt 
        select.appendChild(el)
        el.classList.add('btnDia')
    }
    let btnCabecalho = document.getElementById('btn-cabecalho')
    let mesAno = `${mesCabecalho[data.getMonth()]} ${data.getFullYear()}`
    btnCabecalho.innerHTML = mesAno

    // Dia da Semana Min    
    let semanaMin = document.querySelector('ul.semana')
    for (let i = data.getDay(); i <= options.length + 1; i++) {

        let smin = document.createElement("li")
        smin.textContent = diaSemanaMin[i]
        semanaMin.appendChild(smin)
        smin.classList.add('btnSemanaMin')
        // semanaMin.innerHTML += diaSemanaMin[i]
    }
    let btnDia = document.querySelectorAll(".dias > li")

    btnDia.forEach(function (key) {
        key.addEventListener('click', function () {
            removeEstilo()
            this.classList.add('btnDiaClick')
            selectDia()

        })
        function removeEstilo() {
            for (let i = 0; i < btnDia.length; i++) {
                document.querySelectorAll('.dias > li')[i].classList.remove('btnDiaClick');
            }
        }
    })
    
    //Clicando no dia
    function selectDia() {
        let btnSelectDia = document.getElementById('dia')
        let conteudo = document.getElementById('conteudo')
        btnSelectDia.addEventListener('click', function(e){
            let idDia = e.target.id
            //alert(e.target.id)
            conteudo.innerHTML = idDia
        })
       
    }
}

function getDiasMes(month, year) {
    month--;

    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
        days.push(date.getDate());
        date.setDate(date.getDate() + 1);
    }
    return days;
}