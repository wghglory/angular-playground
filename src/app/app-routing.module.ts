import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionalContentProjectionComponent } from './feature/conditional-content-projection/conditional-content-projection.component';
import { NotFoundComponent } from './shared/ui/not-found/not-found.component';
import { WelcomeComponent } from './core/ui/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'conditional-content-projection',
    component: ConditionalContentProjectionComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
