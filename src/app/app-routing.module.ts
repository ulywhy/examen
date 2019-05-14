import { NgModule }             from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule { }
