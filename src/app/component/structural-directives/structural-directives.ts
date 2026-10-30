import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, RouterLink,FormsModule],
  selector: 'app-structural-directives',
  styleUrl: './structural-directives.css',
  templateUrl: './structural-directives.html',
})
export class StructuralDirectives {
  isDiv1Visible : boolean = true;
  num1 : number = 77
   num2 : number = 33
   cities : string[] = ["Karachi", "Lahor", "peshawar", "Islamabad"]

  hidediv1() : void {
    this.isDiv1Visible = false
  }
  showDiv1() : void {
    this.isDiv1Visible = true
  }
}
