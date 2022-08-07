
let container = document.querySelector('main');

container.style.animationName = 'fade';

class MassUnit{

    constructor(mainTitle,unitInpt,result){

        // this gets the IDs and ClassNames of the elements, and stores them as instance variable

        this.mainTitle =  mainTitle;

        this.unitInpt = unitInpt;

        this.result = result;

        this.convert = convert;

        // this gets the actual DOM ElementNode from the DOM, and instanciates them using the instance varibles

        this.MainH1 = document.querySelector('.' + this.mainTitle);

        this.mainInput = document.querySelector('.' + this.unitInpt);

        this.resultDiv = document.querySelector('.' + this.result);


    } 

}

class Grams extends MassUnit{ 

    changeGram(){

        this.MainH1.textContent = 'Gram to Kilogram';

        this.mainInput.placeholder = 'Gram';

        this.resultDiv.textContent = 'Kilogram';
        
    }


    CalGram(){

        let result = parseFloat(this.mainInput.value) / 1000;

        this.resultDiv.textContent = result + 'kg';
    }
}

class Kilogram extends MassUnit{

    
    changeKilogram(){

        
        this.MainH1.textContent = 'Kilogram to Gram';
        
        this.mainInput.placeholder = 'Kilogram';
        
        this.resultDiv.textContent = 'Gram';
        
    }

    CalKilogram(){

        let result = parseFloat(this.mainInput.value) * 1000;

        this.resultDiv.textContent = result + 'g';

    }

}

let gramme = new Grams('main-h2','gram-inpt','result');

let gramToKiloBtn =  document.querySelector('#mas-g-btn');

gramToKiloBtn.addEventListener('click',()=>{gramme.changeGram()});





let kilo = new Kilogram('main-h22','kilo-inpt','result-2');

let kiloToGramBtn = document.querySelector('#mas-kg-btn'); 

kiloToGramBtn.addEventListener('click',()=>{kilo.changeKilogram()}); 

let state = document.getElementById('title');

let convertBtn = document.getElementById('convert');




convertBtn.addEventListener('click',()=>{

    if(state.textContent === 'Gram to Kilogram'){

        gramme.CalGram();

    }
    else{

        kilo.CalKilogram();

    }

})





