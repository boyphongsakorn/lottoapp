import { Component, ElementRef, OnInit } from '@angular/core';
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

  pageone:any = 9
  pagetwo:any = 1
  pagethree:any = 1
  pagefour:any = 1

  lastlotttext:any

  constructor(private el: ElementRef,private http: HttpClient,public alertController: AlertController,private router:Router,private storage:Storage) {
    this.checklotto()
    this.storage.get('username').then((val) => {
      console.log('Your age is', val);
    });  
    //alert(JSON.stringify(this.storage.get('username')))
  }

  ngOnInit() {
  }

  checklotto() {
    this.http.get('https://lottsanook.herokuapp.com/god.php',{}).subscribe(
      data => {
        let json_data:any = data;
        //console.log(json_data);
        //this.el.nativeElement.innerHTML = json_data;
        this.http.get('https://lottsanook.herokuapp.com/?date='+json_data[json_data.length-1]+'&from',{}).subscribe(
          data => {
            let json_data:any = data;
            //console.log(json_data);
            this.lastlotttext=json_data[0][0]
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
      },error=>{
        alert("error");
      }
    );
  }

  bgtp(pagename){ //buttongotopage
    if(pagename==1){
      if(this.pageone!=9){
        this.pageone = 9
        this.pagetwo = 1
        this.pagethree = 1
        this.pagefour = 1
      }else{
        this.router.navigate(['sharenumber']);
      }
    } else if(pagename==2) {
      if(this.pagetwo!=9){
        this.pageone = 1
        this.pagetwo = 9
        this.pagethree = 1
        this.pagefour = 1
      }else{
        this.router.navigate(['numbertopfour']); 
      }
    } else if(pagename==3) {
      if(this.pagethree!=9){
        this.pageone = 1
        this.pagetwo = 1
        this.pagethree = 9
        this.pagefour = 1
      }else{
        this.router.navigate(['history']);
      }
    }else{
      if(this.pagefour!=9){
        this.pageone = 1
        this.pagetwo = 1
        this.pagethree = 1
        this.pagefour = 9
      }else{
        this.router.navigate(['findnumber']);
      }
    }
  }

}
