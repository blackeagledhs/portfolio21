import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  listexperience:any;
  constructor(private dataExperience:ServiceService) { }

  ngOnInit(): void {
    this.dataExperience.obtenerDatos().subscribe(data =>{
      this.listexperience = data.experience;
    })
  }

}
