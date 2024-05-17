import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "@pages/home/home.component";
import { CalendarComponent } from "@pages/calendar/calendar.component";
import { DchancelleryComponent } from "@pages/dchancellery/dchancellery.component";
import { ElearningComponent } from "@pages/elearning/elearning.component";

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

export default routeConfig;
