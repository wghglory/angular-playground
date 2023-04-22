import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionalContentProjectionComponent } from './feature/conditional-content-projection/conditional-content-projection.component';
import { NotFoundComponent } from './shared/ui/not-found/not-found.component';

const routes: Routes = [
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
