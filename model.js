/** タスクを表すクラス */
class Tasks {
  constructor() {
  }
}


/** Trelloを表すクラス */
class Trello extends Tasks {
  /**
   * Trelloオブジェクトを生成する
   * 
   * @param {String} trello_key - APIキー
   * @param {String} trello_token - APIトークン
   */
  constructor(trello_key, trello_token) {
    super();
    this.trello_key = trello_key;
    this.trello_token = trello_token;
  }

  /**
   * 指定したAPIトークンのボード一覧を返す
   * 
   * @return {Array<String>} Board - ボードオブジェクトの配列
   */
  getBoards() {
    const url = `https://api.trello.com/1/members/me/boards?key=${this.trello_key}&token=${this.trello_token}`;
    const options = {
      'method' : 'get',
      'muteHttpExceptions' : true
    }
    return JSON.parse(UrlFetchApp.fetch(url, options).getContentText());
  }

  /**
   * 指定したボードのカードリスト一覧を返す
   * 
   * @param {String} board_id - ボードID
   * @return {Array<String>} Board - カードリストオブジェクトの配列
   */
  getLists(board_id=IT_SOLUTION_BOARD_ID) {
    const url = `https://api.trello.com/1/boards/${board_id}/lists?key=${this.trello_key}&token=${this.trello_token}`;
    const options = {
      'method' : 'get',
      'muteHttpExceptions' : true
    }
    return JSON.parse(UrlFetchApp.fetch(url, options).getContentText());
  }

  /**
   * 指定したボードのメンバー一覧を返す
   * 
   * @param {String} board_id - ボードID
   * @return {Array<String>} Members - メンバーオブジェクトの配列
   */
  getBoardMembers(board_id=IT_SOLUTION_BOARD_ID) {
    var url = `https://api.trello.com/1/boards/${board_id}/members?key=${this.trello_key}&token=${this.trello_token}`;
    const options = {
      'method' : 'get',
      'muteHttpExceptions' : true
    }
    return JSON.parse(UrlFetchApp.fetch(url, options).getContentText());
  }

  /**
   * 指定したリストにカードを追加する
   * 
   * @param {String} list_id - カードが追加されるリストのID
   * @param {String} name - 追加されるカードのタイトル
   * @param {Object} due - カードの期限 (Dateオブジェクト)
   * @param {String} idMembers - カードにアサインされるメンバーのID
   * 
   * 複数の場合は"AAAAAAAAAA,BBBBBBBBB"のように
   * カンマ区切りのStringデータを渡します
   * 
   * ※Array型ではありません
   * @param {String} url_source - 添付資料のURL
   * @return {Object} Board - 追加したカードオブジェクト
   */
  addCard(list_id, name, description, due='', idMembers='', url_source='') {
    const url = `https://api.trello.com/1/cards/?key=${this.trello_key}&token=${this.trello_token}`;
    const payload = {
        'name'      : name,
        'desc'      : description,
        'due'       : due,
        'idList'    : list_id,
        'idMembers' : idMembers,
        'urlSource' : url_source,
        'pos'       : 'top'
      };

    const options = {
      'method' : 'post',
      'muteHttpExceptions' : true,
      'payload' : payload
    }
    return JSON.parse(UrlFetchApp.fetch(url, options).getContentText());
  }
}