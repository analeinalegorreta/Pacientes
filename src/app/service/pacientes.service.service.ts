import { Injectable } from '@angular/core';
import { Paciente } from '../interfaces/pacientes.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesServiceService {

  private idPaciente: number = 0
  private detallePaciente: Paciente[] = [];
  private dataSubjectPaciente = new Subject<Paciente>();

  constructor() { }

  getObservablePacienteEdit(): Observable<Paciente> {   // Se crea esta funcion para poder enviar datos a otro componente
    return this.dataSubjectPaciente.asObservable()
  }

  private addPaciente(paciente: Paciente) {
    this.idPaciente++
    paciente.id = this.idPaciente
    this.detallePaciente.push(paciente);
    console.log(this.detallePaciente)
  }


  getdetallePaciente() {
    return this.detallePaciente
  }

 preparandoEdicionPaciente(paciente: Paciente) {

    this.dataSubjectPaciente.next(paciente)

  }


  guardarOEditar(paciente: Paciente){
    let resp = this.detallePaciente.findIndex(obj => obj.id === paciente.id);

    if(resp>=0){
      this.detallePaciente[resp]=paciente
    }else{
      this.addPaciente(paciente)
    }






  }



}
