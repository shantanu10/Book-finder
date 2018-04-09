import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { LibraryComponent } from './library/library.component';
import { HeaderComponent } from './header/header.component';
import { PagerComponent } from './pager/pager.component';
import { SharedComponent } from './shared/shared.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    LibraryComponent,
    HeaderComponent,
    PagerComponent,
    SharedComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
