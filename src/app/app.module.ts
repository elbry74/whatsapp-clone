import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { LoginComponent } from './components/login/login.component';
import { ChatAreaComponent } from './components/main-container/chat-area/chat-area.component';
import { SidebarComponent } from './components/main-container/sidebar/sidebar.component';
import { SidebarContentComponent } from './components/main-container/sidebar/sidebar-content/sidebar-content.component';
import { ChatDefaultPageComponent } from './components/main-container/chat-area/chat-default-page/chat-default-page.component';
import { ChatRoomComponent } from './components/main-container/chat-area/chat-room/chat-room.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FirestoreModule} from '@angular/fire/firestore';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    LoginComponent,
    ChatAreaComponent,
    SidebarComponent,
    SidebarContentComponent,
    ChatDefaultPageComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
