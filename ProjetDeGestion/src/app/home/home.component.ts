import { Component } from '@angular/core';
import { FormationsService } from '../formations/service/formations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'ProjetDeGestion';
  formations:any[]=[];
  constructor(private FService:FormationsService) { }
  ngOnInit(): void{
    this.FService.getFormations().subscribe((data:any)=>{
      this.formations=data;
    })
}
}
