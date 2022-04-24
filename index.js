let summ = 0;
function sumNumber(n) {
  for (numb = 0; numb <= n; numb++) {
    summ += numb;
  } console.log(summ);
};
// 2е задание//
const student = {
  firstName: 'Maksim',
  secondName: 'Popov',
  gender: 'male',
  education: 'universityZp',
  contacts: {
    telefonNumber: +380248579535,
    mail: 'poppovMaksim@gmail.com',
    adress: {
      country: 'Ukraine',
      city: 'ZP'
    },
  },
};

const universityZp = {
  universityName: 'ZNU',
  faculty: 'journalistick',
  chair: 'journalism',
};

const infoEducationStudent = new Map();
infoEducationStudent.set(student, universityZp);

function crashMap(map) {
  for (let students of map.keys()) {
    getValue(students);
  };
  for (let univer of map.values()) {
    getValue(univer);
  };
};

function getValue(obj) {
  getProp(obj);

  function getProp(o) {
    for (const prop in o) {
      if (typeof (o[prop]) === 'object') {
        getProp(o[prop]);
      } else {
        console.log(o[prop]);
      };
    };
  };
};
 // 3е задание //
 const arrRandom = [];
 function randomaizer(lenghtArr){
  for(i = 0; i < lenghtArr; i++){
    arrRandom.push(i);
  };
};