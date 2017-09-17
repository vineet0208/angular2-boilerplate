import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import './rxjs-extensions';
import {routes} from './routes';
import {RouterModule} from '@angular/router';
import {DatePipe} from '@angular/common';
import {DatepickerModule} from 'ngx-bootstrap/datepicker';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {HttpModule} from '@angular/http';


//modular components
import { NavigationBarComponent, AddUserComponent, 
          AddUserService, ShowUsersComponent,
        ShowUsersService } from './components';

//common components
import { TypeAheadComponent, DatePickerComponent,
          LoaderComponent } from './common';

//directives
import {NumberOnlyDirective} from './directives';

//services
import {PostService, GetService} from './services';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoaderComponent,
    AddUserComponent,
    ShowUsersComponent,
    TypeAheadComponent,
    DatePickerComponent,
    NumberOnlyDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    DatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpModule
  ],
  providers: [
    DatePipe,
    PostService,
    AddUserService,
    ShowUsersService,
    GetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
