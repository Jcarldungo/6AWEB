import { Component,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import {DataBindingDemoComponent} from './data-binding-demo/data-binding-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DataBindingDemoComponent,
    HeaderComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
    FooterComponent
  ],
  // These must point to the .component.html and .component.css files!
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prelim Lab Activity 2';
}
