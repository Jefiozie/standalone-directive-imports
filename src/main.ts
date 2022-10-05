import { importProvidersFrom, OnInit } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot([]))],
}).catch(console.error);
