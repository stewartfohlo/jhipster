import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToDoAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ToDoAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ToDoAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToDoAppSharedModule {
  static forRoot() {
    return {
      ngModule: ToDoAppSharedModule
    };
  }
}
