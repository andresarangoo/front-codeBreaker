import { Component } from '@angular/core';
import {CodeBreaker} from './service/codeBreaker-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-codeBreaker';
  number: number;
  guess: number;
  response: string;
  guessResponse: string;
  constructor(private CodeBreakerAPI: CodeBreaker) { }

  setSecret() {
    this.CodeBreakerAPI.setSecret(this.number)
      .subscribe(data => {
        this.guessResponse = data ['message'];
      });
  }

  checkGuess() {
    this.CodeBreakerAPI.checkGuess(this.guess)
      .subscribe(data => {
        this.guessResponse = data ['result'];
      });
  }
}
