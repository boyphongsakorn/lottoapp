import { Component, ElementRef, OnInit } from '@angular/core';
import { 
  HttpClient, //ส่งข้อมูลจากโมบายไปเซิฟเวอร์
  HttpHeaders, //บอกฟอเมตเอกสารที่ส่ง
  HttpResponse, //รับค่ากลับ
  HttpErrorResponse // ไม่มีการตอบกลับ
} from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checklotto',
  templateUrl: './checklotto.page.html',
  styleUrls: ['./checklotto.page.scss'],
})
export class ChecklottoPage implements OnInit {

  first:any
  nearfirststart:any
  nearfirstend:any
  twoend:any
  threestartone:any
  threestarttwo:any
  threeendone:any
  threeendtwo:any

  constructor(private el: ElementRef,private http: HttpClient,public alertController: AlertController,private router:Router) {
    this.checklotto()
  }

  ngOnInit() {
  }

  checklotto() {
    this.http.get('https://lottsanook.herokuapp.com/?date=16102563',{}).subscribe(
      data => {
        let json_data:any = data;
        //console.log(json_data);
        this.first=json_data[0][1]
        this.nearfirststart=json_data[4][1]
        this.nearfirstend=json_data[4][2]
        this.twoend=json_data[3][1]
        this.threestartone=json_data[1][1]
        this.threestarttwo=json_data[1][2]
        this.threeendone=json_data[2][1]
        this.threeendtwo=json_data[2][2]
        //this.el.nativeElement.innerHTML = json_data;
      },error=>{
        alert("error");
      }
    );
  }

}
