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
  selector: 'app-sharenumber',
  templateUrl: './sharenumber.page.html',
  styleUrls: ['./sharenumber.page.scss'],
})
export class SharenumberPage implements OnInit {

  username:any
  numberbuy:any
  numbertype:any

  constructor(private http: HttpClient,public alertController: AlertController,private router:Router,private storage:Storage) {
    this.storage.get('username').then((val) => {
      this.username = val;
    });
  }

  putnumber(){

    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new HttpResponse({ headers: headers});

    let postData = {
      "username": this.username,
      "numberbuy": this.numberbuy,
      "numbertype": this.numbertype
    };

    let uri = 'http://127.0.0.1/lotto/numberbuy.php';

    this.http.post(uri,postData,requestOptions).subscribe(
      data => {
        let json_data:any = data;
        console.log(json_data.result);
        if(json_data.result==1){
          this.presentAlert("เรียบร้อย","บันทึกข้อมูลเรียบร้อยแล้ว")
          this.router.navigate(['checklotto']);
          //alert("เย้");
        }else{
          this.presentAlert("เกิดข้อผิดพลาด",json_data.errortext)
        }
      },error=>{
        this.presentAlert("เกิดข้อผิดพลาด","ไม่ได้เลือกประเภท หรือ ไม่ได้ใส่เลข")
        //alert(JSON.stringify(error));
      }
    );

  }

  async presentAlert(headertext,errortext) {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: headertext,
      message: errortext,
      buttons: [
        {
          text: 'ตกลง'
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
