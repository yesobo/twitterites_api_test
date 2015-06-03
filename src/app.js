import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia Favos';
    config.map([
      { route: ['','api'],  moduleId: './api',      nav: true, title:'API' },
      { route: 'login',      moduleId: './login',     nav: true },
      { route: 'twitter',      moduleId: './twitter',     nav: true },
      { route: 'child-router', moduleId: './child-router', nav:true, title: 'Child router' }
    ]);

    this.router = router;
  }
}
