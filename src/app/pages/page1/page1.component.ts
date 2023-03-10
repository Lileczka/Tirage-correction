import { Component} from '@angular/core';
import { STUDENTS } from 'src/app/student.mock';
import { StudentService } from 'src/app/student.service';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component  {
  students = STUDENTS; //students egal à mock
 
  
  titre= '🎰 Sélectionner une personne 🎰';
  
  selectedStudent: string = '';
  presentMemoryStudents: string[] = [];
  presentBoyStudents: string[] = [];
  presentGirlStudents: string[] = [];
  selectedStudentsList: string[] = [];
  clonedPresentMemoryStudents: string[] = [];
  constructor(private studentService: StudentService) {}

 

  getRandomStudent(): void {
    // rechercher la liste dans local storage
    const presentMemoryStudentsJson = localStorage.getItem("presentMemoryStudents");
    if (presentMemoryStudentsJson) {
      this.presentMemoryStudents = JSON.parse(presentMemoryStudentsJson);
    } else {
      this.presentMemoryStudents = [];
    }
    
    // cloner la liste de présentation des étudiants
    const clonedPresentMemoryStudents = this.presentMemoryStudents.slice();
    
    console.log('nowa lista'+ clonedPresentMemoryStudents);
  
    // generer un index aléatoire pour selectionner une personne 
    const randomIndex = Math.floor(Math.random() * clonedPresentMemoryStudents.length);

    if (this.selectedStudentsList.includes(clonedPresentMemoryStudents[randomIndex])) {
      clonedPresentMemoryStudents.splice(randomIndex, 1);
    } else {
      // stocker l'étudiant sélectionné
      this.selectedStudent = clonedPresentMemoryStudents[randomIndex];
  
      console.log (clonedPresentMemoryStudents[randomIndex]);
 
    
    // ajouter l'étudiant sélectionné à une nouvelle liste
    //if (!this.selectedStudentsList.includes(clonedPresentMemoryStudents[randomIndex])) {
    //  this.selectedStudentsList.push(clonedPresentMemoryStudents[randomIndex]);}
    //console.log(this.selectedStudentsList);
 // ajouter l'étudiant sélectionné à une nouvelle liste
 this.selectedStudentsList.push(clonedPresentMemoryStudents[randomIndex]);
 console.log(this.selectedStudentsList);
}
  
    this.presentBoyStudents = this.studentService.getPresentBoylStudents(clonedPresentMemoryStudents);
    this.presentGirlStudents = this.studentService.getPresentGirlStudents(clonedPresentMemoryStudents);
  }
}






  

  
  
  
  
  
  
  
  

