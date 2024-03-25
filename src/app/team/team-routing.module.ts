import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddPlayerComponent } from "./add-player/add-player.component";

const routes : Routes = [
    { path: 'create-player', component: AddPlayerComponent },
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class TeamRoutingModule {}