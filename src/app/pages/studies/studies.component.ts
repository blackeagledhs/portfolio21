import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service'

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  liststudies:any;
  constructor(private dataStudies:ServiceService) { }

  ngOnInit(): void {
    this.dataStudies.obtenerDatos().subscribe(data =>{
      this.liststudies = data.studies;  })
  }
}
