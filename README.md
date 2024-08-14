
# Harbiz's junior full-stack test solution

## By Lucia Lacort

Welcome to the repository for the junior full stack developer technical test. This project showcases my skills in problem-solving with Node.js, TypeScript, and testing with Jest.

## ❓The problem

Assign each trainer a set of clients based on the clients' preferences and the available time slots of the trainers.

## 💡 The logic

Given that there are clients who place more importance on the trainer's reputation and that some trainers have better reputations than others, I have decided to sort the trainers by their reputation in descending order and the clients by the importance they place on the trainer's reputation in descending order. 

The function iterates over the already sorted lists and if the trainer with the best reputation has an available slot, it assigns them to the first client, who values the trainer's reputation the most. The function returns a map of assignments with the list of clients on the left and the assigned trainer on the right. It also decreases the available time slots of the trainer by 1, and if no trainer can be assigned, it returns a message.

The idea is to always assign the trainer with the highest rating who has an available slot to the client who places the most importance on the trainer's reputation, in order to achieve the highest level of client satisfaction.

To calculate overall customer satisfaction, I've considered that each customer will be satisfied if they are assigned a trainer based on their criteria (in this case, the importance they place on the trainer's reputation). Therefore, I need to determine what percentage of customers were assigned a trainer and did not receive the "Trainer not available" message. To do this, I divided the number of customers who were successfully assigned a trainer by the total number of customers and multiplied it by 100 to obtain that percentage.


## 💻 The code

To write the code, in addition to making the necessary configurations, I have separated each class and function into individual files keeping in mind the organization, structure, modularity, and code reusability, ultimately ensuring that the code is clean, easy to maintain, and easily readable by all team members.

## ✅ The test

To run unit testing, I used the Jest framework. To do this, I imported the classes and functions, defined two arrays of test data, and then performed the checks using Jest's 'expect' function. To make it easier to use, I configured the project's scripts so that the tests can be run with 'npm run test'.

## 🪄 Try it!

This project was developed using Node.js and TypeScript. I decided not to compile the code to JavaScript to maintain a more fluid and straightforward workflow. To run the project and tests, ts-node was used.

### How to run the project:

1. Clone the repository and open it in Visual Studio Code.
2. Open a new terminal and run the following commands:

   - `npm install` (to install the dependencies)
   - `npx ts-node src/index.ts` (to run the code)
   - `npm test` (to run the tests)

You’ll be able to see the function's result and how the unit tests are executed.

## ⏩ Next steps

Thank you to the entire team for the opportunity and for taking the time to review my solution. In programming, there are many ways to reach the same solution, and I hope I have chosen a good path. Regardless, I would love to receive your feedback as it will help me progress.


