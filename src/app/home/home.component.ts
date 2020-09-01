import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HomeService } from './home.service';
import { DomSanitizer } from '@angular/platform-browser';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userslist: any = [];
  file: any;


  constructor(private homeservice: HomeService, private sanitizer: DomSanitizer) { }

  displayedColumns: string[] = ['id', 'name', 'role', 'email', 'phone', 'business', 'covid19EffectOnBusiness'];

  ngOnInit() {
    this.loadAllUsers();
    const blob = new Blob([], { type: 'application/octet-stream' });
  }

  loadAllUsers() {
    this.homeservice.getAllUsers().subscribe(
      data => {

        this.userslist = data;
      },
      error => {

      }
    );
  }
  getexceldata() {
    this.homeservice.getdatainexcel().subscribe(data => {
      saveAs(data, 'Users.xlsx',
        { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })

    },
      error => {

      }
    );
  }


}
