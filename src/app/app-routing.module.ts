import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './about/about.component';
import{ ContactComponent} from './contact/contact.component';
import {EducationComponent} from './education/education.component';
import {HeaderComponent} from './header/header.component';
import { HomeComponent} from './home/home.component';
import { SkillComponent } from './skill/skill.component';



const routes: Routes = [

  {
    path : 'home',
    component:HomeComponent,
    pathMatch:'full'
    
  },
  {
    path : 'about',
    pathMatch: 'full',
    component: AboutComponent
  },
  {
    path : 'skill',
    pathMatch: 'full',
    component: SkillComponent
  },
  {
    path : 'education',
    pathMatch: 'full',
    component: EducationComponent
  },
 {
    path : 'contact',
    pathMatch: 'full',
    component: ContactComponent
  },
{
  path:'',
  redirectTo:'home',
  pathMatch:'full'
}
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Restores scroll position after navigation
  anchorScrolling: 'enabled', // Enables fragment scrolling
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
