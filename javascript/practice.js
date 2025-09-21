// TODO: 배열 합계 계산기
// 숫자 배열을 인자로 받아 원소 중 양수의 합을 반환하는 함수를 구현한다
// 함수명: sumPositiveNumbers (함수 선언식), sumPositiveNumbersArrow (화살표 함수)

// 함수 선언식 정의 코드
function sumPositiveNumbers(array) {
  let evenSum = 0;
  for (const element of array) {
    if (element > 0) {
      evenSum += element;
    }
  }
  return evenSum;
}

// 화살표 함수 정의 코드
const sumPositiveNumbersArrow = (array) => {
  let evenSum = 0;
  for (const element of array) {
    if (element > 0) {
      evenSum += element;
    }
  }
  return evenSum;
};

// 함수 호출 코드
let numbers3 = [1, -2, 3, -4, 5, 6];
let result7 = sumPositiveNumbers(numbers3);
console.log(result7);

let numbers4 = [-10, 20, -30, 40, 50];
let result8 = sumPositiveNumbersArrow(numbers4);
console.log(result8);

/* 출력 결과
15
110
*/

console.log("===");

// TODO: 배열에서 짝수만 찾기
// 숫자 배열을 인자로 받아 짝수만 담은 새로운 배열을 반환하는 함수를 구현한다
// 함수명: getEvenNumbers (함수 선언식), getEvenNumbersArrow (화살표 함수)

// 함수 선언식 정의 코드
function getEvenNumbers(array) {
  let newArr = [];
  for (const element of array) {
    if (element % 2 == 0) {
      newArr.push(element);
    }
  }
  return newArr;
}

// 화살표 함수 정의 코드
const getEvenNumbersArrow = (array) => {
  let newArr = [];
  for (const element of array) {
    if (element % 2 == 0) {
      newArr.push(element);
    }
  }
  return newArr;
};

// 함수 호출 코드
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result1 = getEvenNumbers(numbers1);
console.log(result1);

let numbers2 = [15, 22, 33, 44, 55];
let result2 = getEvenNumbersArrow(numbers2);
console.log(result2);

/* 출력 결과
[2, 4, 6, 8, 10]
[22, 44]
*/

console.log("===");

// TODO: 학생 성적 분석
// 학생 객체 배열을 인자로 받아 점수(score)가 80점 이상인 학생들의 이름(name)만 담은 배열로 반환하는 함수를 구현한다
// 함수명: getHighScoreStudents (함수 선언식), getHighScoreStudentsArrow (화살표 함수)

// 함수 선언식 정의 코드
function getHighScoreStudents(array) {
  let newArr = [];
  for (const element of array) {
    if (element["score"] >= 80) {
      newArr.push(element["name"]);
    }
  }
  return newArr;
}

console.log("===");

// 화살표 함수 정의 코드
const getHighScoreStudentsArrow = (array) => {
  let newArr = [];
  for (const element of array) {
    if (element["score"] >= 80) {
      newArr.push(element["name"]);
    }
  }
  return newArr;
};

// 함수 호출 코드
let students1 = [
  { name: "김철수", score: 85 },
  { name: "율곡이이", score: 92 },
  { name: "퇴계이황", score: 78 },
  { name: "세종대왕", score: 88 },
];
let result3 = getHighScoreStudents(students1);
console.log(result3);

let students2 = [
  { name: "홍길동", score: 95 },
  { name: "이순신", score: 75 },
  { name: "장영실", score: 82 },
];
let result4 = getHighScoreStudentsArrow(students2);
console.log(result4);

/* 출력 결과
["김철수", "율곡이이", "세종대왕"]
["홍길동", "장영실"]
*/

console.log("===");

// TODO: 상품 재고 관리
// 상품 객체 배열을 인자로 받아 재고(stock)가 10개 미만인 상품들의 이름(name)만 담은 배열로 반환하는 함수를 구현한다
// 함수명: getLowStockProducts (함수 선언식), getLowStockProductsArrow (화살표 함수)

// 함수 선언식 정의 코드
function getLowStockProducts(array) {
  let newArr = [];
  for (const element of array) {
    if (element["stock"] < 10) {
      newArr.push(element["name"]);
    }
  }
  return newArr;
}

