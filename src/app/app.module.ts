import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { TitleComponent } from './template/title/title.component';
import { FilterComponent } from './template/filter/filter.component';
import { SubtitleComponent } from './template/subtitle/subtitle.component';
import { ItemDescriptionComponent } from './template/item-description/item-description.component';
import { ItemListComponent } from './template/item-list/item-list.component';
import { ListItemComponent } from './template/list-item/list-item.component';
import { FooterComponent } from './template/footer/footer.component';
import { BasePageComponent } from './page/base-page/base-page.component';
import { ItemPageComponent } from './page/item-page/item-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    FilterComponent,
    SubtitleComponent,
    ItemDescriptionComponent,
    ItemListComponent,
    ListItemComponent,
    FooterComponent,
    BasePageComponent,
    ItemPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
