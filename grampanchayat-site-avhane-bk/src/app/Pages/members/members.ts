import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SiteConfigService } from '../../Services/site-config.service';


@Component({
  selector: 'app-members',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {
  config: any;

  constructor(private configService: SiteConfigService) { }

  ngOnInit() {

    this.config = this.configService.getConfig();

  }

}
