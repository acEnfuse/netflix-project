import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  members = [
    {id: '1', title: 'Conan The Barbarian', 
    year: '1982', rating: 'R', runtime: '2h 6min', genre: 'Action, Adventure, Fantasy',
    description: 'The sword-weilding warrior seeks vengence on the cult leader \
    who enslaved him and massacred his village in this fantasy-action classic.'},
    {id: '2', title: 'Mad Max 2: The Road Warrior', 
    year: '1982', rating: 'R', runtime: '1h 35min', genre: 'Action, Adventure, Fantasy',
    description: 'Mad Max joins forces with nuclear holocaust survivors to defend an \
    oil refinery under siege from a ferocious, marauding horde that plunders the land \
    for gasoline.'},
    {id: '3', title: 'Blade Runner', 
    year: '1982', rating: 'R', runtime: '1h 57min', genre: 'Science Fiction, Action',
    description: 'Rick Deckard prowls the steel-and-microchip jungle of the \
    21st Century Los Angeles, stalking genetically made criminal replicants. His \
    assignment: kill them.'},
    {id: '4', title: 'The Holy Mountain', 
    year: '1973', rating: 'Unrated', runtime: '1h 53min', genre: 'Surrealism',
    description: 'The scandal of the 1973 Cannes Film Festival, writer/director \
    Alejandro Jodorowsky\'s flood of sacrilegious imagery and existential \
    symbolism is a surreal sojourn for enlightenment pitting illusion against truth.'},
    {id: '5', title: 'Escape From New York', 
    year: '1981', rating: 'R', runtime: '1h 39min', genre: 'Action, Science Fiction',
    description: 'In 1997, when the U.S. president crashes into Manhattan, now a \
    giant maximum security prison, a convicted bank robber is sent to rescue him.'},
    {id: '6', title: 'Robo Cop', 
    year: '1987', rating: 'R', runtime: '1h 43min', genre: 'Action, Drama, Suspense',
    description: 'There\'s a new law enforcer in town... and he\'s half man, half \
    machine! From director Paul Verhoeven comes this classic, high-powered, \
    sci-fi fantasy about an indestuctable high-tech policeman who dishes out \
    justice at every turn. Peter Weller stars.'},
    {id: '7', title: 'The Rocky Horror Picture Show', 
    year: '1975', rating: 'R', runtime: '1h 38min', genre: 'Comedy, Arts, \
    Entertainment, Culture, and Science Fiction',
    description: 'Part campy musical, part horror film, the movie details the \
    travails of a squeaky clean couple stranded at a creepy castle where the \
    inhabitants sing and dance through a bacchanalian romp of murder, \
    bisexuality and cannibalism.'},
    {id: '8', title: 'Repo Man', 
    year: '1982', rating: 'R', runtime: '1h 32min', genre: 'Comedy, Drama, \
    Science Fiction, Suspense',
    description: 'Emilio Estavez and Harry Dean Stanton team up to prove that \
    anything worth having is worth stealing back in this non-stop action-comedy. \
    After frustrated punk rocker Otto Maddox (Estavez) quits his dead-end \
    supermarket job, he\'s hired by Bud (Stanton) to work as an apprentice repo \
    man. In no time, the rookie is caught up in a series of off-the-wall \
    adventures involving government agents, UFO cultists, hired thugs and a \
    lobotomized nuclear scientist, culminating in the search for and incredibly \
    valuable \'64 Chevy containing a secret that can change the course of \
    civilization overnight! An explosive action packed cult classic that \
    combines the seedy underworld of car repossession with the quirky realm \
    of science fiction'},
  ]

  constructor(public dialog: MatDialog) {}

  openDialog({title, year, rating, runtime, genre, description}) {

    this.dialog.open(ModalComponent, {
      data: {
        title, year, rating, runtime, genre, description
      }
    });
  }
}
