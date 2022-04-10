import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuotesComponent } from './component/quotes/quotes.component';
import { DetailsComponent } from './component/details/details.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormComponent } from './component/form/form.component';
import { DateCountPipe } from './pipe/date-count';
import { HighlightDirective } from './directive/highlight.directive';




@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    DateCountPipe,
    HighlightDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
