import { MOCK } from './constants';

export default function search(keyword) {
  if (keyword.trim() === '') return false;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const results = MOCK.filter(({ title }) => title.includes(keyword));
      if (results.length === 0) {
        reject('검색결과가 없습니다.');
      }
      resolve(results);
    }, 1000);
  });
}
