import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TomTomService {

  private url = "https://api.tomtom.com";
  private service = "/nds-prod/updates/1";
  private params = `/fetch?key=${environment.tom_tom_key}&uri=00000028/00006995/00010537/PRODUCT.NUC`

  constructor(private http: HttpClient) { }


  downloadMap(){
    const mapDownloadUrl = this.url + this.service + this.params;
    return this.http.get(mapDownloadUrl);
  }

  apiUrl(){
    return this.url + this.service + `/fetch?key=<service_key>&uri=00000028/00006995/00010537/PRODUCT.NUC`;
  }

}
