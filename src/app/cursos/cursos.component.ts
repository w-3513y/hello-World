import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor() {
    var service = new CursosService();

    this.nomePortal = service.getPortal();
    this.cursos = service.getCursos();
  }

  ngOnInit(): void {
  }

}
