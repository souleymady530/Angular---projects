import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NGXlsx';
  tableau=new Array()
  sheet_name_tab=new Array()
    res=1;
   read(e:any){

      var fichier=e.target.files[0]
      // console.log(e.target.result)
      var reader = new FileReader();
      reader.onload = (e)=>(this.onread(e),this.tableau,this.sheet_name_tab)
      reader.readAsBinaryString(fichier);
  }

  onread(e:any) 
        {
            var data = e.target.result;
            var workbook = XLSX.read(data, {
                type: 'binary'
            });

           
            var  sheetLength=workbook.SheetNames.length
            for(let i=0;i<sheetLength;i++)
            { 
                var sheetname=workbook.SheetNames[i]
                this.sheet_name_tab.push(sheetname)
                var arr = XLSX.utils.sheet_to_json(workbook.Sheets[sheetname],{header: 1});
                 var sheet_data=new Array()
                for(let j=0;j<arr.length;j++)
                {
                  sheet_data.push(''+arr[j])
                 }         
                this.tableau.push(sheet_data)                            
            }
        }

        chargement(){
           
        }
}
