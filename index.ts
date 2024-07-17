#! /usr/bin/env node 
import inquirer from "inquirer";

//1 make object bcz user se sentence lengen 
const answers : {

    Sentence : string;
//now take input from user
}  = await inquirer.prompt([
    {
      name: "Sentence",   
      type : "input",
      message : "ENTER YOUR SENTENCE TO COUNT THE WORD"

    }
])

//BCZ WE NEED WITHOUT SPACES SO USE THIS METHOD AND IT STORES IN ANOTHER VARIABLE
//split converts it in array bcz we need sentences not alphabets and trim remove xtrxa spaces 
const words = answers.Sentence.trim().split(" ") //answers ke varaible ke undr sentence ka jo object hai usme user ka unput aeega bus wo call krwan hai
console.log(words);

//NOW COUNT WORDS WHIHC ARE COMMINg IN ARRAY what is there length
console.log(`YOUR SENTENCE WORD COUNT IS : ${ words.length}`);


