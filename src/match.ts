import { Trainer } from './trainer';
import { Client } from './client';

export function assignClientsToTrainers(trainers: Trainer[], clients: Client[]): Map<string, string> {

    trainers.sort((a, b) => b.reputation - a.reputation);
    clients.sort((a, b) => b.importance - a.importance);

    const assignments = new Map<string, string>();

    for (const client of clients) {
        let assigned = false;
        for (const trainer of trainers) {
            if (trainer.availableSlots > 0) {
                assignments.set(client.name, trainer.name);
                trainer.availableSlots--;
                assigned = true;
                break; 
            }
        }
        if (!assigned) {
            assignments.set(client.name, 'Entrenador no disponible');
        }
    }

    return assignments;
}
