import { Injectable } from '@angular/core';
import { School } from '../Models/school.model';

@Injectable({ providedIn: 'root' })
export class SchoolService {

  private schools: School[] = [
    {
      id: 1,
      name: 'जि. प. प्रा. शाळा, आव्हाणे बु',
      location: 'आव्हाणे बु',
      totalStudents: "२००",
      teachersCount: "१२",
      classrooms: "८",
      libraryBooks: "१५००",
      teachers: [
        {
          name: 'श्री. विनायक पाटील 1',
          role: 'मुख्याध्यापक',
          quote: 'शिक्षण हाच विकासाचा खरा पाया आहे.',
          image: 'assets/logo-icons/man-icon.png'
        },
        {
          name: 'सौ. अंजली शिंदे 1',
          role: 'वरिष्ठ शिक्षिका',
          quote: 'प्रत्येक मूल हे खास असते.',
          image: 'assets/logo-icons/woman-icon.png'
        },
        {
          name: 'श्री. विनायक पाटील 1',
          role: 'क्रीडा शिक्षक',
          quote: 'खेळातूनच शिस्त आणि जिद्द निर्माण होते.',
          image: 'assets/logo-icons/man-icon.png'
        },
        {
          name: 'श्री. विनायक पाटील 1',
          role: 'भाषा शिक्षक',
          quote: 'वाचाल तर वाचाल.',
          image: 'assets/logo-icons/man-icon.png'
        }
      ]
    },
    {
      id: 2,
      name: 'जि. प. प्रा. शाळा, तागडवस्ती',
      location: 'तागडवस्ती',
      totalStudents: "१५०",
      teachersCount: "८",
      classrooms: "८",
      libraryBooks: "१२००",
      teachers: [{
        name: 'श्री. विनायक पाटील 2',
        role: 'मुख्याध्यापक',
        quote: 'शिक्षण हाच विकासाचा खरा पाया आहे.',
        image: 'assets/logo-icons/man-icon.png'
      },
      {
        name: 'सौ. अंजली शिंदे 2',
        role: 'वरिष्ठ शिक्षिका',
        quote: 'प्रत्येक मूल हे खास असते.',
        image: 'assets/logo-icons/woman-icon.png'
      },
      {
        name: 'श्री. विनायक पाटील 2',
        role: 'क्रीडा शिक्षक',
        quote: 'खेळातूनच शिस्त आणि जिद्द निर्माण होते.',
        image: 'assets/logo-icons/man-icon.png'
      },
      {
        name: 'श्री. विनायक पाटील 2',
        role: 'भाषा शिक्षक',
        quote: 'वाचाल तर वाचाल.',
        image: 'assets/logo-icons/man-icon.png'
      }]
    },
    {
      id: 3,
      name: 'जि. प. प्रा. शाळा, गणेशवाडी',
      location: 'गणेशवाडी',
      totalStudents: "१००",
      teachersCount: "६",
      classrooms: "६",
      libraryBooks: "१०००",
      teachers: [{
        name: 'श्री. विनायक पाटील 3',
        role: 'मुख्याध्यापक',
        quote: 'शिक्षण हाच विकासाचा खरा पाया आहे.',
        image: 'assets/logo-icons/man-icon.png'
      },
      {
        name: 'सौ. अंजली शिंदे 3',
        role: 'वरिष्ठ शिक्षिका',
        quote: 'प्रत्येक मूल हे खास असते.',
        image: 'assets/logo-icons/woman-icon.png'
      },
      {
        name: 'श्री. विनायक पाटील 3',
        role: 'क्रीडा शिक्षक',
        quote: 'खेळातूनच शिस्त आणि जिद्द निर्माण होते.',
        image: 'assets/logo-icons/man-icon.png'
      },
      {
        name: 'श्री. विनायक पाटील 3',
        role: 'भाषा शिक्षक',
        quote: 'वाचाल तर वाचाल.',
        image: 'assets/logo-icons/man-icon.png'
      }]
    },
    {
      id: 4,
      name: 'जि. प. प्रा. शाळा, दिंडेवाडी',
      location: 'गणेशवाडी',
      totalStudents: "८०",
      teachersCount: "७",
      classrooms: "८",
      libraryBooks: "१३००",
      teachers: [{
        name: 'श्री. विनायक पाटील 4',
        role: 'मुख्याध्यापक',
        quote: 'शिक्षण हाच विकासाचा खरा पाया आहे.',
        image: 'assets/logo-icons/man-icon.png'
      },
      {
        name: 'सौ. अंजली शिंदे 4',
        role: 'वरिष्ठ शिक्षिका',
        quote: 'प्रत्येक मूल हे खास असते.',
        image: 'assets/logo-icons/woman-icon.png'
      },
      {
        name: 'श्री. विनायक पाटील 4',
        role: 'क्रीडा शिक्षक',
        quote: 'खेळातूनच शिस्त आणि जिद्द निर्माण होते.',
        image: 'assets/logo-icons/man-icon.png'
      },
      {
        name: 'श्री. विनायक पाटील 4',
        role: 'भाषा शिक्षक',
        quote: 'वाचाल तर वाचाल.',
        image: 'assets/logo-icons/man-icon.png'
      }]
    }
  ];

  getSchools() {
    return this.schools;
  }

  getSchoolById(id: number) {
    return this.schools.find(s => s.id === id);
  }
}
