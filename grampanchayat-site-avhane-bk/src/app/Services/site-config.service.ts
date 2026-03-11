import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteConfigService {

  private config:any;

  constructor(private http: HttpClient) {}

  async loadConfig() {

    if(this.config){
      return this.config;
    }

    const host = window.location.hostname;

    let village = "avhanebk";

    if(host.includes("pimpalgaon")){
      village = "pimpalgaon";
    }

    this.config = await firstValueFrom(
      this.http.get(`assets/config/villages/${village}.json`)
    );

    return this.config;

  }

  getConfig(){
    return this.config;
  }

}