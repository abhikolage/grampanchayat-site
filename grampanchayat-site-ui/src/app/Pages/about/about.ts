import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SiteConfigService } from '../../Services/site-config.service';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  config: any;
  constructor(private configService: SiteConfigService) { }

  ngOnInit() {

    this.config = this.configService.getConfig();

  }
}
