import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MjpComponent } from './mjp/mjp.component';
import { MatrizComponent } from './matriz/matriz.component';
import { SntritaComponent } from './sntrita/sntrita.component';
import { SjoComponent } from './sjo/sjo.component';
import { ParoquiaComponent } from './paroquia/paroquia.component';
import { EventosComponent } from './eventos/eventos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component'


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
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
