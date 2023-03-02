//criação da função
function calculatetip(event){
    event.preventDefault();
    
    //criando variáveis para pegar valores selecionados nos inputs usando o "value"
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numPeople = document.getElementById('people').value;

    //teste condicional das variáveis
    if(bill == '' | serviceQual == 0){
        alert('Por favor, preencha os valores');
        return;
    }

    if(numPeople == '' | numPeople <= 1){
        numPeople = 1;
        document.getElementById('each').style.display = 'none';
        }else{
            document.getElementById('each').style.display = 'block';
        }

    //criando variável total e fazendo a conta
    let total = (bill * serviceQual) / numPeople;
    //mostrar apenas 2 casas decimais
    total = total.toFixed(2);

    //atribuindo ao id 'tip' o resultado total
    document.getElementById('tip').innerHTML = total;
    //mostrabdo a escrita com id 'totaltip'
    document.getElementById('totaltip').style.display = "block";
}

//escondendo as escritas com id 'totaltip' e 'each'
document.getElementById('totaltip').style.display = "none";
document.getElementById('each').style.display = "none";

//addEventListener fica olhando o submit, e quando for submetido chama a função 'calculatetip'
document.getElementById('tipsForm').addEventListener('submit', calculatetip);