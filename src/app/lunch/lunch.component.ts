import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  
  
  constructor(private http: HttpClient) {}

  public noms: Observable<{name: string, pic_path: string, seconded: boolean, votes: number}[]>;

  ngOnInit() {
  	this.noms = this.getNoms();
  }

  public getNoms():Observable<{name: string, pic_path: string, seconded: boolean, votes: number}[]> {
  	
  	let URL ='/api/nominations/';
  	return this.http.get<{name: string, pic_path: string, seconded: boolean, votes: number}[]>(URL)
  	    .subscribe(response => noms = response.data);
  }


  

  public postNoms(nomName: string, nomPic_path: string, nomSeconded: boolean, nomVotes: number):void {
  	let nom = {
  		name: nomName,
  		pic_path: nomPic_path,
  		seconded: nomSeconded,
  		votes: nomVotes
  	}

  	let URL = '/api/nominations/';
  	this.http.post(URL, nom);
  }

}
