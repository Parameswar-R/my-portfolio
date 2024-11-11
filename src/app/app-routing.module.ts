import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { DefaultComponentComponent } from './default-component/default-component.component';

const routes: Routes = [
  { path: '', redirectTo:'Intro',pathMatch:'full' },
  {path:'Intro',component:DefaultComponentComponent},
  {path:'About',component:AboutComponent},
{path:'Project',component:ProjectsComponent},
{path:'Skill',component:SkillsComponent},
{path:'Contact',component:ContactComponent},]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
