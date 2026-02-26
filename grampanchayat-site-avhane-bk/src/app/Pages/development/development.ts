import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-development',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './development.html',
  styleUrl: './development.css',
})
export class Development {

}
