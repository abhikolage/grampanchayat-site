import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SiteConfigService } from '../../Services/site-config.service';

@Component({
  selector: 'app-notices',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './notices.html',
  styleUrl: './notices.css',
})
export class Notices {
  config: any;
  constructor(private configService: SiteConfigService) { }

  ngOnInit() {

    this.config = this.configService.getConfig();

  }
}
