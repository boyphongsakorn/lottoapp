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
  selector: 'app-numbertopfour',
  templateUrl: './numbertopfour.page.html',
  styleUrls: ['./numbertopfour.page.scss'],
})
export class NumbertopfourPage implements OnInit {

  alltopfour:any

  constructor(private http: HttpClient,public alertController: AlertController,private router:Router,private storage:Storage) {
    this.topfour()
  }

  topfour() {
    this.http.get('http://127.0.0.1/lotto/topfour.php').subscribe(
      data => {
        let json_data:any = data;
        //console.log(json_data);
        //this.el.nativeElement.innerHTML = json_data;
        this.alltopfour=json_data
        console.log(json_data)
      },error=>{
        alert("error");
      }
    );
  }

  ngOnInit() {
  }

}
