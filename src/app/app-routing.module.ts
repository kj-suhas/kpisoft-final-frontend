import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent},
  {path: 'blogs', component: BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
