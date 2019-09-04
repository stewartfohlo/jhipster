import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { ToDoAppSharedModule } from 'app/shared';
import {
  StatusComponent,
  StatusDetailComponent,
  StatusUpdateComponent,
  StatusDeletePopupComponent,
  StatusDeleteDialogComponent,
  statusRoute,
  statusPopupRoute
} from './';

const ENTITY_STATES = [...statusRoute, ...statusPopupRoute];

@NgModule({
  imports: [ToDoAppSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [StatusComponent, StatusDetailComponent, StatusUpdateComponent, StatusDeleteDialogComponent, StatusDeletePopupComponent],
  entryComponents: [StatusComponent, StatusUpdateComponent, StatusDeleteDialogComponent, StatusDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToDoAppStatusModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
