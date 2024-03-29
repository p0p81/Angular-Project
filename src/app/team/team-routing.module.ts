import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddPlayerComponent } from "./add-player/add-player.component";
import { PlayersComponent } from "../players/players.component";
import { EditPlayerComponent } from "./edit-player/edit-player.component";

const routes : Routes = [
    { path: 'create-player', component: AddPlayerComponent },
    { path: 'catalog', component: PlayersComponent},
    { path: 'catalog/edit/:playerId', component: EditPlayerComponent },

]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class TeamRoutingModule {}