// 화살표 함수 정의 코드
const getLowStockProductsArrow = (array) => {
  let newArr = [];
  for (const element of array) {
    if (element["stock"] < 10) {
      newArr.push(element["name"]);
    }
  }
  return newArr;
};

// 함수 호출 코드
let products1 = [
  { name: "노트북", stock: 5 },
  { name: "마우스", stock: 25 },
  { name: "키보드", stock: 8 },
  { name: "모니터", stock: 15 },
];
let result5 = getLowStockProducts(products1);
console.log(result5);

let products2 = [
  { name: "스마트폰", stock: 3 },
  { name: "태블릿", stock: 12 },
  { name: "이어폰", stock: 7 },
];
let result6 = getLowStockProductsArrow(products2);
console.log(result6);

/* 출력 결과
["노트북", "키보드"]
["스마트폰", "이어폰"]
*/

console.log("===");

// TODO: 도시별 인구 통계
// 도시 객체 배열을 인자로 받아 인구수(population)의 합을 반환하는 함수를 구현한다
// 함수명: getTotalPopulation (함수 선언식), getTotalPopulationArrow (화살표 함수)

// 함수 선언식 정의 코드
function getTotalPopulation(array) {
  let sum = 0;
  for (const element of array) {
    sum += element["population"];
  }
  return sum;
}

// 화살표 함수 정의 코드
const getTotalPopulationArrow = (array) => {
  let sum = 0;
  for (const element of array) {
    sum += element["population"];
  }
  return sum;
};

// 함수 호출 코드
let cities1 = [
  { name: "서울", population: 9700000 },
  { name: "부산", population: 3400000 },
  { name: "대구", population: 2400000 },
  { name: "춘천", population: 280000 },
];
let result9 = getTotalPopulation(cities1);
console.log(result9);

let cities2 = [
  { name: "인천", population: 2900000 },
  { name: "광주", population: 1500000 },
  { name: "울산", population: 1100000 },
  { name: "제주", population: 670000 },
];
let result10 = getTotalPopulationArrow(cities2);
console.log(result10);

/* 출력 결과
15780000
6170000
*/

console.log("===");

// TODO: 단어 길이 필터링
// 문자열 배열을 인자로 받아 배열 원소 문자열의 길이가 5글자 이상인 문자열들만 담은 배열을 반환하는 함수를 구현한다
// 문자열 길이 : 문자열변수.length
// 함수명: getLongWords (함수 선언식), getLongWordsArrow (화살표 함수)

// 함수 선언식 정의 코드
function getLongWords(array) {
  let newArr = [];
  for (const element of array) {
    if (element.length >= 5) {
      newArr.push(element);
    }
  }
  return newArr;
}

// 화살표 함수 정의 코드
const getLongWordsArrow = (array) => {
  let newArr = [];
  for (const element of array) {
    if (element.length >= 5) {
      newArr.push(element);
    }
  }
  return newArr;
};

// 함수 호출 코드
let words1 = ["apple", "cat", "elephant", "dog", "computer"];
let result11 = getLongWords(words1);
console.log(result11);

let words2 = ["javascript", "html", "css", "react", "vue"];
let result12 = getLongWordsArrow(words2);
console.log(result12);

/* 출력 결과
["apple", "elephant", "computer"]
["javascript", "react"]
*/

console.log("===");

// TODO: 조건부 배열 변환
// 숫자 배열을 인자로 받아 각 원소를 다음 규칙으로 변환한 배열을 반환하는 함수를 구현한다
// - 원래 값이 짝수인 경우 2를 곱한다
// - 원래 값이 홀수인 경우 3을 더한다
// - 원래 값이 10보다 큰 수는 변환하지 않는다
// 함수명: transformNumbers (함수 선언식), transformNumbersArrow (화살표 함수)

// 함수 선언식 정의 코드
function transformNumbers(array) {
  let newArr = [];
  for (const element of array) {
    if (element > 10) {
      newArr.push(element);
    } else if (element % 2 == 0) {
      newArr.push(element * 2);
    } else {
      newArr.push(element + 3);
    }
  }
  return newArr;
}

// 화살표 함수 정의 코드
const transformNumbersArrow = (array) => {
  let newArr = [];
  for (const element of array) {
    if (element > 10) {
      newArr.push(element);
    } else if (element % 2 == 0) {
      newArr.push(element * 2);
    } else {
      newArr.push(element + 3);
    }
  }
  return newArr;
};

