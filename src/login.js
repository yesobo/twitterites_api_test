export class Welcome{
  heading = 'Sign in with your Twitter account';
  user = 'JesusEspejoA';
  pass = 'JSEO3607';

  get namePass(){
    return `${this.user} with pass: ${this.pass}`;
  }

  welcome(){
    alert(`Welcome, ${this.namePass}!`);
  }
}
