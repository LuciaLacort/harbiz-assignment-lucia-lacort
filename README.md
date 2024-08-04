
# Harbiz's junior full-stack test solution

## By Lucia Lacort

Welcome to the repository for the junior full stack developer technical test. This project showcases my skills in problem-solving with Node.js, TypeScript, and testing with Jest.

## ❓The problem

Assign each trainer a set of clients based on the clients' preferences and the available time slots of the trainers.

## 💡 The logic

Given that there are clients who place more importance on the trainer's reputation and that some trainers have better reputations than others, I have decided to sort the trainers by their reputation in descending order and the clients by the importance they place on the trainer's reputation in descending order. 

The function iterates over the already sorted lists and if the trainer with the best reputation has an available slot, it assigns them to the first client, who values the trainer's reputation the most. The function returns a map of assignments with the list of clients on the left and the assigned trainer on the right. It also decreases the available time slots of the trainer by 1, and if no trainer can be assigned, it returns a message.

The idea is to always assign the trainer with the highest rating who has an available slot to the client who places the most importance on the trainer's reputation, in order to achieve the highest level of client satisfaction.


## 💻 The code

To write the code, in addition to making the necessary configurations, I have separated each class and function into individual files keeping in mind the organization, structure, modularity, and code reusability, ultimately ensuring that the code is clean, easy to maintain, and easily readable by all team members.

## ✅ The test

To run unit testing, I used the Jest framework. To do this, I imported the classes and functions, defined two arrays of test data, and then performed the checks using Jest's 'expect' function. To make it easier to use, I configured the project's scripts so that the tests can be run with npm run test.


## ⏩ Next steps

Thank you to the entire team for the opportunity and for taking the time to review my solution. In programming, there are many ways to reach the same solution, and I hope I have chosen a good path. Regardless, I would love to receive your feedback as it will help me progress.


