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
 import {MyBase} from "MyBase";

export class SimpleClass extends MyBase {
    constructor(){
        super();
        this.name = "Lucas";
    }
    get message(){
        return "Hello ES2015";
    }

    calculate(){
        return 43;
    }
}



