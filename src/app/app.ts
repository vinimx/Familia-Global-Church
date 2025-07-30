import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './components/menu/menu';
import { Main } from './components/main/main';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Main],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('global-church-avare');
}
