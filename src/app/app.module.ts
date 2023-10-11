import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { HomeComponent } from "./home/home.component";
import { ProfiloComponent } from "./profilo/profilo.component";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
    ],
    declarations: [AppComponent, HomeComponent, ProfiloComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
