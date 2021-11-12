const FiltroMaior2000 = (value) => {
    if(value.valor > 2000){
        return value;
    }
}

const FiltroMaior2000Menor2500eDataMenor = (value) => {

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

const FiltroMaior2500eMenor3000DataMenor2meses = (value) => {

    var data = new Date();

    if(value.valor >= 2500 && value.valor <= 3000){
     
        if(value.Cliente.data_ano >= data.getFullYear()){
            if(value.Cliente.data_mes >= data.getMonth()-1){  // mes começa em 0
                return value;
            }
        }
    }
    else{
        return value;
    }

}

const FiltroMaior4000eRegiaoSul = (value) =>{

    if(value.valor > 4000){
        if(value.Cliente.estado !== "Paraná" && value.Cliente.estado !== "Rio Grande do Sul" && value.Cliente.estado !== "Santa Catarina"){
            return value;
        }
    } 
    else{
        return value;
    }

}

module.exports = {FiltroMaior2000,FiltroMaior2000Menor2500eDataMenor,FiltroMaior2500eMenor3000DataMenor2meses,FiltroMaior4000eRegiaoSul};