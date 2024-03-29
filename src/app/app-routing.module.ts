import { ProductsComponent } from './layout/painel/products/products.component';
import { DashboardComponent } from './layout/painel/dashboard/dashboard.component';
import { ContactComponent } from './layout/contact/contact.component';
import { AuthGuard } from './shared/auth.guard';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { PainelComponent } from './layout/painel/painel.component';
import { CreateAgendamentoComponent } from './layout/painel/products/create-agendamento/create-agendamento.component';
import { ListAgendamentoComponent } from './layout/painel/products/list-agendamento/list-agendamento.component';


const routes: Routes = [
{
  path:'painel',
  component: PainelComponent,
  children:[
    {path:'dashboard', component: DashboardComponent},
    // {path:'**', redirectTo:'', pathMatch: 'full'},
    {path:'agendamento', component: ProductsComponent, children: [
      {path:'list', component:ListAgendamentoComponent}
    ]},
  ],
  canActivate:[AuthGuard],
},
{path:'create-agendamento', component: CreateAgendamentoComponent},
{
  path:'',
  component:HomeComponent,
},
{
  path:'',
  component:AuthenticationComponent,
  children:[
    // {path:'**', redirectTo:'', pathMatch: 'full'},
    {path:'login', component:LoginComponent},
    {path:'create-account', component:CreateAccountComponent},
  ]
},
{
  path:'contato',
  component: ContactComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
