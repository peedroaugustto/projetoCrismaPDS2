import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MjpComponent } from './mjp/mjp.component';
import { MatrizComponent } from './matriz/matriz.component';
import { SntritaComponent } from './sntrita/sntrita.component';
import { SjoComponent } from './sjo/sjo.component';
import { ParoquiaComponent } from './paroquia/paroquia.component';
import { EventosComponent } from './eventos/eventos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MjpComponent,
    MatrizComponent,
    SntritaComponent,
    SjoComponent,
    ParoquiaComponent,
    EventosComponent,
    CadastrarComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
