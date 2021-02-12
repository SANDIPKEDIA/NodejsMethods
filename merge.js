const exampleObj = [{
    name: 'A',
    credit: 100
  }, {
    name: 'B',
    credit: 200
  }, {
    name: 'A',
    debit: 300
  }, {
    name: 'C',
    debit: 1050
  },
  {
    name: 'B',
    debit: 70
  }];
  const listOfAmounts = [];
  const finalArr = [];
  exampleObj.map(sample => {    
    listOfAmounts.push(sample.name);
  });
  // console.log(exampleObj);
  // console.log(listOfAmounts); //[ 'A', 'B', 'A', 'C', 'B' ]
  const uniqueList = [...new Set(listOfAmounts)]; //spread operator ignore duplicates
  // console.log(uniqueList); //[ 'A', 'B', 'C' ]
  uniqueList.map(list => {   
    finalArr.push({
       name: list    //[ { name: 'A' }, { name: 'B' }, { name: 'C' } ]
    });
  });
  exampleObj.map(sample => {    
    const sampleName = sample.name; //bss name ko ek variable mein assign krderhe hein isliye bss name element arrhe hein
    console.log("sample",sample);
    // console.log("sampleName: "+sampleName); 
    finalArr.map((obj, index) => {     
      if (obj.name == sampleName) {        
        finalArr[index] = Object.assign(sample, obj); //shallow copy 
        // console.log("sampleeeeeeee",sample);
        // console.log("objjjjjjjjjj",obj); 
        console.log("kkkkkk",finalArr[index]);   //shallow copy used   
      }  
    }); 
  });
  console.log(finalArr);
   //[
//   { name: 'A', credit: 100 },
//   { name: 'B', credit: 200 },
//   { name: 'A', debit: 300 },
//   { name: 'C', debit: 1050 },
//   { name: 'B', debit: 70 }
// ]

