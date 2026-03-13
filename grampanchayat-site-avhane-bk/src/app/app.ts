import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Layout/header/header';
import { Footer } from './Layout/footer/footer';
import { SiteConfigService } from './Services/site-config.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('grampanchayat-avhane-site');

  constructor(private configService: SiteConfigService){}

async ngOnInit(){
  await this.configService.loadConfig();
  this.configService.setFavicon();
}
}
