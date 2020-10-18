import { Component } from '@angular/core';
import { 
  HttpClient, //ส่งข้อมูลจากโมบายไปเซิฟเวอร์
  HttpHeaders, //บอกฟอเมตเอกสารที่ส่ง
  HttpResponse, //รับค่ากลับ
  HttpErrorResponse // ไม่มีการตอบกลับ
} from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username:any
  password:any

  constructor(private http: HttpClient,public alertController: AlertController,private router:Router) {}

  logincheck(){

    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new HttpResponse({ headers: headers});

    let postData = {
      "username": this.username,
      "password": this.password
    };

    let uri = 'http://127.0.0.1/lotto/checklogin.php';

    this.http.post(uri,postData,requestOptions).subscribe(
      data => {
        let json_data:any = data;
        console.log(json_data.result);
        if(json_data.result==1){
          console.log("หี");
          this.presentAlert()
        }
      },error=>{
        alert("error");
      }
    );

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'ยินดีต้อนรับ',
      message: 'คุณ BoyPhongsakorn',
      buttons: [
        {
          text: 'ตกลง',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.router.navigate(['checklotto']);
          }
        }
      ]
    });

    await alert.present();
  }

}
