import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  length=0;
  includeLetters=false;
  includeNumbers=false; 
  includeSymbols=false;
  password='';
  

  onKey(event:KeyboardEvent){
    const parsedValue=parseInt((event.target as HTMLInputElement).value);
    if (!isNaN(parsedValue)){
      this.length=parsedValue;
    }
  }


 

  onChangeUseLetters(){
    this.includeLetters=!this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers=!this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols=!this.includeSymbols;

  }
  onButtonClick() {
    const letters='abcdefghijklmnopqrstuvwxyz';
    const numbers='1234567890';
    const symbols='!@#$%^&*()';
    let validchars='';
    if (this.includeLetters){
      validchars+=letters;
    }
    if (this.includeNumbers){
      validchars+=numbers;
    }
    if (this.includeSymbols){
      validchars+=symbols;
    }
    let generatedPwd='';
    for(let i=0;i<this.length;i++){
      const index=Math.floor(Math.random()*validchars.length);
      generatedPwd+=validchars[index];
    }
     this.password=generatedPwd;     
  }
}
