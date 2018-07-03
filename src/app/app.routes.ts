import {Routes} from '@angular/router'

import {ParoquiaComponent} from './paroquia/paroquia.component'
import {MjpComponent} from './mjp/mjp.component'
import {SntritaComponent} from './sntrita/sntrita.component'
import {SjoComponent} from './sjo/sjo.component'
import {MatrizComponent} from './matriz/matriz.component'
import {EventosComponent} from './eventos/eventos.component'
import {CadastrarComponent} from './cadastrar/cadastrar.component'
import { LoginComponent } from './login/login.component';


export const ROUTES: Routes = [

    {path: '', component: ParoquiaComponent},
    {path: 'meninojesus', component: MjpComponent},
    {path: 'santarita', component: SntritaComponent},
    {path: 'saojose', component: SjoComponent},
    {path: 'matriz', component: MatrizComponent},
    {path: 'eventos', component: EventosComponent},
    {path: 'cadastro', component: CadastrarComponent},
    {path: 'login', component: LoginComponent}
]