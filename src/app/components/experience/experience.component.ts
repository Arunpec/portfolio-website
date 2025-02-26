import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experience = {
    jobTitle: "Software Developer",
    company: "Cloudstier Solutions (2023 - Present)",
    responsibilities: [
      "Designed and developed scalable web applications using .NET Core, .NET MVC, and SQL Server.",
      "Optimized database queries and API performance, reducing load time by 30%.",
      "Implemented best coding practices to ensure high-quality and maintainable code.",
      "Collaborated with cross-functional teams to develop and deploy new features.",
      "Continuously learning and integrating new technologies for better efficiency."
    ]
  };
}
