export interface Teacher {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface School {
  id: number;
  name: string;
  location: string;
  totalStudents: string;
  teachersCount: string;
  classrooms: string;
  libraryBooks: string;
  teachers: Teacher[];
}
