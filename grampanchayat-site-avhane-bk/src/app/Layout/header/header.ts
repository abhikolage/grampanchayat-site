import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SiteConfigService } from '../../Services/site-config.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
config: any;
constructor(private configService: SiteConfigService) {}

  ngOnInit() {

    this.config = this.configService.getConfig();

  }

  isMobileMenuOpen = false;

toggleMenu() {
  this.isMobileMenuOpen = !this.isMobileMenuOpen;
}
}
