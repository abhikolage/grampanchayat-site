import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteConfigService } from '../../Services/site-config.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  config: any;

  constructor(private configService: SiteConfigService) { }

  ngOnInit() {

    this.config = this.configService.getConfig();

  }
}
