import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AsesorService } from 'src/app/services/asesor.service';

declare var openConfirmationModal: any;

@Component({
  selector: 'app-asesor-list',
  templateUrl: './asesor-list.component.html',
  styleUrls: ['./asesor-list.component.css']
})
export class AsesorListComponent implements OnInit {

  p: number = 1;
  asesorList: UserModel[] = [];
  codeToRemove: String;

  constructor(private asesorService: AsesorService) { }

  ngOnInit() {
    this.loadAsesors();
  }

  loadAsesors = () => {
    this.asesorService.loadAllAsesors().subscribe(data => {this.asesorList = data});
  }

  openConfirmation(code){
    this.codeToRemove = code;
    openConfirmationModal();
  }

  removeElement(){
    this.asesorService.deleteAsesor(this.codeToRemove).subscribe();
    this.loadAsesors();
  }
}
