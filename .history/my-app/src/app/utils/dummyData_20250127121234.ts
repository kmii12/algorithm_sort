import { faker } from "@faker-js/faker";

export interface User {
  id: string;
  name: string;
  age: number;
  city: string;
}

export const dummyData = (count: number): User[] => {
  return Array.from(
    { length: count },
    (): User => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      age: faker.number.int({ min: 18, max: 30 }),
      city: faker.location.city(),
    })
  );
};
