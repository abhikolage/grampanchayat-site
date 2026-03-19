import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteConfigService } from '../../Services/site-config.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  config: any;

  constructor(
    private configService: SiteConfigService) { }

  ngOnInit() {

    this.config = this.configService.getConfig();

  }

  @HostListener('window:scroll', [])
  onScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      const pos = el.getBoundingClientRect().top;
      if (pos < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  }
}
