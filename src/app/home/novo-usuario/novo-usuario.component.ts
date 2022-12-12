import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NovoUsuarioService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm  =  this.formBuilder.group({
      email:[''],
      fullName:[''],
      userName:[''],
      password:['']
    })
  }

  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    this.newUserService.cadastraNovoUsuario(novoUsuario);
  }
}
