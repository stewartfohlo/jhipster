import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then(m => m.ToDoAppTaskModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.ToDoAppCategoryModule)
      },
      {
        path: 'status',
        loadChildren: () => import('./status/status.module').then(m => m.ToDoAppStatusModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToDoAppEntityModule {}
