import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

  developer = new Developer("FUENTE", "Nicolas", 40, "Masculin", "It would be too long to tell.", 
  [{ name: "HTML", logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png", site: "https://wise-record.surge.sh"}, {name: "CSS", logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png", site: "https://wise-record.surge.sh"}]);

  constructor() {}; 

}
