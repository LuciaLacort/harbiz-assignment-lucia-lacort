import { Trainer } from './trainer';
import { Client } from './client';
import { assignClientsToTrainers } from './match';

const trainers: Trainer[] = [
    new Trainer('A', 4.5, 1),
    new Trainer('B', 3.2, 4),
    new Trainer('C', 1.2, 3),
    new Trainer('D', 3.4, 2)
];

const clients: Client[] = [
    new Client('q', 2.6),
    new Client('r', 3.7),
    new Client('s', 8.5),
    new Client('t', 9.7),
    new Client('u', 2.6),
    new Client('v', 4.7),
    new Client('w', 5.6),
    new Client('x', 3.7),
    new Client('y', 8.1),
    new Client('z', 2.5)
];

const assignments = assignClientsToTrainers(trainers, clients);
console.log('Assignments:', assignments);
