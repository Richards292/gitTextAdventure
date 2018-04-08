var StoryLog1 = document.getElementById('log1')
var StoryLog2 = document.getElementById('log2')
var StoryLog3 = document.getElementById('log3')
var StoryLog4 = document.getElementById('log4')
var StoryLog5 = document.getElementById('log5')
var StoryLog6 = document.getElementById('log6')
var playerName = ''

// GAME START
function startGame () {
  playerName = window.prompt('I\'m glad you\'re playing! How about we start with a name?')

  if (playerName) {
    StoryLog1.textContent = '-- Your name is ' + playerName
  }

  // GETTING THE PLAYER'S NAME
  if (playerName) {
    window.alert('Nice to meet you, ' + playerName + '! ')
  } else {
    playerName = window.prompt('You don\'t have to tell me your name, but i\'m calling you \'player\' if you don\'t. Where\'s the immersion in that?')

    if (playerName) {
      StoryLog1.textContent = '-- Your name is ' + playerName
    }

    if (playerName) {
      window.alert('Nice to meet you, ' + playerName + '! ')
    } else {
      window.alert('In that case, it\'s nice to meet you, player!')
    }
  }
}
