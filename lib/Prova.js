const FiltroMaior2000 = (value) => {
    if(value.valor > 2000){
        return value;
    }
}

function FiltroMaior2000Menor2500eDataMenor(value){

    var data = new Date();

    if(value.valor >= 2000 && value.valor <= 2500){

        if(value.data_ano >= data.getFullYear()){
            if(value.data_mes >= data.getMonth()){  // mes começa em 0
                return value;
            }
        }
    }
    else{
        return value;
    }

}

module.exports = {FiltroMaior2000,FiltroMaior2000Menor2500eDataMenor};