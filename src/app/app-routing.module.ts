import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseComponent } from './choose/choose.component';
import { QuestionsComponent } from './questions/questions.component';
import { Questions20Component } from './questions20/questions20.component';
import { Questions30Component } from './questions30/questions30.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent, pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "questions", component: QuestionsComponent },
  { path: "questions20", component: Questions20Component },
  { path: "questions30", component: Questions30Component },
  { path: "choose", component: ChooseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
