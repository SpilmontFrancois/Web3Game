document.addEventListener('DOMContentLoaded', function () {
  // Do after the document fully loaded
});
// ===============================================================
// ================== SHOW/HIDE PAGES - ADMIN ====================
// ===============================================================
var adminCPItems = document.querySelector('.admin-cp-items');
var adminCPBtn = document.querySelector('.admin-cp-button');
adminCPBtn.addEventListener('click', function () { adminCPItems.classList.toggle('hidden'); }, false);



// ---------------------- Pages ---------------------- //

// Splash Page
var pageSplash = document.querySelector('#pageSplash');
// --
var splashScreenTxt = document.querySelector('#splashScreenTxt');
var splashScreenLogo = document.querySelector('#splashScreenLogo');


// Play Delay Page
var pagePlayDelay = document.querySelector('#pagePlayDelay');
// --
var palyDelayCont = document.querySelector('#palyDelayCont');
var playDelayNum = document.querySelector('#playDelayNum');


// Play Area Page
var pagePlayArea = document.querySelector('#pagePlayArea');
// --
var gmStatsTimeProgress = document.querySelector('#gmStatsTimeProgress');
var gmStatsPauseBtn = document.querySelector('#gmStatsPauseBtn');
var gmStatsScore = document.querySelector('#gmStatsScore');
var gmStatsLvlNumb = document.querySelector('#gmStatsLvlNumb');
var gameSpace = document.querySelector('#gameSpace');
var gmStatsCurrentTapCount = document.querySelector('#gmStatsCurrentTapCount');
var gmStatsTotalTapCount = document.querySelector('#gmStatsTotalTapCount');

// Game Menu Page
var pageGameMenu = document.querySelector('#pageGameMenu');
// --
var newGameBtn = document.querySelector('#newGameBtn');
var highScoresBtn = document.querySelector('#highScoresBtn');
var aboutBtn = document.querySelector('#aboutBtn');

// Tutorial Page
var pageTutorial = document.querySelector('#pageTutorial');
// --
var tutPgStartGameBtn = document.querySelector('#tutPgStartGameBtn');


// Pause Menu Page
var pagePauseMenu = document.querySelector('#pagePauseMenu');
// --
var lvlPausedScore = document.querySelector('#lvlPausedScore');
var pmRstrtLvlBtn = document.querySelector('#pmRstrtLvlBtn');
var pmCntnuGmBtn = document.querySelector('#pmCntnuGmBtn');


// --
var lvlPssdTitle = document.querySelector('#lvlPssdTtl');
var lvlPssdScore = document.querySelector('#lvlPssdScore');
var lvlPssdBonusScore = document.querySelector('#lvlPssdBonusScore');
var lvlPssdContinueNextLvlBtn = document.querySelector('#lvlPssdContinueNextLvlBtn');


// You lost page
var pageYouLost = document.querySelector('#pageYouLost');
// --
var gameOverScore = document.querySelector('#game-over-score');
var lvlLostBestScore = document.querySelector('#lvlLostBestScore');
var lvlLostTtl = document.querySelector('#lvlLostTtl');
var lvlLostTryAgainBtn = document.querySelector('#lvlLostTryAgainBtn');
var lvlLostIcon = document.querySelector('#lvlLostIcon');


// High Score Page
var pageHighScore = document.querySelector('#pageHighScore');
// --
var lvlLostNewHighScore = document.querySelector('#lvlLostNewHighScore');


// About Page
var pageAbout = document.querySelector('#pageAbout');
// --
var abtPageBackBtn = document.querySelector('#abtPageBackBtn');


// ------- Show Hide Pages Control Panel ------- //
var playDelayPageToggle = document.getElementById('playDelayPageToggle');
var playAreaPageToggle = document.getElementById('playAreaPageToggle');
var gameMenuPageToggle = document.getElementById('gameMenuPageToggle');
var tutorialPageToggle = document.getElementById('tutorialPageToggle');
var pauseMenuPageToggle = document.getElementById('pauseMenuPageToggle');
var youLostPageToggle = document.getElementById('youLostPageToggle');
var highScorePageToggle = document.getElementById('highScorePageToggle');
var aboutPageToggle = document.getElementById('aboutPageToggle');
var splashPageToggle = document.getElementById('splashPageToggle');

var pagesTogglesArray = [
  playAreaPageToggle, gameMenuPageToggle, tutorialPageToggle, playDelayPageToggle,
  pauseMenuPageToggle,
  youLostPageToggle, highScorePageToggle, aboutPageToggle, splashPageToggle
]
var pagesArray = [
  pagePlayArea, pageGameMenu, pageTutorial, pagePlayDelay,
  pagePauseMenu,
  pageYouLost, pageHighScore, pageAbout, pageSplash
]

