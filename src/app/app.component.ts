import { Component, OnInit } from "@angular/core";
import { of, Observable } from "rxjs";

@Component({
  selector: "app-root",
  template: `
    {{ phrase | slice: 0:10 }}

    <p>{{ prix | montant: "$" }}</p>

    <ul>
      <li *ngFor="let nombre of nombres | async | slice: 0:2">{{ nombre | montant }}</li>
    </ul>

    <app-eleves></app-eleves>
    
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  nombres: Observable<number[]>;
  phrase = "Unephraseàlacon";

  prix = 1245.49;

  ngOnInit() {
    this.nombres = this.getObservable();
  }

  getObservable() {
    return of([10, 20, 30, 40]);
  }
}
