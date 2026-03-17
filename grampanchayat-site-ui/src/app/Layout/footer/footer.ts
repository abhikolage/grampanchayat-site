import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SiteConfigService } from '../../Services/site-config.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
config:any;
safeMapUrl!: SafeResourceUrl;

constructor(
  private configService: SiteConfigService,
  private sanitizer: DomSanitizer
) {}

ngOnInit() {
this.config = this.configService.getConfig();
this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.config.footer.mapEmbedUrl
    );
}
}
