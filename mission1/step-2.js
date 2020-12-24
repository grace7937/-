var DATA = [
  {
    name: '데이터베이스',
    grade: 'A',
    credit: 3,
  },
  {
    name: '교양영어',
    grade: 'B+',
    credit: 2,
  },
  {
    name: '철학',
    grade: 'B+',
    credit: 1,
  },
];

var GRADE_MAP = {
  'A+': 4.5,
  A: 4,
  'B+': 3.5,
  B: 3,
  'C+': 2.5,
  C: 2,
  'D+': 1.5,
  D: 1,
  F: 0,
};

function getGradeAverage(myDatas) {

  const gradeInfo = myDatas.reduce(
    (accumulator, myData) => {
      const rank = myData.grade; //A
      const score = GRADE_MAP[rank]; //4.5
      const grade = myData.credit; //3학점

      let result = {
        scoreGradeMultiply: accumulator.scoreGradeMultiply + score * grade,
        totalGrade: accumulator.totalGrade + grade,
      };
      return result;
    },
    { totalGrade: 0, scoreGradeMultiply: 0 }
  );




  return (
    '총평점' +
    gradeInfo.scoreGradeMultiply / gradeInfo.totalGrade +
    ',' +
    '이수학점' +
    gradeInfo.totalGrade
  );
}

console.log(getGradeAverage(DATA));
// let credits = 0;

// function getCredits() {
//   for (let i = 0; i < DATA.length; i++) {
//     credits += DATA[i][2];
//   }
//   return credits;
// }

//"총평점 3.92 , 이수학점 6"
