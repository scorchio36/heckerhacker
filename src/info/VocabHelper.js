import Definition from './Definition';

function VocabHelper(DATA_FILE) {

  // grab the data
  let tempObj = DATA_FILE.terms;
  let tempArr = [];
  for(const dataTerm in tempObj) {

      tempArr.push(
        <Definition term={tempObj[dataTerm].word} definition={tempObj[dataTerm].definition} links={tempObj[dataTerm].links} key={tempObj[dataTerm].word}/>
      );
  }

  return tempArr;
  
}


export default VocabHelper;
