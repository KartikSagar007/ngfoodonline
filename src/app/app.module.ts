import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test/test.component';
import { ServerComponent } from './server/server.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent, ServerComponent, HeaderComponent, FooterComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
