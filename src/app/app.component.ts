import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  title = 'AcceptDynamicData';
  formElementTypes = ['Single Valued Element', 'Multi Valued Element', 'Key-Valued Element']
  formName = "";
  selectedElement = "";
  data: Map<string, object> = new Map();

  ngOnInit(): void {

  }

  addElement() {
    if (this.selectedElement == 'Single Valued Element') {
      console.log(this.selectedElement);
    } else if (this.selectedElement == 'Multi Valued Element') {

    } else if (this.selectedElement == 'Key-Valued Element') {

    }
  }

  saveModel() {

  }
}
