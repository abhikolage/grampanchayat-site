import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { School } from '../../Models/school.model';
import { SchoolService } from '../../Services/school.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './schools.html',
  styleUrl: './schools.css',
})
export class Schools {
  schools: School[] = [];
  selectedSchool!: School;

  selectedImage: string | null = null;

    constructor(private schoolService: SchoolService) {}

      ngOnInit() {
    this.schools = this.schoolService.getSchools();
    this.selectedSchool = this.schools[0]; // default active
  }

    selectSchool(id: number) {
    const school = this.schoolService.getSchoolById(id);
    if (school) {
      this.selectedSchool = school;
    }
  }

  openImage(img: string) {
  this.selectedImage = img;
}

closeImage() {
  this.selectedImage = null;
}
}
