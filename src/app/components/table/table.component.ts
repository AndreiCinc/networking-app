import { Component } from '@angular/core';

export interface PeriodicElement {
  team1: string;
  team2:string;
  position: number;
  score: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, team2: 'Adrian Muntean', team1: 'Paul Pasztor', score:'15-21', date: '2022-11-25'},
  {position: 2, team2: 'Mihai Apreotesei', team1: 'Adrian Varga', score: '7-21', date: '2022-11-25'},
  {position: 3, team2: 'Roger Simpson', team1: 'FLorin Sandor', score: '21-21', date: '2022-11-25'},
  {position: 4, team2: 'Mike Gandalf', team1: 'Nicu Paleru', score: '0-1', date: '2022-11-25'},
  {position: 5, team2: 'Roger Simpson', team1: 'Vlad Bode', score: '21-19', date: '2022-11-25'},
  {position: 6, team2: 'Mike Gondera', team1: 'Ionut Cercel', score: '14-16', date: '2022-11-25'},
  {position: 7, team2: 'Ionut Rosan', team1: 'Alex Irimias', score: '3-14', date: '2022-11-25'},
  {position: 8, team2: 'Cristia Mazilu', team1: 'Cristian Rotaru', score:'6-3', date: '2022-11-25'},
  {position: 9, team2: 'Andrei Cinc', team1: 'Stefan Hincu', score: '11-12', date: '2022-11-25'},
  {position: 10, team2: 'Catalin Rosan', team1: 'Ioan Sabau', score: '7-4', date: '2022-11-25'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'team1', 'team2', 'score','date'];
  dataSource = ELEMENT_DATA;

}
