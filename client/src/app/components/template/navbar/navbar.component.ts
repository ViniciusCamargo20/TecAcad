import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { AccountService } from '../../../services/account.service';
import { User } from '../../../models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  isAluno: boolean;
  isProfessor: boolean;
  isStaff: boolean;

  constructor(
    private router: Router,
    private location: Location,
    private accountService: AccountService) {
      this.user = this.accountService.userValue;
      this.isAluno = this.accountService.isAluno;
      this.isProfessor = this.accountService.isProfessor;
      this.isStaff= this.accountService.isStaff;
  }

  ngOnInit(): void {
  }

  //acesso a rotas do aluno
  navigateToListAluno(): void {
    this.router.navigate(['aluno/list']);
  }
  navigateToCreateAluno(): void {
    this.router.navigate(['aluno/create']);
  }

  //acesso a rotas de atividade
  navigateToListAtividade(): void {
    this.router.navigate(['atividade/list']);
  }
  navigateToCreateAtividade(): void {
    this.router.navigate(['atividade/create']);
  }

  //acesso a rotas de mensalidade
  navigateToListMensalidade(): void {
    this.router.navigate(['mensalidade/list']);
  }

  //acesso a rotas de professor
  navigateToListProfessor(): void {
    this.router.navigate(['professor/list']);
  }
  navigateToCreateProfessor(): void {
    this.router.navigate(['professor/create']);
  }

  //acesso a rotas de treino

  backClicked() {
    this.location.back();
  }

  logout() {
    this.accountService.logout();
}

}
