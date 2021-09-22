import { convertToViewFromArrayOfObj } from "../../components/PageCompnents/componentList";

export function SetTimeoutSetInterval() {
  const data = [
    {
      sec: {
        pre: `
        
    setTimeout and setInterval are not the methods of JS, functionalities of the browser being used by these names
    and the duration is minimum delay not guaranteed delay.

    setTimeout() =>
        runs a particular code after a specified time has elapsed
        const timeoutIdentifier = setTimeout(function, duration, param1, param2 ...)
            after the duration, you can pass zero or more parameter
    clearTimeout(timeoutIdentifier); // to clear the timeout
        it should be done, to avoid incorrect behaviour unmounted components

    setInterval() =>
        to repeat the execution after the same interval over and over again
        const intervalIdentifier =  setInterval(function, duration, param1, param2 ... )
    clearInterval(intervalIdentifier); // => to clear the interval

    setInterval vs recursive setTimeout

    recursive setTimeout =>
        setTimeout(function run(){
            console.log('hello');
            setTimeout(run, 100);
        },100)
        //duration is guaranteed between execution. irrespective of the time taken by the code for execution
        //you can calculate each delay before running each iteration, gives you the opportunity to run the code
        //with different time interval

    setInterval(function(){
        console.log('hello');
    }, 100 );
        //duration includes the time taken by the code execution
        //if the code takes 40ms to run, interval is 60ms
        //time interval is always the same.

    //if the code takes longer to run, its better to go for the recursive timeout rather than interval
        `,
      },
    },
  ];
  return convertToViewFromArrayOfObj(data);
}
