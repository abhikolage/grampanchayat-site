import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteConfigService } from '../../Services/site-config.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-schemes',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './schemes.html',
  styleUrl: './schemes.css',
})
export class Schemes {
  config: any;

  constructor(private configService: SiteConfigService) { }

  ngOnInit() {

    this.config = this.configService.getConfig();

  }
}
