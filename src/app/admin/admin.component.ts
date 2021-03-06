import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Router } from '@angular/router';

import { SortPlayersPipe } from '../shared/sort-players.pipe';
import { Player } from '../players/player.model';
import { PlayerService } from '../players/player.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // players: FirebaseListObservable<any>;
  // player: Player;
  // gender = 'Männer';

  constructor(private db: AngularFireDatabase, private pService: PlayerService, private router: Router) {
    // this.players = this.db.list('/men');
   }

  ngOnInit() {
  }

  // onMale() {
  //   this.players = this.db.list('/men');
  //   this.gender = 'Männer';
  // }

  // onFemale() {
  //   this.players = this.db.list('/women');
  //   this.gender = 'Frauen';
  // }

  // onEdit(player: Player, key: string) {
  //   this.pService.setPlayer(player, key);
  //   this.router.navigate(['players/edit']);
  // }

}
