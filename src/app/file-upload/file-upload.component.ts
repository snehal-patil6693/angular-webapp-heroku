import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpEventType} from '@angular/common/http';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  selectedFile: File = null as any

  constructor(private http:HttpClient){}

   
   onFileSelected(event: any)
   {
     this.selectedFile = <File>event.target.files[0];
   }
   onUpload()
   {
     const fd = new FormData;
     fd.append('image',this.selectedFile, this.selectedFile.name);
     this.http.post('https://reqres.in/api/posts', fd)
     .subscribe(res => {
        console.log(res);
        alert('File Uploaded Successfully!');
     })
   }

}
