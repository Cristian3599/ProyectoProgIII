import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

declare var openPlatformModalMessage: any;
declare var require: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('recaptcha', {static: true }) recaptchaElement: ElementRef;

  fgValidation: FormGroup;
  captchaResponse: String;
  validCaptcha: Boolean;
  serverResponse: any;
  errors = [];
  
  constructor(private fb: FormBuilder, private secService: SecurityService, private router: Router, private http: HttpClient) { }

  fgValidationBuilder(){
    this.fgValidation = this.fb.group({
      username: ['administrator@gmail.com', [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.email]],
      password: ['12345', [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern("")]]
    });
  }

  loginEvent(){
    if(this.fgValidation.invalid){
      openPlatformModalMessage("Invalid data!");
    }else {
      let u = this.fg.username.value;
      let p = this.fg.password.value;
      let user = this.secService.loginUser(u, p);
      if(user != null){
        console.log(user);
        this.router.navigate(['/home']);
      }else {
        openPlatformModalMessage("The data is invalid!")
      }
    }
  }

  get fg(){
    return this.fgValidation.controls;
  }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  public beforeSubmittingForm(response: String) {
    this.captchaResponse = response;
    //this.submitForm();
  }

  /*async submitForm(){ 
    let data = {
      secret: '6Lc7Q9kUAAAAAD-akbxIbdm-cMQJbZmvUKpe8OzH',  // Secret API key
      response: this.captchaResponse    // Received token from the frontend
    }

    try {
      let result;
      this.http.get(`https://www.google.com/recaptcha/api/siteverify?secret=${data.secret}&response=${data.response}`).subscribe(data => result = data);
      console.log(result);
      if(result.score < 0.5) {
        //return res.status(403).json({ msg: 'Google Recaptcha error' });
      }
    } catch(e) {
      //return res.status(403).json({ msg: 'Error trying to verify the request' });
    }
  }

  renderReCaptch() {
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : '6LePbq4UAAAAAPqwJU8u5g1Of1TIEMyoPpJQpyaD',
      'callback': (response) => {
          console.log(response);
      }
    });
  }
 
  addRecaptchaScript() {
 
    window['grecaptchaCallback'] = () => {
      this.renderReCaptch();
    }
 
    (function(d, s, id, obj){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { obj.renderReCaptch(); return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));
 
  }*/
}
