<<<<<<< HEAD
/*
    action 객체를 만드는 액션 생성자들을 선언합니다. (action creators)
    여기서 () => ({}) 은, function() { return { } } 와 동일한 의미입니다.
    scope 이슈와 관계 없이 편의상 사용되었습니다.
*/
=======
import * as types from "./ActionTypes";


export function setKOR(text) {
  return {
    type: types.SET_KOR,
    text // title: title
  };
}
////

// export function setKOR_Footer_Language() {
//   return {
//     type: types.SET_KOR,
//     Footer_Language: "언어 설정" // title: title
//   };
// }
>>>>>>> 46cd7b236426fac12985ef0c2e10bea5a3566846

import * as types from "./ActionTypes";

export const create = temp => ({
  type: types.CREATE
});
