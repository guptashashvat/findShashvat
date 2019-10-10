import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [{path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'experience', component: ExperienceComponent},
{path: 'projects', component: ProjectsComponent},
{path: 'contact', component: ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