// show/hide pages if the checkbox is checked
togglePage = function (pageToggle, page) {
  if (pageToggle.checked) {
    toolsBox.showPage(page);
  } else {
    toolsBox.hidePage(page);
  }
}

// on click event to all toggles on the page to show/hide pages
for (var i = 0; i < pagesTogglesArray.length; i++) {
  pagesTogglesArray[i].addEventListener('click', function () {
    for (var i = 0; i < pagesTogglesArray.length; i++) {
      togglePage(pagesTogglesArray[i], pagesArray[i]);
    }
  }, false);
}
// ===============================================================
// ===============================================================


// ------------- GENERAL FUNCTIONS ------------- //
toolsBox = {
  generateUUID: function () { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  },

  delay: function (fun, delayTime) {
    var delayAction = setTimeout(fun, delayTime);
  },
  gnrtRndmNum: function (minNumb, maxNumb) { // generate random number in range
    return Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;
  },
  showPage: function (page) {
    page.style.display = "block";
  },
  hidePage: function (page) {
    page.style.display = "none";
  },
  hideSplashScreen: function () {
    splashScreenTxt.classList.add('fadeOut-animation');
    splashScreenLogo.classList.add('fadeOut-animation');
    toolsBox.delay(function () {
      toolsBox.showPage(pageGameMenu);
      toolsBox.hidePage(pageSplash);
    }, 1500); // Show after 1.5s because the fadeOut-animation takes 0.5s and has 1s delay
  },
  onClickNTouchstart: function (element, fun) { // add click and touchstart event listeners
    element.addEventListener('click', fun, false);
    element.addEventListener('touchstart', fun, false);
  },
  toggleAnimation: function (element, animationClass) { // add animation class and remove it when it's done (to enable repeating it)
    element.classList.add(animationClass);
    element.addEventListener('animationend', function () {
      element.classList.remove(animationClass);
    }, false);
  },
  windowSize: { // get the size of the page
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
  },
  pagePlayDelay: {
    updateNumber: function () {
      toolsBox.toggleAnimation(playDelayNum, 'grow-animation');
      playDelayNum.innerHTML = parseInt(playDelayNum.innerHTML, 10) - 1;
    },
    start: function () { // start counting down
      toolsBox.toggleAnimation(playDelayNum, 'grow-animation');
      var timer = setInterval(function () {
        if (playDelayNum.innerHTML > 1) {
          audioPool.playSound(delayCount);
          toolsBox.pagePlayDelay.updateNumber();
        } else {
          clearInterval(timer);
          toolsBox.hidePage(pagePlayDelay);
          playDelayNum.innerHTML = 3;
        }
      }, 500);
    }
  },

}

// ----------------------------------------------------------------- //
// -------------------- Tappable Circle Object -------------------- //

var circlesEngine = {
  create: function () {
    var element = document.createElement('div');
    element.id = toolsBox.generateUUID();

    setTimeout(function () {
      circlesEngine.remove(element, true);
    }, (gameEngine.circleDespawnTime));

    element.setAttribute('class', 'tpbl-circle ' + gameEngine.spawnCircle());
    gameSpace.appendChild(element);
    toolsBox.onClickNTouchstart(element, function () { // on click & touch start function
      element.className.includes(gameEngine.circleType.good) ? gameEngine.goodCircleTap() : gameEngine.evilCircleTap();
      gameEngine.updateCircleDespawnTime();
      circlesEngine.remove(element, false);
    });

    return element;
  },

  remove: function (circle, timePenalty) {
    if (circle != null && circle.parentNode != null) {
      circle.parentNode.removeChild(circle);
      circlesPosition[defaultGameValues.circle - 1].timeDespawn = Date.now();

      if (timePenalty === true && circle.className.includes(gameEngine.circleType.good)) {

        gameEngine.resetCircleDespawnTime();
        gameEngine.resetBonusScore();
        gameEngine.lostLife();
      }

      circlesEngine.add();
    }
  },

  destroy: function (circle) { // destroy all the circles of a specific type
    // Convert the Node List into in Array and delete all the items in it
    Array.from(circle).forEach(function (element) {
      element.parentNode.removeChild(element);
    });
  },

  setPosition: function (circle) {
    circle.style.left = circlesPosition[defaultGameValues.circle].x;
    circle.style.top = circlesPosition[defaultGameValues.circle].y;
    circlesPosition[defaultGameValues.circle].timeSpawn = Date.now();
    defaultGameValues.circle++;
  },

  add: function () { // Add circles to the game space
    if (gameEngine.currentlyPlaying) {
      circle = circlesEngine.create();
      circlesEngine.setPosition(circle);
      circlesEngine.addWithDelay(i, circle); // add CSS animation class with delay
    }
  },

  addWithDelay: function (i, circle) { // add CSS class with delay
    setTimeout(function () {
      circle.classList.add('grow-animation');
      audioPool.playSound(circleAppear);
    }, i * 50); // delay each using the index (i) * 50ms
  }
}


