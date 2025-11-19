class Task {
    constructor(public nome: string, public feita: boolean = false) { }
}

class TaskManager {
    private tasks: Task[] = [];

    adicionar(nome: string) {
        const tarefa = new Task(nome);
        this.tasks.push(tarefa);
        console.log(`Tarefa "${nome}" adicionada.`);
    }

    marcarFeita(nome: string) {
        const tarefa = this.tasks.find(t => t.nome === nome);
        if (tarefa) tarefa.feita = true;
        console.log(`Tarefa "${nome}" marcada como feita.`);
    }
}
