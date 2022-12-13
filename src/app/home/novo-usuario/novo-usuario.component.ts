import { usuarioSenhaIguais } from './usuario-senha-iguais.validator';
import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minusculo.validatos';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService
     ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      fullName : ['', [Validators.required, Validators.minLength(4)]],
      userName : ['', [Validators.required, minusculoValidator], [this.usuarioExistenteService.usuarioJaExiste()]],
      password : ['', Validators.required],
    },
    {
      validators : [usuarioSenhaIguais]
    });
  }

  cadastrar() {
    // const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    // this.newUserService.cadastraNovoUsuario(novoUsuario);
  }
}