var circlesPosition = [
  { x: "555px", y: "138px", timeSpawn: null, timeDespawn: null },
  { x: "140px", y: "168px", timeSpawn: null, timeDespawn: null },
  { x: "344px", y: "391px", timeSpawn: null, timeDespawn: null },
  { x: "441px", y: "98px", timeSpawn: null, timeDespawn: null },
  { x: "85px", y: "112px", timeSpawn: null, timeDespawn: null },
  { x: "199px", y: "462px", timeSpawn: null, timeDespawn: null },
  { x: "490px", y: "400px", timeSpawn: null, timeDespawn: null },
  { x: "138px", y: "513px", timeSpawn: null, timeDespawn: null },
  { x: "534px", y: "70px", timeSpawn: null, timeDespawn: null },
  { x: "212px", y: "453px", timeSpawn: null, timeDespawn: null },
  { x: "178px", y: "343px", timeSpawn: null, timeDespawn: null },
  { x: "484px", y: "164px", timeSpawn: null, timeDespawn: null },
  { x: "104px", y: "170px", timeSpawn: null, timeDespawn: null },
  { x: "218px", y: "62px", timeSpawn: null, timeDespawn: null },
  { x: "262px", y: "341px", timeSpawn: null, timeDespawn: null },
  { x: "90px", y: "527px", timeSpawn: null, timeDespawn: null },
  { x: "239px", y: "526px", timeSpawn: null, timeDespawn: null },
  { x: "350px", y: "522px", timeSpawn: null, timeDespawn: null },
  { x: "62px", y: "318px", timeSpawn: null, timeDespawn: null },
  { x: "50px", y: "443px", timeSpawn: null, timeDespawn: null },
  { x: "293px", y: "522px", timeSpawn: null, timeDespawn: null },
  { x: "69px", y: "349px", timeSpawn: null, timeDespawn: null },
  { x: "191px", y: "450px", timeSpawn: null, timeDespawn: null },
  { x: "282px", y: "59px", timeSpawn: null, timeDespawn: null },
  { x: "123px", y: "523px", timeSpawn: null, timeDespawn: null },
  { x: "156px", y: "313px", timeSpawn: null, timeDespawn: null },
  { x: "236px", y: "309px", timeSpawn: null, timeDespawn: null },
  { x: "333px", y: "129px", timeSpawn: null, timeDespawn: null },
  { x: "388px", y: "502px", timeSpawn: null, timeDespawn: null },
  { x: "283px", y: "237px", timeSpawn: null, timeDespawn: null },
  { x: "200px", y: "449px", timeSpawn: null, timeDespawn: null },
  { x: "312px", y: "206px", timeSpawn: null, timeDespawn: null },
  { x: "413px", y: "102px", timeSpawn: null, timeDespawn: null },
  { x: "536px", y: "500px", timeSpawn: null, timeDespawn: null },
  { x: "173px", y: "234px", timeSpawn: null, timeDespawn: null },
  { x: "331px", y: "105px", timeSpawn: null, timeDespawn: null },
  { x: "479px", y: "394px", timeSpawn: null, timeDespawn: null },
  { x: "524px", y: "445px", timeSpawn: null, timeDespawn: null },
  { x: "438px", y: "77px", timeSpawn: null, timeDespawn: null },
  { x: "305px", y: "107px", timeSpawn: null, timeDespawn: null },
  { x: "439px", y: "352px", timeSpawn: null, timeDespawn: null },
  { x: "132px", y: "306px", timeSpawn: null, timeDespawn: null },
  { x: "540px", y: "421px", timeSpawn: null, timeDespawn: null },
  { x: "248px", y: "286px", timeSpawn: null, timeDespawn: null },
  { x: "516px", y: "222px", timeSpawn: null, timeDespawn: null },
  { x: "499px", y: "437px", timeSpawn: null, timeDespawn: null },
  { x: "415px", y: "143px", timeSpawn: null, timeDespawn: null },
  { x: "47px", y: "100px", timeSpawn: null, timeDespawn: null },
  { x: "541px", y: "349px", timeSpawn: null, timeDespawn: null },
  { x: "306px", y: "392px", timeSpawn: null, timeDespawn: null },
  { x: "97px", y: "445px", timeSpawn: null, timeDespawn: null },
  { x: "307px", y: "494px", timeSpawn: null, timeDespawn: null },
  { x: "198px", y: "212px", timeSpawn: null, timeDespawn: null },
  { x: "140px", y: "214px", timeSpawn: null, timeDespawn: null },
  { x: "476px", y: "482px", timeSpawn: null, timeDespawn: null },
  { x: "287px", y: "527px", timeSpawn: null, timeDespawn: null },
  { x: "573px", y: "98px", timeSpawn: null, timeDespawn: null },
  { x: "166px", y: "522px", timeSpawn: null, timeDespawn: null },
  { x: "202px", y: "351px", timeSpawn: null, timeDespawn: null },
  { x: "581px", y: "44px", timeSpawn: null, timeDespawn: null },
  { x: "420px", y: "472px", timeSpawn: null, timeDespawn: null },
  { x: "503px", y: "219px", timeSpawn: null, timeDespawn: null },
  { x: "485px", y: "283px", timeSpawn: null, timeDespawn: null },
  { x: "517px", y: "192px", timeSpawn: null, timeDespawn: null },
  { x: "172px", y: "230px", timeSpawn: null, timeDespawn: null },
  { x: "154px", y: "347px", timeSpawn: null, timeDespawn: null },
  { x: "303px", y: "254px", timeSpawn: null, timeDespawn: null },
  { x: "455px", y: "336px", timeSpawn: null, timeDespawn: null },
  { x: "274px", y: "334px", timeSpawn: null, timeDespawn: null },
  { x: "546px", y: "455px", timeSpawn: null, timeDespawn: null },
  { x: "52px", y: "99px", timeSpawn: null, timeDespawn: null },
  { x: "64px", y: "348px", timeSpawn: null, timeDespawn: null },
  { x: "50px", y: "388px", timeSpawn: null, timeDespawn: null },
  { x: "429px", y: "348px", timeSpawn: null, timeDespawn: null },
  { x: "460px", y: "496px", timeSpawn: null, timeDespawn: null },
  { x: "212px", y: "120px", timeSpawn: null, timeDespawn: null },
  { x: "309px", y: "479px", timeSpawn: null, timeDespawn: null },
  { x: "507px", y: "350px", timeSpawn: null, timeDespawn: null },
  { x: "469px", y: "517px", timeSpawn: null, timeDespawn: null },
  { x: "99px", y: "352px", timeSpawn: null, timeDespawn: null },
  { x: "100px", y: "453px", timeSpawn: null, timeDespawn: null },
  { x: "107px", y: "108px", timeSpawn: null, timeDespawn: null },
  { x: "173px", y: "359px", timeSpawn: null, timeDespawn: null },
  { x: "450px", y: "273px", timeSpawn: null, timeDespawn: null },
  { x: "590px", y: "251px", timeSpawn: null, timeDespawn: null },
  { x: "98px", y: "466px", timeSpawn: null, timeDespawn: null },
  { x: "284px", y: "116px", timeSpawn: null, timeDespawn: null },
  { x: "580px", y: "101px", timeSpawn: null, timeDespawn: null },
  { x: "446px", y: "402px", timeSpawn: null, timeDespawn: null },
  { x: "419px", y: "276px", timeSpawn: null, timeDespawn: null },
  { x: "420px", y: "496px", timeSpawn: null, timeDespawn: null },
  { x: "570px", y: "273px", timeSpawn: null, timeDespawn: null },
  { x: "77px", y: "85px", timeSpawn: null, timeDespawn: null },
  { x: "533px", y: "452px", timeSpawn: null, timeDespawn: null },
  { x: "54px", y: "480px", timeSpawn: null, timeDespawn: null },
  { x: "551px", y: "453px", timeSpawn: null, timeDespawn: null },
  { x: "109px", y: "402px", timeSpawn: null, timeDespawn: null },
  { x: "374px", y: "162px", timeSpawn: null, timeDespawn: null }
]

