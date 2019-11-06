import * as types from "./ActionTypes";

export function setKOR(text) {
  return {
    type: types.SET_KOR,
    text // title: title
  };
}

// export function setKOR_Footer_Language() {
//   return {
//     type: types.SET_KOR,
//     Footer_Language: "언어 설정" // title: title
//   };
// }

// export function setKOR_Footer_PARTNERS() {
//   return {
//     type: types.SET_KOR,
//     Footer_PARTNERS: "협력사" // title: title
//   };
// }

export function setENG(text) {
  return {
    type: types.SET_ENG,
    text // title: title
  };
}

// export function setENG_Footer_Language() {
//   return {
//     type: types.SET_ENG,
//     Footer_Language: "Language" // title: title
//   };
// }

// export function setENG_Footer_PARTNERS() {
//   return {
//     type: types.SET_ENG,
//     Footer_PARTNERS: "Partners" // title: title
//   };
// }
