let trello_key=TRELLO_API_KEY;
let trello_token=TRELLO_API_TOKEN;

/**
 * Trelloクラスのインスタンスを生成して返すファクトリ関数
 *
 * @param {String} trello_key - APIキー
 * @param {String} trello_token - APIトークン
 * @return {Object} Trello - 生成したTrelloオブジェクト
 */
function newTrello(trello_key=TRELLO_API_KEY, trello_token=TRELLO_API_TOKEN) {
  return new Trello(trello_key, trello_token);
}


/**
 * 指定したAPIキーのTrelloボードリストを返す関数
 *
 * @return {Array<String>} BoardList - 指定したAPIキーのTrelloボードリスト
 */
function getBoards(trello_key=TRELLO_API_KEY, trello_token=TRELLO_API_TOKEN) {
  const trello =  new Trello(trello_key, trello_token);
  return trello.getBoards();
}


/**
 * 指定したボードIDのリストを返す関数
 *
 * @param {String} board_id - TrelloボードID
 * @return {Array<String>} Lists - 指定したボードIDのリスト
 */
function getLists(board_id=IT_SOLUTION_BOARD_ID) {
  const trello =  new Trello(trello_key, trello_token);
  return trello.getLists(board_id);
}


/**
 * 指定したボードのメンバー一覧を返す
 * 
 * @param {String} board_id - ボードID
 * @return {Array<String>} Members - メンバーオブジェクトの配列
 */
function getBoardMembers(board_id=IT_SOLUTION_BOARD_ID) {
  const trello =  new Trello(trello_key, trello_token);
  return trello.getBoardMembers(board_id);
}


/**
 * 指定したリストにカードを追加する
 * 
 * @param {String} list_id - カードが追加されるリストのID
 * @param {String} title - 追加されるカードのタイトル
 * @param {Object} due - カードの期限 (Dateオブジェクト)
 * @param {Array<String>} idMembers - カードにアサインされるメンバーのID配列
 * @param {String} url_source - 添付資料のURL
 * @param {Array<String>} idLabels - カードに付与されるラベルのID配列
 * @return {Object} Board - 追加したカードオブジェクト
 */
function addCard(list_id, title, description, due='', idMembers='', url_source='', idLabels='') {
  const trello =  new Trello(trello_key, trello_token);
  return trello.addCard(list_id, title, description, due, idMembers.toString(), url_source, idLabels.toString());
}