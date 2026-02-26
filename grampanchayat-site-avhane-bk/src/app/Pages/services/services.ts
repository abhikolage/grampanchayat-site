import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

}
