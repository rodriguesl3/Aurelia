// 'use strict';

/*
Versão 1 (Class)
Por convenção utilizaremos PascalCase para classes 
e camelCase para objetos internos.
*/

/*
class SimpleClass {
    constructor(){
        this.name = "Lucas";
        
    }
    get message(){
        return "Hello ES2015";
    }

    calculate(){
        return 43;
    }
}

 */

/*
Versão 2 (Modules)
 Removido 'use strict', por conta que o Transpiler,
  irá fazer isso por nós agora
 */
// export class SimpleClass {
//     constructor(){
//         this.name = "Lucas";
        
//     }
//     get message(){
//         return "Hello ES2015";
//     }

//     calculate(){
//         return 43;
//     }
// }

/*
Versão 3 (Inherance)
 Vamos adicionar a palavra extends
 */
//  import {MyBase} from "MyBase";
//  import {compute,val2} from "someOtherModule";

// export class SimpleClass extends MyBase {
//     constructor(){
//         super();
//         this.name = "Lucas";
//     }
//     get message(){
//         let threshold = 40;
//         /*
//         Ao invés de usarmos as aspas simples ou duplas (' ou ")
//         iremos utilizar a crase (`) dessa forma noss tranpiler irá 
//         entender que alguns caracteres especiais deve ser traduzidos.
//         */
//         let result = `Hello ${this.name}, are you ${5+threshold} years old?`;
        
//         return result;
//     }
//     calculate(){
//         return compute()+ val2;
//     }

// //Estamos utilizando Promises disponivel em ES2015
//     startEngine(){
//         var promise = new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 resolve("Engine started!");
//             },5000);
//         });
//        return promise;
//     }
// }


//Versão 4 (Decorators and Class properties) EcmaScript 7
// jspm install aurelia-framework aurelia-fetch-client
// em config.js foi adicionado duas linhas 
// "es7.decorators",
// "es7.classProperties"
// em babelOptions.optionals:[]


 import {MyBase} from "MyBase";
 import {compute,val2} from "someOtherModule";
 import {inject} from "aurelia-framework";
  import {HttpClient} from "aurelia-fetch-client";

@inject(HttpClient)
export class SimpleClass extends MyBase {
    constructor(http){
        super();
        this.name = "Lucas";
    }

    myProperty = 42;

    get message(){
        let threshold = 40;
        /*
        Ao invés de usarmos as aspas simples ou duplas (' ou ")
        iremos utilizar a crase (`) dessa forma noss tranpiler irá 
        entender que alguns caracteres especiais deve ser traduzidos.
        */
        let result = `Hello ${this.name}, are you ${5+threshold} years old?`;
        
        return result;
    }
    calculate(){
        return compute()+ val2;
    }

//Estamos utilizando Promises disponivel em ES2015
    startEngine(){
        var promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("Engine started!");
            },5000);
        });
       return promise;
    }
}