// ----------------------------------------------------------------- //
// ---------------- End of / Tappable Circle Object ---------------- //
// ----------------------------------------------------------------- //

// ---------------------- Game Engine Object ---------------------- //
var defaultGameValues = {
  score: 0,
  life: 3,
  circle: 0,
  circleDespawnTime: 2000
}

var gameEngine = {

  circleDespawnTime: 2000,
  currentlyPlaying: false,
  life: 3,
  currentStreak: 0,
  streakBreaker: [0, 0, 0, 0],
  circleType: {
    good: "good-circle",
    evil: "evil-circle"
  },
  chanceToHaveGoodCircle: 0.25,
  timePenalty: 8,
  score: 0,
  goodCirclesCount: 2,
  evilCirclesCount: 5,
  highestScore: 0,
  bonusScore: 0,

  spawnCircle: function () {
    var circleType = " c-red evil-circle";

    if (Math.random() <= gameEngine.chanceToHaveGoodCircle) {
      return circleType = "c-blue good-circle";

    }

    return circleType;
  },
  updateScore: function (amount) { //add amount to score
    if (amount < 0) {
      document.getElementById("gmStatsScore").innerHTML = "0";
      gameEngine.lostLife();
    }
    else {
      gameEngine.score = amount;
      gmStatsScore.innerHTML = gameEngine.score;
    }
  },
  lostLife: function () {
    if (gameEngine.life <= 0) {
      gameEngine.gameOver();
    }
    gameEngine.currentStreak++;
    gameEngine.life--;
    console.log("You lost a life! 😢");
    document.getElementById("gmStatsCurrentLife").innerHTML = gameEngine.life;
  },

  updateCircleDespawnTime() {
    gameEngine.circleDespawnTime = defaultGameValues.circleDespawnTime - (gameEngine.bonusScore * 100);
  },

  resetCircleDespawnTime() {
    gameEngine.circleDespawnTime = defaultGameValues.circleDespawnTime;
  },

  updateBonusScore: function () {
    gameEngine.bonusScore++;
    document.getElementById("gmStatsBonus").innerHTML = gameEngine.bonusScore;
  },

  resetBonusScore: function () {
    gameEngine.bonusScore = 0;
    document.getElementById("gmStatsBonus").innerHTML = gameEngine.bonusScore;
  },

  resetSendScoreToBlockchainbutton: function () {
    $('#sbmt-score').removeAttr("disabled");
    $('#sbmt-score').addClass("btn-blue");
  },

  resetCirclesPositionArray: function () {
    circlesPosition.forEach(circlePosition => {
      circlePosition.timeSpawn = null;
      circlePosition.timeDespawn = null;
    });
  },
  resetLife: function () {
    document.getElementById("gmStatsCurrentLife").innerHTML = "3";
    gameEngine.life = defaultGameValues.life;
  },

  resetStreak: function () {
    gameEngine.currentStreak = 0;
    gameEngine.streakBreaker = [0, 0, 0, 0]
  },

  reset: function () { // reset the level values from the levels engine to start a new game
    gameEngine.resetSendScoreToBlockchainbutton();
    gameEngine.resetCirclesPositionArray();
    gameEngine.updateScore(defaultGameValues.score);
    gameEngine.resetLife();
    gameEngine.resetStreak();
    defaultGameValues.circle = 0;
    gameEngine.goodCirclesCount = defaultGameValues.goodCirclesCount;
    gameEngine.evilCirclesCount = defaultGameValues.evilCirclesCount;
  },
  start: function () {
    gameEngine.currentlyPlaying = true;
    // Inatial level setup & adding data to the game engine
    gameEngine.updateScore(gameEngine.score);
    gameEngine.goodCirclesCount = gameEngine.goodCirclesCount;
    gameEngine.evilCirclesCount = gameEngine.evilCirclesCount;

    console.log('Game Started! 🏁');
    // adding circles to the game space
    circlesEngine.add();
  },
  goodCircleTap: function () {
    var pts = (gameEngine.bonusScore === 0) ? 10 : gameEngine.bonusScore * 10;
    gameEngine.streakBreaker[gameEngine.currentStreak]++;
    gameEngine.updateBonusScore();
    gameEngine.updateScore(gameEngine.score + pts);
  },
  evilCircleTap: function () {
    gameEngine.resetBonusScore();
    gameEngine.updateScore(gameEngine.score - 10);
    // gameEngine.lostLife();
  },

  stop: function () { // stop the game and reset level values
    gameEngine.currentlyPlaying = false;
    console.log('game STOPPED!');
  },

  gameLost: async function () {
    audioPool.playSound(levelLost);
    gameOverScore.innerHTML = gameEngine.score;
    toolsBox.hidePage(pagePlayArea);

    // Disable button and renable after 1 second (to avoid accidental clicking on page load)
    $('#sbmt-score').attr('disabled', true);

    toolsBox.showPage(pageYouLost);

    setTimeout(() => {
      $('#sbmt-score').attr('disabled', false);
    }, 1000);

    gameEngine.stop();

    // Detect if MetaMask is installed
    if (window.ethereum) {
      // Request account access
      try {
        disableButton($("#sbmt-score"))
        const accounts = await ethereum.request({ method: "eth_requestAccounts" })
        $("#address").text(accounts[0])

        $("#connect-metamask").hide();

        $("#sbmt-score").attr("disabled", false);
        $("#sbmt-score").addClass("btn-blue");
      } catch (error) {
        $("#address").text("An error occured, please connect to MetaMask to submit your score.")
        if (error.code === 4001) {
          console.log("User rejected request or already has a pending request")
        } else {
          console.error(error)
        }
      }
    } else {
      disableButton($("#sbmt-score"))
      $("#address").text("MetaMask not detected")
    }
  },

  gameOver: function () { // tapping a red circle
    gameEngine.currentlyPlaying = false;
    console.log('You lost! 🐜');
    lvlLostTtl.innerHTML = "You Lost";
    if (lvlLostIcon.classList.contains('times-up-icon')) {
      lvlLostIcon.classList.remove('times-up-icon');
      lvlLostIcon.classList.add('you-lost-icon');
    }
    gameEngine.gameLost();
  },

  showBonusScore: function () {
    console.log('You got '
      + Math.round(timeEngine.timeLeft) * 10
      + " extra score because you finished "
      + timeEngine.timeLeft
      + " seconds before the time!");
    gameEngine.updateBonusScore(Math.round(timeEngine.timeLeft, 10) * 10);
    if (gameEngine.bonusScore > 0) { // if theere is some bonus score show it on level passed page
      lvlPssdBonusScore.innerHTML = "Bonus +" + gameEngine.bonusScore;
    }
    gameEngine.score += gameEngine.bonusScore; // add the bonus score to the game score
  }
}


