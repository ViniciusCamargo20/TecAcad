import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/Professor';
import { ProfessorService } from 'src/app/services/Professor.service';

@Component({
  selector: 'app-create-professor',
  templateUrl: './create-professor.component.html',
  styleUrls: ['./create-professor.component.css']
})
export class CreateProfessorComponent implements OnInit {

  constructor(private service: ProfessorService) { }

  Professor: Professor ={
      Nome: "Jose da silva",
      Cpf: "251094"
  
  }


  ngOnInit(): void {
  }

  create(): void {
    // console.log(this.cycle.date);
    this.service.create(this.Professor).subscribe((Professor) => {
      console.log(Professor);
    });
  }

}
