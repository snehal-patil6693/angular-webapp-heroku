import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpEventType} from '@angular/common/http';
import * as $ from 'jquery';
//declare var $:any;
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  selectedFile: File = null as any
  file:any;
  document: any;
  content: any;
  constructor(private http:HttpClient){}

 
  init() {
    this.document.getElementById('fileInput').addEventListener('change', this.handleFileSelect, false);
  }
  
  handleFileSelect(event: any) {
    const reader = new FileReader()
    reader.onload = this.handleFileLoad;
    reader.readAsText(event.target.files[0])
  }
  
  handleFileLoad(event: any) {
    console.log(event);
    this.document.getElementById('fileContent').textContent = event.target.result;
  }
  
    
  
  
}
  
  
  