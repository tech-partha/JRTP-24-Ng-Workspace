import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GreeComponent } from './gree/gree.component';
import { CourseComponent } from './course/course.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet,GreeComponent,CourseComponent]
})
export class AppComponent {
  title = 'app2';
}
