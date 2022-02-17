import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service'


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  listskills:any;
  constructor(private dataSkills:ServiceService) { }

  ngOnInit(): void {
    this.dataSkills.obtenerDatos().subscribe(data =>{
      this.listskills = data.skills;
    })
  }

}
