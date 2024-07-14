import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paciente } from 'src/app/interfaces/pacientes.interface';
import { PacientesServiceService } from 'src/app/service/pacientes.service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {


  constructor(private fb: FormBuilder, private PacientesServiceService:PacientesServiceService) {

  }


  ngOnInit(): void {
    this.PacientesServiceService.getObservablePacienteEdit().subscribe(
      pacientePorEditar=>{
        this.myForm.setValue(pacientePorEditar)  // aqui se recibe el paciente que se quiere editar del componente formulario y se setea en el formulario
      }
    )
  }

  get nombreValido() {
    return this.myForm.get('nombre')?.invalid && this.myForm.get('nombre')?.touched

  }
  get propietarioValido() {
    return this.myForm.get('propietario')?.invalid && this.myForm.get('propietario')?.touched

  }
  get emailValido() {
    return this.myForm.get('email')?.invalid && this.myForm.get('email')?.touched

  }
  get fechaValida() {
    return this.myForm.get('fecha')?.invalid && this.myForm.get('fecha')?.touched

  }
  get sintomasValidos() {
    return this.myForm.get('sintomas')?.invalid && this.myForm.get('sintomas')?.touched

  }

  public myForm: FormGroup = this.fb.group({   // datos que se reciben del formulario y validaciones
    id:[''],
    nombre: ['', [Validators.required, Validators.minLength(3)],],
    propietario: ['', [Validators.required],],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],],
    fecha: ['', [Validators.required],],
    sintomas: ['', [Validators.required],],

  })


  get currentPciente():Paciente{
    const paciente=this.myForm.value as Paciente;
    return paciente;
  }

  guardar() {
    if (this.myForm.invalid) {

      Object.values(this.myForm.controls).forEach(control => {
        control.markAsTouched();
      })
     }
    else {
      this.PacientesServiceService.guardarOEditar(this.currentPciente)
      this.myForm.reset();

    }
  }





















}
