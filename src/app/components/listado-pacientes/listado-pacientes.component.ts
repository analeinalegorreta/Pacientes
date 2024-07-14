import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/interfaces/pacientes.interface';
import { PacientesServiceService } from 'src/app/service/pacientes.service.service';

@Component({
  selector: 'app-listado-pacientes',
  templateUrl: './listado-pacientes.component.html',
  styleUrls: ['./listado-pacientes.component.css']
})
export class ListadoPacientesComponent {


  constructor(private PacientesServiceService: PacientesServiceService) { }

  ngOnInit(): void {

  }

  getdetallePaciente() {
    return this.PacientesServiceService.getdetallePaciente()
  }


  editarPaciente(paciente:Paciente) {
     this.PacientesServiceService.preparandoEdicionPaciente(paciente)
  }

  eliminarPaciente(paciente:Paciente) {
    this.PacientesServiceService.eliminarPaciente(paciente)
 }


}
