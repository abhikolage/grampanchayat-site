import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteConfigService } from '../../Services/site-config.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-development',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './development.html',
  styleUrl: './development.css',
})
export class Development {
  config: any;

  constructor(private configService: SiteConfigService) { }

  ngOnInit() {

    this.config = this.configService.getConfig();

  }
}
