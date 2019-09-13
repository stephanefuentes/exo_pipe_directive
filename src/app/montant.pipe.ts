import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: "montant"
})
export class MontantPipe implements PipeTransform
{

    // le premier parametre correpond a l'element avant le pipe, ensuite c'est aprés le pipe
    transform(nombre: number, symbole = " €")
    {
        return nombre.toLocaleString("fr")  + " " + symbole;
    }



    // transform(value: any, ...args: any[]) {
    //     throw new Error("Method not implemented.");
    // }

}