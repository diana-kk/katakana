var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var g_aisu = Paper.image('img/g_aisu.jpg', 0, 0, 100, 100).toDefs();
var hidari = Paper.image('img/hidari.png', 0, 0, 25, 23).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 33, 25).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 페이지 이동
var topBox = Paper.g();

topBox.path('M1 45 L359 45 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#ECECEC'
});

hidari.use().transform('t16, 11').click(handlerPre).appendTo(topBox).attr({
  'cursor': 'pointer'
});

function handlerPre() {
  location.replace('NABG01.html');
}

migi.use().transform('t315, 10').click(handlerAft).appendTo(topBox).attr({
  'cursor': 'pointer'
});

function handlerAft() {
  location.replace('g_04_ii.html');
}

// 상단
var topArea = Paper.g();

// 행
topArea.text(22, 137, 'カ').click(handler01).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler01() {
  location.replace('g_08_ka.html');
}

topArea.text(22, 187, 'サ').click(handler02).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler02() {
  location.replace('g_13_sa.html');
}

topArea.text(22, 237, 'タ').click(handler03).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler03() {
  location.replace('g_18_ta.html');
}

topArea.text(22, 287, 'ナ').click(handler04).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler04() {
  location.replace('g_23_na.html');
}

topArea.text(22, 337, 'ハ').click(handler05).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler05() {
  location.replace('g_28_ha.html');
}

topArea.text(22, 387, 'マ').click(handler06).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler06() {
  location.replace('g_33_ma.html');
}

topArea.text(22, 437, 'ヤ').click(handler07).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler07() {
  location.replace('g_38_ya.html');
}

topArea.text(22, 487, 'ラ').click(handler08).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler08() {
  location.replace('g_41_ra.html');
}

topArea.text(22, 537, 'ワ').click(handler09).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler09() {
  location.replace('g_46_wa.html');
}

topArea.text(22, 587, 'ン').click(handler10).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler10() {
  location.replace('g_48_nn.html');
}

// 행의 해당 문자
topArea.circle(30, 80, 20).attr({
  'fill': '#ececec',
  'stroke-width': 2
});
topArea.text(22, 87, 'ア').click(hanlderLine).attr({
  'font-size': 20,
  'font-weight': 'bold',
  'cursor': 'pointer'
});

function hanlderLine() {
  location.reload();
}

// 라인
topArea.line(62, 60, 62, 600).attr({
  'stroke': 'gray',
  'stroke-dasharray': '10 5'
});

// 하단
var bottomArea = Paper.g();

// 단
bottomArea.circle(105, 80, 20).attr({
  'fill': '#FCF5D4',
  'stroke': '#FFB2AF',
  'stroke-width': 3
});
bottomArea.text(97, 87, 'ア').attr({
  'font-size': 20,
  'font-weight': 'bold'
});

bottomArea.circle(158, 80, 20).click(handlerI).attr({
  'fill': '#FCF5D4',
  'cursor': 'pointer'
});
bottomArea.text(150, 87, 'イ').click(handlerI).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});
function handlerI() {
  location.replace('g_04_ii.html');
}

bottomArea.circle(211, 80, 20).click(handlerU).attr({
  'fill': '#FCF5D4',
  'cursor': 'pointer'
});
bottomArea.text(203, 87, 'ウ').click(handlerU).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});
function handlerU() {
  location.replace('g_05_uu.html');
}

bottomArea.circle(264, 80, 20).click(handlerE).attr({
  'fill': '#FCF5D4',
  'cursor': 'pointer'
});
bottomArea.text(256, 87, 'エ').click(handlerE).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});
function handlerE() {
  location.replace('g_06_ee.html');
}

bottomArea.circle(317, 80, 20).click(handlerO).attr({
  'fill': '#FCF5D4',
  'cursor': 'pointer'
});
bottomArea.text(309, 87, 'オ').click(handlerO).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});
function handlerO() {
  location.replace('g_07_oo.html');
}

// 학습 문자
bottomArea.circle(211, 235, 80).click(playAud01).attr({
  'stroke': '#FFB2AF',
  'stroke-width': 8,
  'fill': '#FCF5D4',
  'cursor': 'pointer'
});

bottomArea.text(171, 270, 'ア').click(playAud01).attr({
  'font-size': 100,
  'cursor': 'pointer'
});

function playAud01() {
  var audio1 = new Audio('aud/aud_g_03_aa.wav');
  audio1.play();
}

// 단어
bottomArea.rect(100, 400, 222, 170, 5).attr({
  'stroke': '#FFB2AF',
  'stroke-width': 3,
  'fill': 'white'
});

g_aisu.use().transform('t130, 420').click(playAud02).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

var t12 = bottomArea.text(183, 550, ['ア', 'イス', '얼음']).click(playAud02).attr({
  'font-size': 25,
  'cursor': 'pointer'
});
t12.selectAll('tspan')[1].attr({
  x: 206,
  'fill': 'gray'
});
t12.selectAll('tspan')[2].attr({
  x: 260,
  'font-size': 22
});

function playAud02() {
  var audio2 = new Audio('aud/aud_g_03_aisu.wav');
  audio2.play();
}
