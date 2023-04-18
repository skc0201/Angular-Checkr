import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader/loader.component";

@NgModule({
    declarations:[
      LoaderComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
      LoaderComponent,
      CommonModule,
    ],
    entryComponents:[LoaderComponent]
})
export class SharedModule {}
