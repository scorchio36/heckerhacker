import Definition from './Definition';

/* VocabHelper is a function that generates a list of Dictionary components to
feed back to the caller. This is a generalization that allows any info page to
add a vocab section.

DATA_FILE is a JSON file that stores the Vocab data with a specific convention. */
function VocabHelper(DATA_FILE) {


  let tempObj = DATA_FILE.terms; // grab the data from the provided file
  let tempArr = []; // will hold the Dictionary items to be returned to the caller

  // iterate through the JSON structure and pass the data to its corresponding Dictionary component.
  for(const dataTerm in tempObj) {

      tempArr.push(
        <Definition term={tempObj[dataTerm].word} definition={tempObj[dataTerm].definition} links={tempObj[dataTerm].links} key={tempObj[dataTerm].word}/>
      );
  }

  return tempArr;

}


export default VocabHelper;
