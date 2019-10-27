import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { TitleComponent } from './template/title/title.component';
import { FilterFormComponent } from './template/filter/filter-form.component';
import { SubtitleComponent } from './template/subtitle/subtitle.component';
import { ItemDescriptionComponent } from './template/item-description/item-description.component';
import { ItemListComponent } from './template/item-list/item-list.component';
import { ListItemComponent } from './template/item-list/list-item/list-item.component';
import { FooterComponent } from './template/footer/footer.component';
import { BasePageComponent } from './page/base-page/base-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule} from '@angular/material';
import { FreeTextFilterComponent } from './template/filter/free-text-filter/free-text-filter.component';
import { ListHeaderComponent } from './template/item-list/list-header/list-header.component';
import { ItemMenuComponent } from './template/item-list/list-item/item-menu/item-menu.component';
import { ItemViewComponent } from './view/item-view/item-view.component';
import { ProcessesViewComponent } from './processes-view/processes-view.component';
import {RouterModule} from '@angular/router';
import { ErrorPageComponent } from './page/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    FilterFormComponent,
    SubtitleComponent,
    ItemDescriptionComponent,
    ItemListComponent,
    ListItemComponent,
    FooterComponent,
    BasePageComponent,
    FreeTextFilterComponent,
    ListHeaderComponent,
    ItemMenuComponent,
    ItemViewComponent,
    ProcessesViewComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot([
      {path: 'processes/process/:processId/step/:stepId/tool/:toolId/parameter:parameterId', component: ItemViewComponent},
      {path: 'processes/process/:processId/step/:stepId/tool/:toolId', component: ItemViewComponent},
      {path: 'processes/process/:processId/step/:stepId', component: ItemViewComponent},
      {path: 'processes/process/:processId', component: ItemViewComponent},
      {path: 'processes', component: ProcessesViewComponent},
      {path: '', redirectTo: '/processes', pathMatch: 'full'},
      {path: '**', component: ErrorPageComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
