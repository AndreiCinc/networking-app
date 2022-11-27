import { Component } from '@angular/core';


export interface PeriodicElement {
  team1: string;
  team2: string;
  position: number;
  wins: string;
  date: string;
  loses:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    team2: '22',
    team1: 'Paul Pasztor',
    wins: '16',
    loses: '6',
    date: '2022-11-25',
  },
  {
    position: 2,
    team2: '18',
    team1: 'Adrian Varga',
    wins: '14',
    loses: '4',
    date: '2022-11-25',
  },
  {
    position: 3,
    team2: '16',
    team1: 'FLorin Sandor',
    wins: '12',
    loses: '4',
    date: '2022-11-25',
  },
  {
    position: 4,
    team2: '14',
    team1: 'Nicu Paleru',
    wins: '11',
    loses: '3',
    date: '2022-11-25',
  },
  {
    position: 5,
    team2: '17',
    team1: 'Vlad Bode',
    wins: '12',
    loses: '5',
    date: '2022-11-25',
  },
  {
    position: 6,
    team2: '14',
    team1: 'Ionut Cercel',
    wins: '10',
    loses: '4',
    date: '2022-11-25',
  },
  {
    position: 7,
    team2: '11',
    team1: 'Alex Irimias',
    wins: '8',
    loses: '3',
    date: '2022-11-25',
  },
  {
    position: 8,
    team2: '15',
    team1: 'Catalin Rosan',
    wins: '9',
    loses: '6',
    date: '2022-11-25',
  },
  {
    position: 9,
    team2: '10',
    team1: 'Andrei Cinc',
    wins: '7',
    loses: '3',
    date: '2022-11-25',
  },
  {
    position: 10,
    team2: '8',
    team1: 'Ioan Sabau',
    wins: '5',
    loses: '3',
    date: '2022-11-25',
  },
];


@Component({
  selector: 'app-pool-table',
  templateUrl: './pool-table.component.html',
  styleUrls: ['./pool-table.component.scss']
})
export class PoolTableComponent {
  displayedColumns: string[] = ['position', 'team1', 'team2', 'wins','loses', 'date'];
  dataSource = ELEMENT_DATA;
}
