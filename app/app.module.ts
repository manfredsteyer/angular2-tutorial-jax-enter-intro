import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {FlugService} from "./flug/services/flug.service";
import {FlugSuchenComponent} from "./flug/flug-suchen/flug-suchen.component";

@NgModule({
    declarations: [
        FlugSuchenComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    providers: [
        FlugService
    ],
    bootstrap: [
        FlugSuchenComponent
    ]
})
export class AppModule { 
}