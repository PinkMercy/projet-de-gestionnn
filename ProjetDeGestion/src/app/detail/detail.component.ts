import { ActivatedRoute } from '@angular/router';
import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormationsService } from '../formations/service/formations.service';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id: any;
  formation: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private FService:FormationsService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.formation=[];
      // Now that you have the ID, fetch data based on this ID
      // Call your service or perform any necessary action to get data
      // and use it to display details on the page
    });
    this.FService.getFormations().subscribe((data:any)=>{
      this.formation=data.filter((ele: any)=> ele.id == this.id);
    })
  }
  
}
