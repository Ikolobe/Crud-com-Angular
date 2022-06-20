import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { UsuarioComponent } from './componente/usuario/usuario.component';
import { CadastroComponent } from './componente/cadastro/cadastro.component';


export const appRouters: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: '', component: LoginComponent },
{ path: 'usuarioList', component: UsuarioComponent},
{ path: 'cadastro' , component: CadastroComponent},
{ path: 'cadastro/:id', component : CadastroComponent}
];

export const routes : ModuleWithProviders<any> = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }