import { Component, OnInit } from '@angular/core';
import { 
  HttpClient, //ส่งข้อมูลจากโมบายไปเซิฟเวอร์
  HttpHeaders, //บอกฟอเมตเอกสารที่ส่ง
  HttpResponse, //รับค่ากลับ
  HttpErrorResponse // ไม่มีการตอบกลับ
} from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import { exit } from 'process';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username:any
  password:any
  email:any

  constructor(private http: HttpClient,public alertController: AlertController,private router:Router) { }

  ngOnInit() {
  }

  register(){

    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new HttpResponse({ headers: headers});

    let postData = {
      "username": this.username,
      "password": this.password
    };

    if(this.username==null || this.password==null){
      this.Alert("ชื่อผู้ใช้ หรือ รหัสผ่านไม่ควรว่าง")
      return false;
    }

    let uri = 'http://127.0.0.1/lotto/register.php';

    this.http.post(uri,postData,requestOptions).subscribe(
      data => {
        let json_data:any = data;
        console.log(json_data.result);
        if(json_data.result==1){
          console.log("สมัครเสร็จแล้ว คูบา");
        }
      },error=>{
        alert("error");
      }
    );

  }

  async Alert(text) {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'ผิดพลาด',
      message: text,
      buttons: [
        {
          text: 'ตกลง'
        }
      ]
    });

    alert.present();
  }

}
