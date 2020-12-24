const MY_GRADE_DATAS = [
  ['데이터베이스', 'A', 3],
  ['교양영어', 'B+', 1],
  ['철학', 'A', 2],
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

//reduce

function getGradeAverage(gradeDatas) {
  // grade = [[],[],[]]
  const gradeInfo = gradeDatas.reduce(
    (accumulator, gradeData) => {
      const rank = gradeData[1]; //A
      const score = GRADE_MAP[rank]; //4.5
      const grade = gradeData[2]; //3학점

      let result = {
        scoreGradeMultiply: accumulator.scoreGradeMultiply + score * grade,
        totalGrade: accumulator.totalGrade + grade,
      };

      return result;
    },
    { totalGrade: 0, scoreGradeMultiply: 0 }
  );

  return 1;
}

const gradeAve = getGradeAverage(MY_GRADE_DATAS);
console.log('hi');
console.log(gradeAve);

//for문
// accumulator + score * grade;
// function getGradeAverage(gradeDatas) {
//   let totalGrade = 0;
//   let scoreGradeMultiply = 0;

//   gradeDatas.forEach((gradeData) => {
//     const rank = gradeData[1];
//     const score = GRADE_MAP[rank];
//     const grade = gradeData[2];

//     totalGrade += grade;
//     scoreGradeMultiply += score * grade;
//   });

//   return scoreGradeMultiply / totalGrade;
// }

// console.log(getGradeAverage(MY_GRADE_DATAS));

//
// function cal(data) {
//   let d = [];
//   let s = 0;
//   for (i = 0; i < data.length; i++) {
//     d.push(data[i][1]);
//     s = s + gradeDatas[d[i]];
//   }
//   return s / data.length;
// }

// console.log(cal(data));

// 이수학점: 6

// function showGrade(data) {
//   let data1 = 0;
//   for (i = 0; i < data.length; i++) {
//     data1 = data1 + data[i][2];
//   }
//   return '이수학점' + data1;
// }

//  "총평점 3.92 , 이수학점 6"