// -------------------------------------------- //
// ---------------- Audio Pool --------------- //

var audioPool = {
  sounds: [
    circleAppear = { sound: "circleAppear", preaload: true, volume: 1, loop: false },
    touchBlue = { sound: "touchBlue", preaload: true, volume: 0.5, loop: false },
    touchRed = { sound: "touchRed", preaload: true, volume: 1, loop: false },
    levelPassed = { sound: "levelPassed", preload: true, volume: 1, loop: false },
    levelLost = { sound: "levelLost", preload: true, volume: 1, loop: false },
    buttonTap = { sound: "buttonTap", preload: true, volume: 1, loop: false },
    delayCount = { sound: "delayCount", preload: true, volume: 1, loop: false },
    timeAlmostUp = { sound: "timeAlmostUp", preload: true, volume: 0.5, loop: true }
  ],
  createAudioPlayer: function (element) {
    element.audioPlayer = document.createElement('audio');

    mp3Source = document.createElement('source');
    oggSource = document.createElement('source');

    // Get the name of the sounds from the object inside the array
    mp3Link = "sounds/mp3/" + element.sound + ".mp3";
    oggLink = "sounds/ogg/" + element.sound + ".ogg";

    // Setting the attributes for the source elemnts
    mp3Source.setAttribute('type', 'audio/mpeg');
    oggSource.setAttribute('type', 'audio/ogg');
    mp3Source.setAttribute('src', mp3Link);
    oggSource.setAttribute('src', oggLink);

    // Appending the sources to the player, and appending the player to the page
    element.audioPlayer.appendChild(mp3Source);
    element.audioPlayer.appendChild(oggSource);
    document.body.appendChild(element.audioPlayer);

    element.audioPlayer.volume = element.volume; // setting the volume

    if (element.preload) {
      element.audioPlayer.load(); // preload the sound
    }
    if (element.loop) { // repeat sound
      element.audioPlayer.loop = true;
    }
  },
  addSounds: function () {
    // Create a player for each  sound
    for (var i = 0; i < audioPool.sounds.length; i++) {
      audioPool.createAudioPlayer(audioPool.sounds[i]);
    }
  },
  playSound: function (soundName) {
    soundName.audioPlayer.currentTime = 0;
    soundName.audioPlayer.play();
  },
  stopSound: function (soundName) {
    soundName.audioPlayer.pause();
    soundName.audioPlayer.currentTime = 0;
  }
}

