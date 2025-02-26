import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: "SEBI – XBRL",
      description: "Maintained regulatory compliance for public establishments.",
      frontend: "Kendo",
      backend: ".NET MVC (.Net 4.5, MVC)",
      database: "MS SQL Server"
    },
    {
      name: "ONE CLICK 2 SERVE",
      description: "Home Services Managing Web & Mobile Application.",
      frontend: "Angular – v12",
      backend: ".NET CORE WEB API (.Net 6, Entity Framework, Dapper)",
      database: "MS SQL Server"
    },
    {
      name: "SV GROUPS",
      description: "Implemented a user-friendly building search application.",
      frontend: "Angular – v12",
      backend: ".NET CORE WEB API (.Net 7.0, Entity Framework, Dapper)",
      database: "MS SQL Server"
    },
    {
      name: "SMART BILL",
      description: "Billing Application for Mobile.",
      frontend: "N/A",
      backend: ".NET CORE WEB API (.Net 3.1, Entity Framework)",
      database: "MS SQL Server"
    }
  ];
}
