import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  listcontact:any;
  constructor(private dataContact:ServiceService) { }

  ngOnInit(): void {
    this.dataContact.obtenerDatos().subscribe(data =>{
      this.listcontact = data.contact;
    })
  }

}
