import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-eleves",
  template: `
    <select [(ngModel)]="property">
      <option value="prenom">Prénom</option>
      <option value="nom">Nom</option>
    </select><br />

    <input type="text" placeholder="filtrage ...." [(ngModel)]="filtre" />
    <ul>
      <li *ngFor="let eleve of eleves | filter: property: filtre" fluo>
        {{ eleve.prenom }} {{ eleve.nom }}
      </li>
    </ul>
  `,
  styles: [
    
    `
      .bold {
        font-weight: bold;
      }
    `
  ]
})
export class ElevesComponent {
  filtre = "li";
  property = "prenom";

  eleves = [
    { prenom: "Lior", nom: "Chamla" },
    { prenom: "Magali", nom: "Pernin" },
    { prenom: "Djamel", nom: "Ait Ammar" },
    { prenom: "Joseph", nom: "Dupont" },
    { prenom: "Nico", nom: "La saussice" }
  ];
}
