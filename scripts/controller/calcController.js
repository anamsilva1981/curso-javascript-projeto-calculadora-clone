class CalcController{

    constructor(){
        this._displayCalc = "0";
        this._currentDate;

        this.initialize();
    }

    initialize(){
        let displayCalcEl =  document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeRl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor
    }

    get dataAtual(){
        return this._currentDate;
    }

    set dataAtual(data){
        this._currentDate = data
    }
}