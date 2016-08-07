
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
 
 /*
 Após importar as duas bibliotecas do aurelia
 estamos configurando para mostrar no console do browser os registros
  */
LogManager.addAppender(new ConsoleAppender());

/*
 Utilizando a opção .debug em logLevel, será mostrado 
 cada passo que aurelia efetuou, caso só deseja ver warning ou errors
 apenas troque .debug para .error ou .warn
LogManager.setLevel(LogManager.logLevel.warn);  
 */
LogManager.setLevel(LogManager.logLevel.debug); 

export function configure(aurelia){
    aurelia.use.standardConfiguration();
    aurelia.start().then(a=>a.setRoot());
    /*
     Por convenção o Aurelia utiliza App.html e App.js como arquivos default
     sem precisar informar nada.
     Caso não queira o App.html e App.js como o primeiro parametro
     você pode alterá-lo adicionando dois parametros no a.setRoot().

     aurelia.start().then(a=>a.setRoot('hello',document.body));
     */
}