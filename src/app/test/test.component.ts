import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  placeholder = 'Palceholder Changed (:-o)';

  greetUser() {
    return "Hello! First Time Using Angular.";
  }

  public myId = "TextBox";
  public isDisabled = false;
  
  public green = "make-it-green";
  public isGreen = false;
  public  isItalic = true;

  public logical =  {
    "make-it-green": this.isGreen,
    "italics": this.isItalic
  }

  public specialStyle ={
    color: "blue",
    fontStyle: "italic"
  }

  public message = "";
  displayMessage(value : any) {
    this.message = value;
  }

  public text="";

  public firstName=true;
  changeName() {
    if(this.firstName == true) {
      this.firstName = false;
    }
    else {
      this.firstName = true;
    }
  }

  public colorInput="default";
  setColor(color : string) {
    this.colorInput = color.toUpperCase();
  }
  
}
