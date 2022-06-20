import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];
  nome : String;
  constructor(private usuarioService: UsuarioService) {


  }

  ngOnInit(): void {
    this.usuarioService.getUsuarioList().subscribe(data => {
      this.usuarios = data;
    });

  }

  deletarUsuario(id:Number){
    this.usuarioService.deletarUsuario(id).subscribe(data => {
      console.log("Retorno do método delete : " + data);
    });
    this.usuarioService.getUsuarioList().subscribe(data => {
      this.usuarios = data;
    });
  }

  buscarPorNome(){
    this.usuarioService.consultarUsuario(this.nome).subscribe(data =>{
      this.usuarios = data;
    });
    this.nome = "";
  }



}
