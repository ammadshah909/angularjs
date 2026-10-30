import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Student {
  student_id : number,
  student_name : string,
  student_city : string,
  isActive : boolean
}

@Component({
  imports: [CommonModule],
  selector: 'app-studenttables',
  styleUrl: './studenttables.css',
  templateUrl: './studenttables.html',
})
export class Studenttables {
  studentsList : Student[] = [
    { student_id: 1, student_name: "Muhammad Khan", student_city: "Gujranwala", isActive: false },
    { student_id: 2, student_name: "Ammad Shah", student_city: "Karachi", isActive: true },
    { student_id: 3, student_name: "Hassan", student_city: "Sukkar", isActive: false },
    { student_id: 4, student_name: "Ambreen", student_city: "Abbottabad", isActive: true }
  ];
}
