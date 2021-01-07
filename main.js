const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = ':insertx:はお正月太りをしてしまった。大好きなお餅を食べ過ぎてしまったのだ。なので、:insertx:は健康的な自炊をしてダイエットに励むことにした。:inserty:でいい感じのレシピをたくさん調べてたくさんのものを作っていくにつれて料理が趣味になってしまった。結果として5kg:insertz:。';
let insertX = 'customname';
let insertY = ['テレビ','クックパット','クラシル'];
let insertZ = ['増えた','以上増えた','の二倍くらい増えた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ボブ',name);
  }

 

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
