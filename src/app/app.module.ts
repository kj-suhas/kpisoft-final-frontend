import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar.component';
import { CenterComponent } from './components/center/center.component';
import { RightsidebarComponent } from './components/rightsidebar/rightsidebar.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutComponent } from './components/layout/layout.component';
import { BlogHeaderComponent } from './components/blog-header/blog-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftsidebarComponent,
    CenterComponent,
    RightsidebarComponent,
    BlogsComponent,
    ButtonComponent,
    LayoutComponent,
    BlogHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
