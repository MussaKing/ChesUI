import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
// import { HomeComponent } from './home/home.component';
// import { WatchComponent } from './watch/watch.component';
// import { AboutComponent } from './about/about.component';
import { MainRoutingModule } from './main-routing.module';
// import { BlogsComponent } from './blogs/blogs.component';

@NgModule({
  declarations: [MainComponent],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
