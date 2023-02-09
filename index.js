/**
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 * @function createTodo
 * @param {string} content 내용
 * @param {string} category 카테고리
 * @param {string[]} [tag] 태그들
 */

const createTodo = () => {};

/**
 * 모든 할 일을 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @function readTodo
 * @param {number} id 아이디
 */

const readTodo = () => {};

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * @function updateTodo
 * @param {number} id 아이디
 * @param {string} content 내용
 * @param {string} category 카테고리
 * @param {boolean} isCompleted 완료여부 (true-할일 완료, false-할일 미완료)
 * @param {string[]} [tag] 태그들
 */

const upadateTodo = () => {};

/**
 *
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @function deleteTodo
 * @param {number} id 아이디
 * @param {string} content 내용
 * @param {string[]} [tag] 태그들
 */

const deleteTodo = () => {};
