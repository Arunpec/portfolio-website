import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { category: "Backend", items: [".NET Core", ".NET MVC", "Web API", "Blazor"] },
    { category: "Frontend", items: ["Angular", "Bootstrap"] },
    { category: "ORM & Databases", items: ["Entity Framework Core","Dapper", "MS SQL", "MySQL", "PostgreSQL"] },
    { category: "DevOps & Deployment", items: ["Docker"] }
  ];
}
