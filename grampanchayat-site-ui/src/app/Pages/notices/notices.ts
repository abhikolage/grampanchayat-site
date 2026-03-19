import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SiteConfigService } from '../../Services/site-config.service';

@Component({
  selector: 'app-notices',
  imports: [RouterLink, CommonModule],
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
