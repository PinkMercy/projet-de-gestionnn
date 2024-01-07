import { Component } from '@angular/core';
import { FormationsService } from './formations/service/formations.service';
//import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filtre.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemon:string = '';
FilterPipe: any;
//   title = 'ProjetDeGestion';
//   formations:any[]=[];
//   constructor(private FService:FormationsService) { }
//   ngOnInit(): void{
//     this.FService.getFormations().subscribe((data:any)=>{
//       this.formations=data;
//     })
// }
// handleClick(value1 : any){
//   console.log(value1 + ' is clicked');
//   this.pokemon = value1+ ' is clicked';
// }
}