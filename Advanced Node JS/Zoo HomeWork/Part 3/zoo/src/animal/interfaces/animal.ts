export interface Animal {
  id: string;
  name: string;
  age: number;
  location: string;
  gender: string;
  characteristics: {
    food: [string];
    colour: string;
    isDangerous: boolean;
    weight: number;
    enclosure: string;
  };
}
