import { getMedic } from '../fixtures/medic.fixture';

export function getResults() {
  const result = [];
  for (let index = 0; index < 10; index++) {
    const medic = getMedic();
    result.push(medic);
  }
  return result;
}
