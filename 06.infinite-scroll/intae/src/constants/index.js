const data = [
  {
    id: 1,
    skills: '1',
  },
  {
    id: 2,
    skills: '2',
  },
  {
    id: 3,
    skills: '3',
  },
  {
    id: 4,
    skills: '4',
  },
  {
    id: 5,
    skills: '5',
  },
  {
    id: 6,
    skills: '6',
  },
  {
    id: 7,
    skills: '7',
  },
  {
    id: 8,
    skills: '8',
  },
  {
    id: 9,
    skills: '9',
  },
  {
    id: 10,
    skills: '10',
  },
  {
    id: 11,
    skills: '11',
  },
  {
    id: 12,
    skills: '12',
  },
  {
    id: 13,
    skills: '13',
  },
  {
    id: 14,
    skills: '14',
  },
  {
    id: 15,
    skills: '15',
  },
  {
    id: 16,
    skills: '16',
  },
  {
    id: 17,
    skills: '17',
  },
  {
    id: 18,
    skills: '18',
  },
];

export default (function fetchData() {
  const LIMIT = data.length;
  const COUNT = 7;
  let start = 0;

  return () => {
    return new Promise((resolve, reject) => {
      if (start >= LIMIT) reject(new Error('불러올 데이터가 없습니다.'));
      setTimeout(() => {
        resolve(data.slice(start, start + COUNT));
        start += COUNT;
      }, 1500);
    });
  };
})();
