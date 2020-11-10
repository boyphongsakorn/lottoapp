import { Component, OnInit } from '@angular/core';
import { 
  HttpClient, //ส่งข้อมูลจากโมบายไปเซิฟเวอร์
  HttpHeaders, //บอกฟอเมตเอกสารที่ส่ง
  HttpResponse, //รับค่ากลับ
  HttpErrorResponse // ไม่มีการตอบกลับ
} from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-findnumber',
  templateUrl: './findnumber.page.html',
  styleUrls: ['./findnumber.page.scss'],
})
export class FindnumberPage implements OnInit {

  finddateall:any
  numberfind:any

  constructor(private http: HttpClient,public alertController: AlertController,private router:Router) { }

  finder(){

    let uri = 'https://lottsanook.herokuapp.com/finddol.php?search='+this.numberfind;

    this.http.get(uri).subscribe(
      data => {
        let json_data:any = data;
        //console.log(json_data);
        //if(json_data.result==1){
          //this.presentAlert(json_data.errortext)
          //alert("เย้");
        this.finddateall = json_data
        //}
      },error=>{
        alert(JSON.stringify(error));
      }
    );

  }

  ngOnInit() {
  }

}
