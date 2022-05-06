import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskCompletatiComponent } from './components/task-completati/task-completati.component';

const routes:Route[]=[
  {
    path:'',
    component: TaskComponent
  },
  {
    path: 'task-completati',
    component: TaskCompletatiComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskCompletatiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
