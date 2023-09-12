import { faker } from '@faker-js/faker';

const specialties = [
  'medicina general',
  'odontologia',
  'pediatria',
  'optometria',
];

const locations = ['Carrera 70 # 6-10', 'Carrera 7 # 39-10'];

export function getMedic() {
  return {
    name: faker.person.fullName(),
    specialty: specialties[Math.floor(Math.random(specialties.length))],
    location: locations[Math.floor(Math.random(locations.length))],
    photo: faker.image.avatar(),
  };
}
