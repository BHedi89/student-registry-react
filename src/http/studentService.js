const FIREBASE_DOMAIN =
    "https://students-administration-67d7b-default-rtdb.europe-west1.firebasedatabase.app";

export class Student {
    constructor(name, age, email, gender) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.gender = gender;
    }
}

export function getAllStudent(){
    return fetch(`${FIREBASE_DOMAIN}/students.json`)
      .then((resp) => resp.json());
}

export function getSingleStudent(studentId) {
    return fetch(`${FIREBASE_DOMAIN}/students/${studentId}.json`)
        .then((resp) => resp.json())
}

export function addNewStudent(student) {
    return fetch(`${FIREBASE_DOMAIN}/students.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: student.name,
          email: student.email,
          age: parseInt(student.age),
          gender: student.gender,
        }),
      })
      .then((resp) => resp.json());
}

export function modifyStudent(studentId, student) {
    return fetch(`${FIREBASE_DOMAIN}/students/${studentId}.json`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: student.name,
          email: student.email,
          age: student.age,
          gender: student.gender
        })
      })
      .then(resp => resp.json())
}

export function deleteStudent(studentId) {
    return fetch(`${FIREBASE_DOMAIN}/students/${studentId}.json`, {
        method: "DELETE"
    })
    .then(resp => resp.json());
}