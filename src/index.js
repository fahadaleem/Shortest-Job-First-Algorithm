// create an array of processes
const processes = [];

for(let i =0;i<5;i++)
{
  // size of the each process arrays
  const arraySize = Math.floor(Math.random()*(10-4)+4)

  // create an array of array numbers
  const processArr =[];
  for(let j=0;j<arraySize;j++)
  {
    // random numbers to add in arrays
    const randNo = Math.floor(Math.random()*100);
    // push each random number into the array
    processArr.push(randNo);
  }
// add the process array to the processes
processes.push(processArr);
}


let comparisonArray=[];


// get the lengths of each process and add them into the array
for(let i=0;i<processes.length;i++)
{
  const data = {
index:i,
length:processes[i].length
  }

  comparisonArray.push(data);
}


// compare the length and sort the array
for(let i=0;i<comparisonArray.length;i++)
{
  let temp = 0;

  for(let j=i+1;j<comparisonArray.length;j++)
  {
    
    if(comparisonArray[j].length<comparisonArray[i].length)
    {
      temp = comparisonArray[i];
      comparisonArray[i]=comparisonArray[j];
      comparisonArray[j] = temp;
    }
  }
}

// print the process

for(let i =0;i<comparisonArray.length;i++)
{
  const processNo = comparisonArray[i].index+1;
  console.log(`process: ${processNo}`);
  processes[comparisonArray[i].index].forEach(cur=>console.log(cur));
  console.log(`process : ${processNo} is completed.`)
}