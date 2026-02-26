import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


    @HostListener('window:scroll', [])
  onScroll(){
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el=>{
      const pos = el.getBoundingClientRect().top;
      if(pos < window.innerHeight-100){
        el.classList.add('show');
      }
    });
  }
}
