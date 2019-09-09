
//initializa an object with codon and protein matches
var codonproteinmatches = {
  Methionine: ['AUG'],
  Phenylalanine: ['UUU', 'UUC'],
  Leucine: ['UUA', 'UUG'],
  Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
  Tyrosine: ['UAU', 'UAC'],
  Cysteine: ['UGU', 'UGC'],
  Tryptophan: ['UGG'],
};


//MAGIC NUMBER????
//if these strings are encountered then the sequence shall be terminated
const stop_sequence = ['UAA', 'UAG', 'UGA'];


 export const translate = rnastring => {
  //empty array that will be added to and returned
  let codonarray = [];

  if (rnastring) {
    //split the argument string into groups of 3
    let rnasplitinthrees = rnastring.match(/.{1,3}/g);

    for (var arritem of rnasplitinthrees){
      //store the results of the find a match function into a variable
      let protein = find_protein_that_matches(arritem)

      if (stop_sequence.includes(arritem)) {
        break;
      }
      //error handling
      else if (!protein) {
        throw new Error('Invalid codon');
      }
      codonarray.push(protein)
    }

  }
  return codonarray;
};

//function to find a codon match
const find_protein_that_matches = array_at_i =>{
  for (var key in codonproteinmatches) {
    if (codonproteinmatches[key].includes(array_at_i)) {
      return key;
    }
  }
  return false;
}
