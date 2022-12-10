
const countdownModule = require('./countdownModule');

/******************************************************

  Entry point

******************************************************/
//Generate X challenge blocks
for (let i = 0; i < 400; i++) {

  countdownModule.initiateLists();
  countdownModule.printLog(countdownModule.getSeedsNumbers(), countdownModule.getTargetNumbers());
}



