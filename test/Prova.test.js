const {FiltroMaior2000,FiltroMaior2000Menor2500eDataMenor,FiltroMaior2500eMenor3000DataMenor2meses} = require('../lib/Prova');
describe('Atividade Avaliativa',()=>{
    test('Se o valor da fatura for menor que 2000', () => {
        
        var cliente1 = {id:0,nome:"José",data_ano:2021,data_mes:10,estado:"Paraná"};
        var cliente2 = {id:1,nome:"Marcos",data_ano:2021,data_mes:11,estado:"Paraná"};
        var cliente3 = {id:2,nome:"Paulo",data_ano:2021,data_mes:9,estado:"Paraná"};
        var cliente4 = {id:3,nome:"Alex",data_ano:2021,data_mes:8,estado:"Paraná"};
        var cliente5 = {id:4,nome:"Carlos",data_ano:2021,data_mes:12,estado:"Paraná"};
        
         var faturas = [
             {codigo:0,valor:1800,data_ano:2021,data_mes:10,Cliente:cliente1},
             {codigo:1,valor:1000,data_ano:2021,data_mes:11,Cliente:cliente2},
             {codigo:2,valor:2700,data_ano:2021,data_mes:9,Cliente:cliente3},
             {codigo:3,valor:2400,data_ano:2021,data_mes:8,Cliente:cliente4},
             {codigo:4,valor:2200,data_ano:2021,data_mes:12,Cliente:cliente5}
         ];

        var resposta = faturas.filter(FiltroMaior2000);
        expect(resposta.length).toBe(3);

    }); 
    test('Se o valor da fatura estiver entre 2000 e 2500 e a data for menor ou igual ao mes passado', () => {
 
        var cliente1 = {id:0,nome:"José",data_ano:2021,data_mes:10,estado:"Paraná"};
        var cliente2 = {id:1,nome:"Marcos",data_ano:2021,data_mes:11,estado:"Paraná"};
        var cliente3 = {id:2,nome:"Paulo",data_ano:2021,data_mes:9,estado:"Paraná"};
        var cliente4 = {id:3,nome:"Alex",data_ano:2021,data_mes:8,estado:"Paraná"};
        var cliente5 = {id:4,nome:"Carlos",data_ano:2021,data_mes:12,estado:"Paraná"};
        
         var faturas = [
             {codigo:0,valor:1800,data_ano:2021,data_mes:10,Cliente:cliente1},
             {codigo:1,valor:1000,data_ano:2021,data_mes:11,Cliente:cliente2},
             {codigo:2,valor:2700,data_ano:2021,data_mes:9,Cliente:cliente3},
             {codigo:3,valor:2400,data_ano:2021,data_mes:8,Cliente:cliente4},
             {codigo:4,valor:2200,data_ano:2021,data_mes:12,Cliente:cliente5}
         ];

        var resposta = faturas.filter(FiltroMaior2000Menor2500eDataMenor);
        expect(resposta.length).toBe(4);
    });
    test('Se o valor da fatura estiver entre 2500 e 3000 e a data for menor ou igual a 2 mesês atrás', () => {

        var cliente1 = {id:0,nome:"José",data_ano:2021,data_mes:10,estado:"Paraná"};
        var cliente2 = {id:1,nome:"Marcos",data_ano:2021,data_mes:11,estado:"Paraná"};
        var cliente3 = {id:2,nome:"Paulo",data_ano:2021,data_mes:9,estado:"Paraná"};
        var cliente4 = {id:3,nome:"Alex",data_ano:2021,data_mes:8,estado:"Paraná"};
        var cliente5 = {id:4,nome:"Carlos",data_ano:2021,data_mes:12,estado:"Paraná"};
        
         var faturas = [
             {codigo:0,valor:1800,data_ano:2021,data_mes:10,Cliente:cliente1},
             {codigo:1,valor:1000,data_ano:2021,data_mes:11,Cliente:cliente2},
             {codigo:2,valor:2700,data_ano:2021,data_mes:9,Cliente:cliente3},
             {codigo:3,valor:2400,data_ano:2021,data_mes:8,Cliente:cliente4},
             {codigo:4,valor:2200,data_ano:2021,data_mes:12,Cliente:cliente5}
         ];

         var resposta = faturas.filter(FiltroMaior2500eMenor3000DataMenor2meses);
         expect(resposta.length).toBe(5);
     });
    test('Se o valor da fatura for maior que 4000 e pertencer a algum estado da região sul', () => {  
            
        var cliente1 = {id:0,nome:"José",data_ano:2021,data_mes:10,estado:"Paraná"};
        var cliente2 = {id:1,nome:"Marcos",data_ano:2021,data_mes:11,estado:"Paraná"};
        var cliente3 = {id:2,nome:"Paulo",data_ano:2021,data_mes:9,estado:"Paraná"};
        var cliente4 = {id:3,nome:"Alex",data_ano:2021,data_mes:8,estado:"São Paulo"};
        var cliente5 = {id:4,nome:"Carlos",data_ano:2021,data_mes:12,estado:"Paraná"};
        
        var faturas = [
             {codigo:0,valor:1800,data_ano:2021,data_mes:10,Cliente:cliente1},
             {codigo:1,valor:1000,data_ano:2021,data_mes:11,Cliente:cliente2},
             {codigo:2,valor:2700,data_ano:2021,data_mes:9,Cliente:cliente3},
             {codigo:3,valor:4400,data_ano:2021,data_mes:8,Cliente:cliente4},
             {codigo:4,valor:4200,data_ano:2021,data_mes:12,Cliente:cliente5}
        ];

        var resposta = faturas.filter(FiltroMaior4000eRegiaoSul);
        expect(resposta.length).toBe(4);
    }); 
})