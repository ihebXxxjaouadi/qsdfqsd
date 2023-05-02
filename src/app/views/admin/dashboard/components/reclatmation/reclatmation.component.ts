import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-reclatmation',
  templateUrl: './reclatmation.component.html',
  styleUrls: ['./reclatmation.component.scss']
})
export class ReclatmationComponent {
  popUpView:boolean = false ;
  popUpViewData:any = {} ;


  public delivration: any ;

  public nonTraiter: any ;
  public traiter: any ;
  public discrpt: any ;
  
  public tnt: boolean = true ;
  public isNot: boolean = false ;

  constructor(private http:HttpClient) {}
  ngOnInit(): void {

    this.getRecTraiter()
    this.getRecNonTraiter()
    
  }

  insetDes($a:any) :void {
    this.discrpt = $a
    console.log($a)
  }

  showPassDataView(ri:any) :any {
    this.popUpView = !this.popUpView ;
    console.log(this.popUpViewData, ri)
    this.popUpViewData = ri;
    console.log(this.popUpViewData, ri)
      
  }

  setConfirmedEtat(popUpViewData:any) :void {
    const header = new HttpHeaders({
      contentType: 'application/json'
    })
    console.log("hello === >",this.discrpt)
    this.http.post(`/api/ala/Rec/${popUpViewData.idRec}/send?replays=${this.discrpt}&idMod=3`, { "message" : popUpViewData.idRec }, {headers: header}).subscribe((data) => {
      console.log(data)
    })
    this.isNot = true
    
    // setTimeout(() => {
    //   location.reload()
    // }, 2000);
  }


  deleteLiv($v:any) :void {
    console.log('hello')
    this.http.delete(`/api/ala/Rec/${$v}`).subscribe()
    alert("livraison deleted")
    setTimeout(() => {
      location.reload()
    }, 1000);
  }

  setTraiterView() :void {
    this.tnt = true
    this.delivration = this.traiter
  }

  setNTraiterView() :void {
    this.tnt = false
    this.delivration = this.nonTraiter

  }

  getRecNonTraiter(): void {
    
    this.http.get('/api/ala/Rec/reclam/NONTRAITER').subscribe((data) => {
      this.nonTraiter = data

    })
  }

  getRecTraiter(): void {
    
    this.http.get('/api/ala/Rec/reclam/TRAITER').subscribe((data) => {
      this.traiter = data
      this.delivration = data

    })
  }

}

