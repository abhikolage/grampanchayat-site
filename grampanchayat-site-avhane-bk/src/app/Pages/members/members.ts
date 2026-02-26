import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-members',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {

}
