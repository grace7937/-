var DATA = [
  {
    name: '데이터베이스',
    grade: 'A',
    credit: 3,
    major: true,
  },
  {
    name: '교양영어',
    grade: 'B+',
    credit: 2,
    major: false,
  },
  {
    name: '철학',
    grade: 'B+',
    credit: 1,
    major: false,
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

// 전공이수학점이 얼마인지, 전공평점이 얼마인지
// > 총평점 : 3.92, 전공평점:3.5, 이수학점:12, 전공이수학점:6

let getTotalGradeAndToTalCredit = function (DATA) {
  const gradeInfo = DATA.reduce(
    (accumulator, currentValue) => {
      let result = {
        totalGrade:
          accumulator.totalGrade +
          GRADE_MAP[currentValue.grade] * currentValue.credit,
        totalCredit: accumulator.totalCredit + currentValue.credit,
      };

      return result; // { totalGrade: ~ , totalCredit: ~ }
    },
    { totalGrade: 0, totalCredit: 0 }
  );

  return gradeInfo;
};

console.log(getTotalGradeAndToTalCredit(DATA));

//이수학점
let getTotalCredit = function (DATA) {
  const result = getTotalGradeAndToTalCredit(DATA).totalCredit;
  return result;
};

console.log('이수학점' + getTotalCredit(DATA));

//총평점
let getTotalGrade = function (DATA) {
  const result =
    getTotalGradeAndToTalCredit(DATA).totalGrade / getTotalCredit(DATA);
  return result;
};
console.log('총평점' + getTotalGrade(DATA));


//전공평점
let getMajorCredit = function (DATA) {
  let magorCredit = DATA.reduce((accumulator, currentValue) => {
    if (currentValue.major === true) {
      return accumulator + currentValue.credit;
    }else {
        return;
    }
  }, 0);
  return magorCredit;
};

console.log('전공평점' + getMajorCredit(DATA));


//전공이수학점
let getMajorGrade = function (DATA) {
  let accumulatedGrade = 0;
  DATA.forEach((currentValue) => {
    if (currentValue.major === true) {
      accumulatedGrade = accumulatedGrade + currentValue.credit;
    }
  });
  return accumulatedGrade;
};

console.log('전공이수학점' + getMajorGrade(DATA));


