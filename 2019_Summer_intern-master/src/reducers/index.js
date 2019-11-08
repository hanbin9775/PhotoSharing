import * as types from "../actions/ActionTypes";

// 초기 상태를 정의합니다.
const initialState = {
  counters: [
    {
      number: 0
    }
  ]
};

// 리듀서 함수를 정의합니다.
function counter(state = initialState, action) {
  // 레퍼런스 생성
  const { counters } = state;

  switch (action.type) {
    // 카운터를 새로 추가합니다
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            number: 0
          }
        ]
      };
    default:
      return state;
  }
}

export default counter;
