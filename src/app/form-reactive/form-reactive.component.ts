import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  tipos = ['Apartamento', 'Casa'];

  residencia = {nome: 'Casa Amarela', tipo: this.tipos[0] };

  residenciaForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.residenciaForm = new FormGroup({
      nome: new FormControl(this.residencia.nome, [
        Validators.required,
        Validators.minLength(4)
      ]),
      tipo: new FormControl(this.residencia.tipo, Validators.required)
    });
  }

  get nome() { return this.residenciaForm.get('nome')!; }
  
  get tipo() { return this.residenciaForm.get('tipo')!; }

}
