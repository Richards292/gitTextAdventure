var playerName = ''

// An Array of the available weapons during weapon select.
var weapons = ['sword', 'bow', 'staff', 'spear', 'shield', 'nothing', 'flamethrower', 'magic', 'the blacksmith', 'blacksmith', 'fist', 'fists', 'axe', 'mace', 'hammer', 'dagger', 'knife']

// GAME START
function startGame () {
  playerName = window.prompt('I\'m glad you\'re playing! How about we start with a name?')

  // GETTING THE PLAYER'S NAME
  if (playerName) {
    var action = window.confirm('Your name is ' + playerName + '?')

    while (!action || action === '' || action === null || action === undefined) {
      playerName = window.prompt('Well, what is your name then?')

      if (!playerName) {
        playerName = window.prompt('You don\'t have to tell me your name, but i\'m calling you \'player\' if you don\'t. Where\'s the immersion in that?')

        if (!playerName) {
          playerName = 'Player'
          break
        }
      }
      action = window.confirm('Your name is ' + playerName + '?')
    }

    window.alert('Nice to meet you, ' + playerName + '! ')

  // PLAYER DIDN'T ENTER ANYTHING
  } else {
    playerName = window.prompt('You don\'t have to tell me your name, but i\'m calling you \'player\' if you don\'t. Where\'s the immersion in that?')

    // PLAYER INPUT NAME
    if (playerName) {
      action = window.confirm('Your name is ' + playerName + '?')

      while (!action) {
        playerName = window.prompt('Well, what is your name then?')

        if (!playerName) {
          playerName = window.prompt('You don\'t have to tell me your name, but i\'m calling you \'player\' if you don\'t. Where\'s the immersion in that?')
        }

        if (!playerName) {
          window.alert('In that case, it\'s nice to meet you, player!')
          playerName = 'Player'
          break
        }

        action = window.confirm('Your name is ' + playerName + '?')
      }

      window.alert('Nice to meet you, ' + playerName + '! ')

    // PLAYER DIDN'T INPUT ANYTHING AGAIN.
    } else {
      window.alert('In that case, it\'s nice to meet you, player!')
      playerName = 'Player'
    }
  }

  window.alert('Then let\'s begin the story...')

  // BEGIN STEP 1: WEAPON SELECT
  function armUp () { // FIRST WEAPON SELECT
    var weapon = window.prompt('Legend tells of a great artifact hidden at the top of the nearby mountain, however this mountain is treacherous! What will you bring to defend yourself? Our trusty blacksmith has a number of armaments at his disposal, ask away and see if he has it!')

    // CLEAN THE INPUT
    weapon = weapon.toLowerCase().trim()
    if (weapon === 'the blacksmith') {
      weapon = 'blacksmith'
    }
    return (weapon)
  }

  // FUNCTION CALLED IF USER PICKED BAD WEAPON NAME
  function armUpFail () {
    var weapon = window.prompt('Unfortunately, the blacksmith doesn\'t have that in his stores. Perhaps try asking for a different weapon?')

    // clean the weapon input
    weapon = weapon.toLowerCase().trim()
    if (weapon === 'the blacksmith') {
      weapon = 'blacksmith'
    }
    return (weapon)
  }

  // INITIAL FUNCTION CALL FOR WEAPONS
  var weapon = armUp()

  // IF WEAPON IS VALID
  if (weapons.includes(weapon)) {
    // IF USER PICKED THE BLACKSMITH AS THEIR WEAPON
    if (weapon === 'the blacksmith' || weapon === 'blacksmith') {
      window.alert('The blacksmith doesn\'t really want be your weapon, but he DID promise, so he begrudgingly vows to defend you till your doom')
    } else { // ANY VALID WEAPON PICK
      window.alert('Ah! A ' + weapon + '! Excellent Choice.')
    }
  } else { // BAD WEAPON PICK
    weapon = armUpFail()
    // LOOP THE PROCESS TILL A VALID WEAPON IS PICKED.
    while (!weapons.includes(weapon)) {
      weapon = armUpFail()
    }
    if (weapon === 'the blacksmith' || weapon === 'blacksmith') {
      window.alert('The blacksmith doesn\'t really want be your weapon, but he DID promise, so he begrudgingly vows to defend you till your doom')
    } else {
      window.alert('Ah! A ' + weapon + '! Excellent Choice.')
    }
  }
  // END WEAPON SELECT

  // BEGIN THE JOURNEY
  action = ''
  window.alert('Now, armed with your trusty ' + weapon + ', it\'s time to embark on your journey! You arrive at the base of a cold mountain path')

  // Let the user pick a path. Error traps.
  var path = window.prompt('After a short climb up the path, you arrive at a fork in the road. Which path will you take? (right/left)')

  path = path.toLowerCase().trim()

  // Different outcome based on path. Right path is easy, left path is hard.
  while (path !== 'right' && path !== 'left') {
    path = window.prompt('Sorry, which path? (right/left)')
  }

  if (path === 'right' || path === 'left') {
    if (path === 'right') {
      var rand = Math.random()

      // 50% chance outcome
      if (rand > 0.5) {
        action = window.prompt('A bear appeared! What will you do? (attack/run)')
        action = action.toLowerCase().trim()

        while (action !== 'attack' && action !== 'run') {
          action = window.prompt('Sorry, what will you do? (attack/run)')
        }

        if (action === 'attack') {
          window.alert('You swing your ' + weapon + ' at the bear!')

          if (weapon === 'blacksmith') {
            window.alert('The blacksmith doesn\'t make a very good weapon, and the bear mauls you both to death.')

            gameOver()
          } else {
            window.alert('You manage to defeat the bear. Good thing you had that ' + weapon + ' with you!')
          }
        } else {
          window.alert('You flee the bear and go home in defeat. Perhaps you\'ll have the courage to tackle the mountain another day.')

          gameOver()
        }
      }

      // 20% chance outcome
      if (rand > 0.3 && rand < 0.5) {
        action = window.prompt('A wolf appeared! What will you do? (attack/run)')
        action = action.toLowerCase().trim()

        while (action !== 'attack' && action !== 'run') {
          action = window.prompt('Sorry, what will you do? (attack/run)')
        }

        if (action === 'attack') {
          window.alert('You swing your ' + weapon + ' at the wolf!')

          if (weapon === 'blacksmith') {
            window.alert('The blacksmith doesn\'t make a very good weapon, and the wolf mauls you both to death.')

            gameOver()
          } else {
            window.alert('You manage to defeat the wolf. Good thing you had that ' + weapon + ' with you!')
          }
        } else {
          window.alert('You flee the wolf and go home in defeat. Perhaps you\'ll have the courage to tackle the mountain another day.')

          gameOver()
        }
      }

      // 30% chance outcome
      if (rand > 0.0 && rand < 0.3) {
        action = window.prompt('A duck appeared! What will you do? (attack/run)')
        action = action.toLowerCase().trim()

        while (action !== 'attack' && action !== 'run') {
          action = window.prompt('Sorry, what will you do? (attack/run)')
        }

        if (action === 'attack') {
          window.alert('You swing your ' + weapon + ' at the wolf!')

          if (weapon === 'blacksmith') {
            window.alert('The blacksmith draws your morals into question as you choose to attack a duck. The blacksmith leaves your party.')

            gameOver()
          } else {
            window.alert('You stare at the duck for a moment, before moving on, now alone and defenseless.')
          }
        } else {
          window.alert('You flee the duck and go home in defeat. Perhaps you\'ll have the courage to tackle the mountain another day, but who knows? You ran away from a duck.')

          gameOver()
        }
      }
    } else {
      window.alert('This seems to be a well traveled path...you don\'t encounter any trouble on your way to the top!')

      window.alert('The end!')
      var num = window.prompt('I forgot to ask for a number somewhere in the story...so tell me a number and I\'ll compare it to the number 5.')

      var intNum = parseInt(num)

      while (isNaN(intNum)) {
        num = window.prompt('I said a number...')
        intNum = parseInt(num)
      }

      if (intNum > 5) {
        window.alert('I can tell you with certainty the number ' + intNum + ' is greater than the number 5.')
      }

      if (intNum < 5) {
        window.alert('I can tell you with certainty the number ' + intNum + ' is less than the number 5.')
      }

      if (intNum === 5) {
        window.alert('I can tell you with certainty the number ' + intNum + ' is equal to the number 5.')
      }
    }
  }
}

function gameOver () {
  window.alert('Game Over! Better luck next time.')
}
