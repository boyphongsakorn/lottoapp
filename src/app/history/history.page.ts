import { Component, OnInit } from '@angular/core';
import { 
  HttpClient, //ส่งข้อมูลจากโมบายไปเซิฟเวอร์
  HttpHeaders, //บอกฟอเมตเอกสารที่ส่ง
  HttpResponse, //รับค่ากลับ
  HttpErrorResponse // ไม่มีการตอบกลับ
} from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  username:any
  list:any

  constructor(private http: HttpClient,public alertController: AlertController,private router:Router,private storage:Storage) {
    this.storage.get('username').then((val) => {
      this.history(val)
    });
  }

  history(user) {

    let uri = 'http://127.0.0.1/lotto/history.php?user='+user;

    this.http.get(uri,{}).subscribe(
      data => {
        let json_data:any = data;
        //console.log(json_data);
        this.list = data;
        console.log(data);
        //this.el.nativeElement.innerHTML = json_data;
      },error=>{
        alert("error");
      }
    );
  }

  ngOnInit() {
  }

}
