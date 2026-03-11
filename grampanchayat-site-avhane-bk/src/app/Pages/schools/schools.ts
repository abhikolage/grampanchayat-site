import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { School } from '../../Models/school.model';
// import { SchoolService } from '../../Services/school.service';
import { CommonModule } from '@angular/common';
import { SiteConfigService } from '../../Services/site-config.service';

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './schools.html',
  styleUrl: './schools.css',
})
export class Schools {
  config: any;
  schools: School[] = [];
  selectedSchool!: School;

  selectedImage: string | null = null;

  constructor(private configService: SiteConfigService) { }

  ngOnInit() {
    this.config = this.configService.getConfig();
    this.schools = this.config?.schoolsPage?.schools;
    this.selectedSchool = this.schools[0]; // default active
  }

  selectSchool(id: number) {
    const school = this.schools.find(s => s.id === id);
    if (school) {
      this.selectedSchool = school;
    }
  }

  getSchoolValue(field: keyof School) {
    return this.selectedSchool?.[field]
  }

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
