import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service'


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  listaboutme:any;
  constructor(private dataAboutme:ServiceService) { }

  ngOnInit(): void {
    this.dataAboutme.obtenerDatos().subscribe(data =>{
      this.listaboutme = data.aboutme;
    })
  }

}
