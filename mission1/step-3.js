const DATA = [
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

const GRADE_MAP = {
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

const getGradeInfo = function (data) {
  const gradeInfo = data.reduce(
    (accumulator, currentValue) => {
      const result = {
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

//이수학점
const getTotalCredit = function (data) {
  const { totalCredit } = getGradeInfo(data);
  return totalCredit;
};

//총평점
const getTotalGrade = function (data) {
  const { totalGrade } = getGradeInfo(data);
  return totalGrade / getTotalCredit(data);
};

//전공평점
const getMajorCredit = function (data) {
  const majorCredit = data.reduce((accumulator, currentValue) => {
    if (currentValue.major === true) {
      return accumulator + currentValue.credit;
    }
    return accumulator;
  }, 0);
  return majorCredit;
};

//전공이수학점
const getMajorGrade = function (data) {
  let accumulatedGrade = 0;
  data.forEach((currentValue) => {
    if (currentValue.major === true) {
      accumulatedGrade = accumulatedGrade + currentValue.credit;
    }
  });
  return accumulatedGrade;
};

// const gmg = (data) => data.filter(v => v.major).reduce(acc, v => acc + v.credit, 0)

// 4.5 학점 to 4.0
const convertCredit = function () {
  const result = 60 + ((getMajorCredit(DATA) - 1) * 40) / 3.5;

  return result;
};

// 과목 추가 함수

const addLecture = function (gradeData, name, grade, credit, major) {
  const newLecture = { name, grade, credit, major };
  return [...gradeData, newLecture]; // immutable (with spread operator);
};


const returnResult = function () {
    const gradeData = addLecture(DATA, '알고리즘', 'A', 3, true);
    
    return (
        '이수학점' +
        getTotalCredit(gradeData) +
        '  총평점' +
        getTotalGrade(gradeData) +
        '  전공평점' +
        getMajorCredit(gradeData) +
        '  전공이수학점' +
        getMajorGrade(gradeData) +
        '  백분율로 환산하면' +
        convertCredit() +
        '입니다.'
        );
    };
    
    //2초후 결과 출력

    const returnResultAfterTowSec = function() {
        setTimeout(() => {
            console.log(returnResult(DATA));
            
        }, 2000);
    };
    
    
    returnResultAfterTowSec();

    
    
    
    