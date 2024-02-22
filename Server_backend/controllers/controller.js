import Questions from "../models/questionsSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js'

/** get all questions */
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

/** insert all questinos */

export async function insertQuestions(req, res) {
    try {
        // Assuming questions and answers are arrays containing your data
        const questions = req.body.questions
       
        const answers = req.body.answers 

        // Insert questions and answers
        await Questions.insertMany({ questions : [ {
            id: 1,
            question: 'What is the capital of Masachusetts?',
            answerChoises: ['Boston', 'Austin', 'Annapolis', 'Chicago'],
           
          },
          {
            id: 2,
            question: 'What is the capital of Maryland?',
            answerChoises: ['Boston', 'Austin', 'Annapolis', 'Chicago'],
            
          },
          {
            id: 3,
            question: 'What is the capital of Illinois?',
            answerChoises: ['Boston', 'Austin', 'Springfield', 'Chicago'],
           
          },
          {
            id: 4,
            question: 'What is the capital of Texas?',
            answerChoises: ['Boston', 'Austin', 'Annapolis', 'Chicago'],
           
          },
          {
            id: 5,
            question: 'What is the capital of Rhode Island?',
            answerChoises: ['Boston', 'Providence', 'Annapolis', 'Chicago'],
            
          },
          {
            id: 6,
            question: 'What is the capital of Georgia?',
            answerChoises: ['Boston', 'Austin', 'Atlanta', 'Chicago'],
          
          },
          {
            id: 7,
            question: 'What is the capital of New Yorks?',
            answerChoises: ['Albany', 'Austin', 'Annapolis', 'Chicago'],
           
          },
          {
            id: 8,
            question: 'What is the capital of West Virginia?',
            answerChoises: ['Boston', 'Austin', 'Annapolis', 'Charleston'],
          
          },
          {
            id: 9,
            question: 'What is the capital of West Vermont?',
            answerChoises: ['Boston', 'Austin', 'Montpelier', 'Charleston'],
          
          },
          {
            id: 10,
            question: 'What is the capital of West Oregon?',
            answerChoises: ['Boston', 'Salem', 'Annapolis', 'Charleston'],
           
          }], answers : [0,2,2,1,1,2,0,3,2,1] });

        // Send success response
        res.json({ msg: "Data Saved Successfully!" });
    } catch (error) {
        // Send error response
        res.status(500).json({ error: error.message });
    }
}




/** Delete all Questions */
export async function dropQuestions(req, res){
   try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}

/** get all result */
export async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

/** post all result */
// export async function storeResult(req, res){
//    try {
//         const { username, result, attempts, points, achived } = req.body;
//         if(!username && !result) throw new Error('Data Not Provided...!');

//         Results.create({ username, result, attempts, points, achived }, function(err, data){
//             res.json({ msg : "Result Saved Successfully...!"})
//         })

//    } catch (error) {
//         res.json({error})
//    }
// }


export async function storeResult(req, res) {
    try {
        // Destructure data from request body
        const { username, result, attempts, points, achived } = req.body;

        // Check if required data is provided
        if (!username || !result) {
            throw new Error('Username and result must be provided.');
        }

        // Create a new result document
        const newResult = new Results({ username, result, attempts, points, achived });

        // Save the new result document to the database
        await newResult.save();

        // Send success response
        res.json({ msg: "Result saved successfully." });
    } catch (error) {
        // Send error response
        res.status(500).json({ error: error.message });
    }
}

/** delete all result */
export async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}