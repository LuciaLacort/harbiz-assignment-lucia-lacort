import { Trainer } from './trainer';
import { Client } from './client';

export function assignClientsToTrainers(trainers: Trainer[], clients: Client[]): { assignments: Map<string, string>, satisfaction: number } {
    trainers.sort((a, b) => b.reputation - a.reputation);
    clients.sort((a, b) => b.importance - a.importance);

    const assignments = new Map<string, string>();
    let trainerIndex = 0;
    let successfulAssignments = 0;

    for (const client of clients) {
        if (trainerIndex >= trainers.length) {
            assignments.set(client.name, 'Entrenador no disponible');
            continue;
        }
        const assignedTrainer = trainers[trainerIndex];
        assignments.set(client.name, assignedTrainer.name);
        assignedTrainer.availableSlots--;
        successfulAssignments++; 
        if (assignedTrainer.availableSlots === 0) {
            trainerIndex++;
        }
    }

    const satisfaction = (successfulAssignments / clients.length) * 100;

    return { assignments, satisfaction };
}

