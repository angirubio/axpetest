import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon, FormsModule],
})
export class AppComponent {
  
  public options: string[];
  public title: string;
  public rightText: string;
  public selected:any;
  
  constructor() {
    this.options = [
      'Custom Dropdown test',
      'Second Dropdown option',
      'Third Dropdown option',
      'Another one',
      'But not less important',
      'The latest option in the dropdown'];
    this.title = 'Custom Dropdown';
    this.rightText = 'This is a design example!!!!!';
    this.selected = this.options[0];
  }

  onChange(e: any) {
    this.selected = 'Selected: ' + 'Test';
    console.log(e);
  }
}
