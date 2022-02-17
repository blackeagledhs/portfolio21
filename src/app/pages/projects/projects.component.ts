import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service'


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  listprojects:any;
  constructor(private dataProjects:ServiceService) { }

  ngOnInit(): void {
    this.dataProjects.obtenerDatos().subscribe(data =>{
      this.listprojects = data.projects;
    })
  }

}
