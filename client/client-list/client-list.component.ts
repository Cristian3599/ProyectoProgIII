import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { ClientService } from 'src/app/services/client.service';

declare var openConfirmationModal: any;

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  p: number = 1;
  clientList: UserModel[] = [];
  codeToRemove: String;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.loadClients();
  }

  loadClients = () => {
    this.clientService.loadAllClients().subscribe(data => {this.clientList = data});
  }

  openConfirmation(code){
    this.codeToRemove = code;
    openConfirmationModal();
  }

  removeElement(){
    this.clientService.deleteClient(this.codeToRemove).subscribe();
    this.loadClients();
  }

}