// 함수 호출 코드
let numbers6 = [1, 2, 3, 4, 5, 15, 20];
let result17 = transformNumbers(numbers6);
console.log(result17);

let numbers7 = [6, 7, 8, 9, 12, 25];
let result18 = transformNumbersArrow(numbers7);
console.log(result18);

/* 출력 결과
[4, 4, 6, 8, 8, 15, 20]
[12, 10, 16, 12, 12, 25]
*/

console.log("===");

// TODO: 성적 등급 분류
// 학생 객체 배열을 인자로 받아 등급별로 분류한 객체를 반환하는 함수를 구현한다
// 등급 기준: A(90이상), B(80이상), C(70이상), D(70미만)
// 반환 객체 구조: { A: [학생이름들], B: [학생이름들], C: [학생이름들], D: [학생이름들] }
// 학생 객체 구조: { name: "이름", score: 점수 }
// 함수명: classifyStudentsByGrade (함수 선언식), classifyStudentsByGradeArrow (화살표 함수)

// 함수 선언식 정의 코드
function classifyStudentsByGrade(array) {
  let newObj = {
    A: [],
    B: [],
    C: [],
    D: [],
  };
  for (const element of array) {
    if (element["score"] >= 90) {
      newObj["A"].push(element["name"]);
    } else if (element["score"] >= 80) {
      newObj["B"].push(element["name"]);
    } else if (element["score"] >= 70) {
      newObj["C"].push(element["name"]);
    } else {
      newObj["D"].push(element["name"]);
    }
  }
  return newObj;
}

// 화살표 함수 정의 코드
const classifyStudentsByGradeArrow = (array) => {
  let newObj = {
    A: [],
    B: [],
    C: [],
    D: [],
  };
  for (const element of array) {
    if (element["score"] >= 90) {
      newObj["A"].push(element["name"]);
    } else if (element["score"] >= 80) {
      newObj["B"].push(element["name"]);
    } else if (element["score"] >= 70) {
      newObj["C"].push(element["name"]);
    } else {
      newObj["D"].push(element["name"]);
    }
  }
  return newObj;
};

// 함수 호출 코드
let students3 = [
  { name: "김철수", score: 95 },
  { name: "이영희", score: 87 },
  { name: "박민수", score: 76 },
  { name: "최지영", score: 65 },
  { name: "홍길동", score: 92 },
];
let result13 = classifyStudentsByGrade(students3);
console.log(result13);

let students4 = [
  { name: "김영수", score: 88 },
  { name: "이민정", score: 72 },
  { name: "박준호", score: 94 },
];
let result14 = classifyStudentsByGradeArrow(students4);
console.log(result14);

/* 출력 결과
{ A: ["김철수", "홍길동"], B: ["이영희"], C: ["박민수"], D: ["최지영"] }
{ A: ["박준호"], B: ["김영수"], C: ["이민정"], D: [] }
*/

console.log("===");

// TODO: 배열 요소 개수 세기
// 배열을 인자로 받아 각 요소가 몇 번 나타나는지 세어서 객체로 반환하는 함수를 구현한다
// 함수명: countElements (함수 선언식), countElementsArrow (화살표 함수)

// 함수 선언식 정의 코드
function countElements(array) {
  let newObj = {};
  for (const element of array) {
    if (newObj.hasOwnProperty(element)) {
      newObj[element] += 1;
    } else {
      newObj[element] = 1;
    }
  }
  return newObj;
}

// 화살표 함수 정의 코드
const countElementsArrow = (array) => {
  let newObj = {};
  for (const element of array) {
    if (newObj.hasOwnProperty(element)) {
      newObj[element] += 1;
    } else {
      newObj[element] = 1;
    }
  }
  return newObj;
};

// 함수 호출 코드
let fruits1 = ["apple", "banana", "apple", "orange", "banana", "apple"];
let result15 = countElements(fruits1);
console.log(result15);

let numbers5 = [1, 2, 3, 2, 1, 3, 1, 4];
let result16 = countElementsArrow(numbers5);
console.log(result16);

/* 출력 결과
{ apple: 3, banana: 2, orange: 1 }
{ 1: 3, 2: 2, 3: 2, 4: 1 }
*/
