  //     #                                   #######
  //    # #   #####  #####   ####  #    #    #       #    # #    #  ####  ##### #  ####  #    #  ####
  //   #   #  #    # #    # #    # #    #    #       #    # ##   # #    #   #   # #    # ##   # #
  //  #     # #    # #    # #    # #    #    #####   #    # # #  # #        #   # #    # # #  #  ####
  //  ####### #####  #####  #    # # ## #    #       #    # #  # # #        #   # #    # #  # #      #
  //  #     # #   #  #   #  #    # ##  ##    #       #    # #   ## #    #   #   # #    # #   ## #    #
  //  #     # #    # #    #  ####  #    #    #        ####  #    #  ####    #   #  ####  #    #  ####
  //    SMALL, INLINE, SINGLE PURPOSE

const evilWizardEvents = [
  { type: 'attack', damage: 15, target: 'player3' },
  { type: 'attack', damage: 8, target: 'player1' },
  { type: 'summon', target: 'horse' },
  { type: 'attack', value: 20, target: 'player2' },
  { type: 'heal', value: 10, target: 'horse' },
  { type: 'attack', value: 10, target: 'player2' }
]

const totalDamageOnPlayer2 = evilWizardEvents
  .filter(function(event) {
    return event.type === 'attack'
  })
  .filter(function(event) {
    return event.target === 'player2'
  })
  .map(function(event) {
    return event.value
  })
  .reduce(function(prev, value) {
    return (prev || 0) + value
  })


console.log('Total Damage On Player 2:\n' + totalDamageOnPlayer2)
