import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Header } from './Layout/header/header';
import { Footer } from './Layout/footer/footer';
import { SiteConfigService } from './Services/site-config.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  config: any;

  protected readonly title = signal('grampanchayat-avhane-site');

  constructor(private configService: SiteConfigService, private titleService: Title, private meta: Meta){}

async ngOnInit(){
  this.config = await this.configService.loadConfig();

  // Title
  this.titleService.setTitle(this.config?.site?.title);

  // Basic Meta
  this.meta.updateTag({ name: 'description', content: this.config?.site?.description });
  this.meta.updateTag({ name: 'keywords', content: this.config?.site?.keywords });
  this.meta.updateTag({ name: 'author', content: this.config?.site?.author });

  // Open Graph
  this.meta.updateTag({ property: 'og:title', content: this.config?.site?.title });
  this.meta.updateTag({ property: 'og:description', content: this.config?.site?.description });
  this.meta.updateTag({ property: 'og:image', content: this.config?.social?.image });
  this.meta.updateTag({ property: 'og:url', content: this.config?.site?.url });

  // Twitter
  this.meta.updateTag({ name: 'twitter:title', content: this.config?.site?.title });
  this.meta.updateTag({ name: 'twitter:description', content: this.config?.site?.description });
  this.meta.updateTag({ name: 'twitter:image', content: this.config?.social?.image });

  // Canonical
  const link: HTMLLinkElement | null =
    document.querySelector("link[rel='canonical']");
  if (link) {
    link.setAttribute("href", this.config?.site?.url);
  }

  if (this.config?.analytics?.googleId) {
    this.loadGoogleAnalytics(this.config?.analytics?.googleId);
  }
  }

  loadGoogleAnalytics(id: string) {

    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
    document.head.appendChild(script);

    (window as any).dataLayer = (window as any).dataLayer || [];

    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }

    gtag('js', new Date());
    gtag('config', id);

  }
}
