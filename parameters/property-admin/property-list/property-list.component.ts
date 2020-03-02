import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/models/property.model';
import { PropertyService } from 'src/app/services/property.service';

declare var openConfirmationModal: any;

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  p: number = 1;
  propertyList: PropertyModel[] = [];
  codeToRemove: String;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties = () => {
    this.propertyService.loadAllProperties().subscribe(data => {this.propertyList = data});
  }

  openConfirmation(code){
    this.codeToRemove = code;
    openConfirmationModal();
  }

  removeElement(){
    this.propertyService.deleteProperty(this.codeToRemove).subscribe();
    this.loadProperties();
  }
}
