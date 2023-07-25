// content.js
// ページが読み込まれたときに実行
window.onload = function() {
  const horseData = [];
  // 全ての馬リストを取得
  const horseList = document.querySelectorAll('.HorseList');

  horseList.forEach((row, index) => {
    const horse = {};

    // 枠番を取得
    horse['frameNumber'] = row.querySelector(`[class^='Waku']`).textContent.trim();

    // 馬番を取得
    horse['horseNumber'] = row.querySelector(`[class^='Umaban']`).textContent.trim();

    // 馬名とそのリンクを取得
    const horseNameElement = row.querySelector('.HorseName > a');
    horse['horseName'] = horseNameElement.textContent.trim();
    horse['horseLink'] = horseNameElement.href;

    // 馬の年齢と性別を取得
    horse['ageAndSex'] = row.querySelector('.Age').textContent.trim();

    // 馬の体重を取得
    const weightElement = row.querySelector('.Weight');
    if (weightElement) {
      const weightText = weightElement.textContent.replace(/\n/g, '');
      const weightMatch = weightText.match(/(\d+)\(([-\+]?[^\)]*)\)/);
      if (weightMatch) {
        horse['weight'] = weightMatch[1]; // 馬の体重
        horse['weightChange'] = weightMatch[2]; // 体重の変化
      } else {
        horse['weight'] = weightText;
        horse['weightChange'] = '';
      }
    } else {
      horse['weight'] = '';
      horse['weightChange'] = '';
    }
    // horse['weight'] = weightElement ? weightElement.textContent.trim() : '';

    // ジョッキーの名前とそのリンクを取得
    const jockeyElement = row.querySelector('.Jockey > a');
    horse['jockeyName'] = jockeyElement.textContent.trim();
    horse['jockeyLink'] = jockeyElement.href.trim();

    // 人気と順位を取得
    horse['odds'] = row.querySelector('.Popular.Txt_R').textContent.trim();
    horse['popularityRanking'] = row.querySelector('.Popular.Txt_C').textContent.trim();

    horseData.push(horse);

  });

  // JSON形式で出力
  console.log(JSON.stringify(horseData, null, 2));
}