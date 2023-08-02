import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserOverlayComponent } from './components/update-user-overlay/update-user-overlay.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyServiceService } from './shared/my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUserComponent,
    UpdateUserOverlayComponent,
    UserTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [MyServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
