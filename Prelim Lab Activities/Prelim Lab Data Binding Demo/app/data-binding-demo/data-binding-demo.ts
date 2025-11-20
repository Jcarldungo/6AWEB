import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Required for Two-Way Binding

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding-demo.html',
  styleUrl: './data-binding-demo.css'
})
export class DataBindingDemoComponent {
  // Text Interpolation
  title = "My First App!";
  description = "This is my new Angular Application";
  message = 'Data Binding Demonstration';

  // Property Binding
  // Make sure you have an image at src/assets/logo-angular.png
  imageUrl = 'images.jpg';
  w = 50;
  h = 50;
  altText = 'My King James';

  // Style Binding
  textColor = 'blue';

  // Class Binding
  isHighlighted = true;

  // Two-Way Binding
  yourName = '';

  // Event Binding
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
