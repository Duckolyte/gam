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
import { ItemPageComponent } from './page/item-page/item-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule} from '@angular/material';
import { FreeTextFilterComponent } from './template/filter/free-text-filter/free-text-filter.component';
import { ListHeaderComponent } from './template/item-list/list-header/list-header.component';
import { ItemMenuComponent } from './template/item-list/list-item/item-menu/item-menu.component';

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
    ItemPageComponent,
    FreeTextFilterComponent,
    ListHeaderComponent,
    ItemMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