audioPool.addSounds(); // Add sounds to the page in separate audio players


// ------------------ Buttons ------------------ //
// Stop the rubber effect on iOS
document.ontouchmove = function (e) {
  e.preventDefault();
}


// Tutorial Page Buttons
// -- Start game Button
toolsBox.onClickNTouchstart(tutPgStartGameBtn, function () {
  audioPool.playSound(buttonTap);
  gameEngine.stop(); // Reset the levels and time

  toolsBox.hidePage(pageTutorial);
  toolsBox.showPage(pagePlayDelay); // Show the 1.5 seconds delay page
  toolsBox.pagePlayDelay.start(); // Start the count down

  toolsBox.delay(function () {
    toolsBox.showPage(pagePlayArea)
  }, 1000);
  toolsBox.delay(gameEngine.start, 1500); // Delay starting the level until the countdown is finished
});

// Lost Page Buttons
// -- Try again button
lvlLostTryAgainBtn.addEventListener('click', function () {
  audioPool.playSound(buttonTap);
  toolsBox.hidePage(pageYouLost);
  toolsBox.showPage(pageGameMenu);
  gameEngine.stop();
}, false);

// Pause Menue Buttons
// -- Restart button
toolsBox.onClickNTouchstart(pmRstrtLvlBtn, function () {
  audioPool.playSound(buttonTap);
  toolsBox.showPage(pageGameMenu);
  toolsBox.hidePage(pagePauseMenu);
  gameEngine.stop();
});
// -- Continue button
toolsBox.onClickNTouchstart(pmCntnuGmBtn, function () {
  audioPool.playSound(buttonTap);
  toolsBox.showPage(pagePlayArea);
  toolsBox.hidePage(pagePauseMenu);
  gameEngine.resume();
});

