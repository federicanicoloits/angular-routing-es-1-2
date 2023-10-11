import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProfiloComponent } from "./profilo/profilo.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "home", component: HomeComponent },
            { path: "profilo", component: ProfiloComponent },
            { path: "", redirectTo: "/home", pathMatch: "full" },
        ]),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
