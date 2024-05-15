import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "@pages/home/home.component";
import { CalendarComponent } from "@pages/calendar/calendar.component";
import { DchancelleryComponent } from "@pages/dchancellery/dchancellery.component";
import { ElearningComponent } from "@pages/elearning/elearning.component";

const routeConfig: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Main",
        data: {title: "Main"}
    },
    {
        path: "calendar",
        component: CalendarComponent,
        title: "Calendar",
        data: {title: "Calendar"}
    },
    {
        path: "dchancellery",
        component: DchancelleryComponent,
        title: "Digital Chancellery",
        data: {title: "Digital Chancellery"}
    },
    {
        path: "elearning",
        component: ElearningComponent,
        title: "E Learning",
        data: {title: "E Learning"}

    }
];

export default routeConfig;
