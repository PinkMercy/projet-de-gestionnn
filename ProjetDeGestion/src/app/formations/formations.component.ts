import { Component } from '@angular/core';
import { FormationsService } from './service/formations.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent {
  SearchText:string="all";
  title='ProjetDeGestion';
  formations:any[]=[];
  constructor(private FService:FormationsService) { }
  ngOnInit(): void{
    this.FService.getFormations().subscribe((data:any)=>{
      this.formations=data;
    })}
    test(vaar:any){
      this.SearchText=vaar.target.value;
      console.log(this.SearchText);
    }
}