// About Page Buttons
// -- Back Button
abtPageBackBtn.addEventListener('click', function () {
  audioPool.playSound(buttonTap);
  toolsBox.showPage(pageGameMenu);
  toolsBox.hidePage(pageAbout);
  toolsBox.pageAbout.stopMovingCredits(); // stop animating the credits in the about page
}, false);

// Game Menu Buttons
// -- New Game Button
newGameBtn.addEventListener('click', function () {
  audioPool.playSound(buttonTap);
  toolsBox.showPage(pageTutorial);
  toolsBox.hidePage(pageGameMenu);
}, false);
// -- About Button
aboutBtn.addEventListener('click', function () {
  audioPool.playSound(buttonTap);
  toolsBox.showPage(pageAbout);
  toolsBox.hidePage(pageGameMenu);
}, false);




// Hide Splash Screen when everything is loaded
toolsBox.hideSplashScreen();



/*****************************************************************************************************************************/
/*  Start of mantle code    **************************************************************************************************/
/*****************************************************************************************************************************/
const BackendUrl = "  https://49bb-67-69-76-217.ngrok-free.app";
//const MantleBaseUrl = "http://192.168.1.116:49173";
//const ApiKey = "HQuVX/sWLxobg6ZT4kdcTkCpGulp7NQfAxhIpUy25so=";
const tokenID = "0x4c3C1a36f4FbF0a73De2E01df75D52a0cF52DD92"
const QUICKNODE_URL = "https://boldest-icy-county.matic-testnet.quiknode.pro/357efaa90ba836908d3897fe604e5162e187b272"
const ETHERSCAN_API_KEY = "D6YP3291Q3RMZ3ZJHUNTQQ7WKU4DJWWUPR"

const web3 = new Web3(new Web3.providers.HttpProvider(QUICKNODE_URL))

// ABI endpoint provided by Etherscan
const polygonscanAbiEndpoint = `https://api-testnet.polygonscan.com/api?module=contract&action=getabi&address=${tokenID}&apikey=${ETHERSCAN_API_KEY}`

const NotFoundError = 404;
let ApprovingPlayer = [];

async function sendScoreToMetamaskSession(score) {
  const address = await ethereum.request({ method: "eth_requestAccounts" })

  if (address[0] === "") {
    return;
  }

  // Call the endpoint
  const abi = await d3.json(polygonscanAbiEndpoint)
  // Create Web3 contract object
  const contract = new web3.eth.Contract(
    JSON.parse(abi.result),
    tokenID
  )
// todo here
  // contract.methods.mint(address[0], score).send({ from: address[0] })
  
}

function disableButton(button) {
  $(button).attr("disabled", true);
  $(button).removeClass("btn-blue");
}

$("#connect-metamask").click(async function () {
  if (window.ethereum) {
    // Request account access
    try {
      disableButton($("#sbmt-score"))
      const accounts = await ethereum.request({ method: "eth_requestAccounts" })
      $("#address").text(accounts[0])

      $("#connect-metamask").hide();

      $("#sbmt-score").attr("disabled", false);
      $("#sbmt-score").addClass("btn-blue");
    } catch (error) {
      $("#address").text("An error occured, please connect to MetaMask to submit your score.")
      if (error.code === 4001) {
        console.log("User rejected request or already has a pending request")
      } else {
        console.error(error)
      }
    }
  } else {
    disableButton($("#sbmt-score"))
    $("#address").text("MetaMask not detected")
  }
})

$("#sbmt-score").click(async function () {
  showPopup()
  disableButton(this);

  var playerAddress = $("#address").val().trim() === "" ? "Undefined-appleby" : $("#address").val()

  var clickedCirclesTime = []
  for (var i = 0; i <= defaultGameValues.circle; i++) {
    if (circlesPosition[i].timeDespawn != null && circlesPosition[i].timeSpawn != null) {
      clickedCirclesTime[i] = circlesPosition[i].timeDespawn - circlesPosition[i].timeSpawn;
    }
  }

  await sendScoreToMetamaskSession(gameEngine.score)
});


function showPopup() {
  $(".popupInfo").fadeIn("slow");
  setTimeout(() => {
    $(".popupInfo").fadeOut("slow");
  }, 2000);
}

$("#lvlLostTryAgainBtn").click(function () {
  gameEngine.reset();
})

