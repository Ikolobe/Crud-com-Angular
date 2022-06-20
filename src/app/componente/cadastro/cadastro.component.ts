import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public usuario : Usuario = new Usuario();

  vazio : boolean = false;

  constructor(private usuarioService: UsuarioService, private routeActive : ActivatedRoute) {

  }



  ngOnInit(): void {
    let id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null){
      this.usuarioService.getUsuarioId(id).subscribe(data =>{
        this.usuario = data;
      })
    }
    else {
      this.vazio = true;
    }
  }



  cadastrarUsuario(){
    if(this.vazio = true){
      this.usuarioService.cadastrarUsuario(this.usuario).subscribe(data =>{
      this.usuario = data;
    });
    this.novo();

  }else{
    this.usuarioService.atualizarUsuario(this.usuario).subscribe(data =>{
      this.usuario = data;
    });
    this.novo();

  }
  }

  novo(){
    this.usuario = new Usuario();
  }

}
