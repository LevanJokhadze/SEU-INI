import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '@pages/calendar/calendar.component';
import { DchancelleryComponent } from '@pages/dchancellery/dchancellery.component';
import { ElearningComponent } from '@pages/elearning/elearning.component';
import { HomeComponent } from '@pages/home/home.component';

const routeConfig: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "მთავარი",
    data: {title: "მთავარი"}
},
{
    path: "calendar",
    component: CalendarComponent,
    title: "კალენდარი",
    data: {title: "კალენდარი"}
},
{
    path: "dchancellery",
    component: DchancelleryComponent,
    title: "ელ. კანცელარია",
    data: {title: "ელ. კანცელარია"}
},
{
    path: "elearning",
    component: ElearningComponent,
    title: "ელ. სწავლება",
    data: {title: "ელ. სწავლება"}

}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
