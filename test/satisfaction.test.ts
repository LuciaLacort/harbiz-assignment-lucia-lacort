import { assignClientsToTrainers } from '../src/satisfaction';
import { Trainer } from '../src/trainer';
import { Client } from '../src/client';

test('assign clients to trainers based on reputation and availability', () => {
    const trainers: Trainer[] = [
        new Trainer('A', 4.5, 1),
        new Trainer('B', 3.2, 4),
        new Trainer('C', 1.2, 3),
        new Trainer('D', 3.4, 2)
    ];

    const clients: Client[] = [
        new Client('t', 9.7),
        new Client('s', 8.5),
        new Client('y', 8.1),
        new Client('w', 5.6),
        new Client('v', 4.7),
        new Client('r', 3.7),
        new Client('x', 3.7),
        new Client('q', 2.6),
        new Client('u', 2.6),
        new Client('z', 2.5)
    ];

    const assignments = assignClientsToTrainers(trainers, clients);

    console.log(assignments); 

    expect(assignments.get('t')).toBe('A');
    expect(assignments.get('s')).toBe('D');    
    expect(assignments.get('y')).toBe('D');    
    expect(assignments.get('w')).toBe('B');   
    expect(assignments.get('v')).toBe('B');   
    expect(assignments.get('r')).toBe('B');  
    expect(assignments.get('x')).toBe('B');    
    expect(assignments.get('q')).toBe('C');   
    expect(assignments.get('u')).toBe('C');   
    expect(assignments.get('z')).toBe('C');   
});
