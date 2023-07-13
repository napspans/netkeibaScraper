// content.js
// ページが読み込まれたときに実行
window.onload = function() {
  let horseData = [];
  // 全ての馬リストを取得
  let horseList = document.querySelectorAll('.HorseList');

  horseList.forEach((row, index) => {
    let horse = {};

    // 枠番を取得
    horse['frameNumber'] = row.querySelector(`.Waku${index + 1}`).textContent;

    // 馬番を取得
    horse['horseNumber'] = row.querySelector(`.Umaban${index + 1}`).textContent;

    // 馬名とそのリンクを取得
    let horseNameElement = row.querySelector('.HorseName > a');
    horse['horseName'] = horseNameElement.textContent;
    horse['horseLink'] = horseNameElement.href;

    // 馬の年齢と性別を取得
    horse['ageAndSex'] = row.querySelector('.Age').textContent;

    // 馬の体重を取得
    let weightElement = row.querySelector('.Weight');
    horse['weight'] = weightElement ? weightElement.textContent : '';

    // ジョッキーの名前とそのリンクを取得
    let jockeyElement = row.querySelector('.Jockey > a');
    horse['jockeyName'] = jockeyElement.textContent;
    horse['jockeyLink'] = jockeyElement.href;

    // 人気と順位を取得
    horse['popularity'] = row.querySelector('.Popular .Txt_R').textContent;
    horse['rank'] = row.querySelector('.Popular .Txt_C').textContent;

    horseData.push(horse);
  });

  // JSON形式で出力
  console.log(JSON.stringify(horseData, null, 2));
}