$("#highScoresBtn").click(async function () {

  $("#highscoreList").empty();
  $("#pageGameMenu").hide();
  $("#pageHighscore").show();
  await Get50BestResults();

})

$("#scoreValidator").click(async function () {
  $("#pageGameMenu").hide();
  $("#pageScoreValidator").show();
})



$("#backtohighscore").click(function () {
  $("#pageHighscoreAudit").hide();
  $("#pageHighscore").show();
  $("#circleClicked").empty();

})

$("#backtomenu").click(function () {
  $("#pageHighscore").hide();
  $("#highscoreList").empty();
  $("#pageGameMenu").show();
})

$(".backArrow").click(function () {
  $("#pageScoreValidator").hide();
  $("#pageGameMenu").show();
})

$('#scoreSignatureBtn').click(function (e) {
  ValidateScore();
});

async function Get50BestResults() {
  var request = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  };

  $('highscoreList').empty();

  await fetch(`${BackendUrl}/scores`, request).then(res => {
    if (res.ok) {
      res.json().then(json => {
        json.forEach(function (elem) {
          try {
            var date = new Date(elem.creationDate);
            var score = elem.queryParams.score
            var player = elem.queryParams.player

            $("#highscoreList").append(`<li id=${elem.id} class='highscoreitem' pointer='${elem.pointer}'><p class="firstitem">${date.toLocaleString()}<p class="seconditem">${player}<p class="thirditem">${score}</p></p></p</li>`);
          } catch (error) {
            console.log("bad receipt entry.")
          }
        });
      })
    }
  });
}

$(document).on("click", ".highscoreitem", async function () {
  $('#circleClicked').empty();
  $("#pageHighscore").hide();
  $("#pageHighscoreAudit").show();

  var receiptId = $(this).attr('id');
  var request = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  };
  await fetch(`${BackendUrl}/scores/${receiptId}`, request).then(res => {
    if (res.ok) {
      res.json().then(json => {
        var circleClicked = json.circleTime.split(",");
        var totalPoints = json.score;
        var totalClicked = 0;
        var totalPlayed = 0;
        var totalSecs = 0;
        var fastestTime = 99999999;

        circleClicked.forEach(function (elem, index) {
          var sec = parseFloat(elem) / 1000;
          if (sec < 2000) {
            totalClicked++;
            totalSecs += sec;
          }
          if (sec < fastestTime)
            fastestTime = sec;

          totalPlayed++;
          $("#circleClicked").append(`<li><p class="firstitem">circle${index} <p class="thirditem">${sec} sec</p></p</li>`);
        });

        $("#points").text(totalPoints);
        $("#total").text(totalClicked);
        $("#fastest").text(fastestTime + " SEC");
        $("#average").text(parseFloat((totalSecs / totalClicked)).toFixed(3) + " SEC");
      })

    }
    else {
      console.log("Your HighScore is not yet confirm in blockchain.")
    }
  })
})

async function ValidateScore() {

  var name = $('#scoreName').val();
  var ddmmyyyy = $('#scoreDate').val().split("/")
  var date = new Date(ddmmyyyy[2], ddmmyyyy[1] - 1, ddmmyyyy[0]);
  var amount = $('#scoreAmount').val();
  var request = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  };

  await fetch(`${BackendUrl}/scores`, request).then(res => {
    if (res.ok) {
      res.json().then(json => {
        var signature = "";
        json.forEach(function (elem) {
          try {
            scoreName = elem.fileName.split("-")
            score = scoreName[0]
            player = scoreName[1].split(".")[0]

            if (signature == "" && amount == score) {
              var elemDate = new Date(elem.creationDate)
              elemDate.setHours(0, 0, 0);
              var dateCompare = ("" + date == "" + elemDate);
              if (dateCompare && name.toLowerCase() == player.toLowerCase())
                signature = elem.pointer;
            }
          } catch (error) {
            console.log("bad receipt entry.")
          }
        });

        $('#scoreSignatureLink').attr("href", "https://testnet.wavesexplorer.com/address/" + signature.substring(3));
        $('#scoreSignatureLink').html(signature);
      })
    }
  });
}

//Contextual menu for highscore li
$(function () {
  $('#highscoreList').contextMenu({
    selector: 'li',
    callback: function (key, options) {
      $('#scoreDate').val($(this).children('.firstitem').text().split(',')[0]);
      $('#scoreName').val($(this).children('.seconditem').text());
      $('#scoreAmount').val($(this).children('.thirditem').text());
      $("#pageHighscore").hide();
      $("#highscoreList").empty();
      $('#pageScoreValidator').show();
    },
    items: {
      "edit": { name: "Validate", icon: "fas fa-share-square" }
    }
  });
});

$(document).ready(async function () {
  await Get50BestResults();
})