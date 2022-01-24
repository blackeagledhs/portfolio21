import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { StudiesComponent } from './pages/studies/studies.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ContactComponent } from './pages/contact/contact.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'aboutme', component: AboutmeComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'studies', component: StudiesComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


