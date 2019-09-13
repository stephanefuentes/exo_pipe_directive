import { Pipe } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe {
  transform(arr: any[], property: string, filter = "") {
    return arr.filter(function(element) {
        if (element[property].toLowerCase().includes(filter.toLowerCase())) {
          return true;
        }


    //   if (
    //     element.prenom.toLowerCase().includes(filter.toLowerCase()) ||
    //     element.nom.toLowerCase().includes(filter.toLowerCase())
    //   ) {
    //     return true;
    //   }

      return false;
    });
  }
}
