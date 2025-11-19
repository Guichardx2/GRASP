class Item {
    constructor(public nome: string, public preco: number) {}
  }
  
  class Pedido {
    private itens: Item[] = [];
  
    adicionarItem(nome: string, preco: number) {
      const item = new Item(nome, preco);
      this.itens.push(item);
      console.log(`Item "${nome}" adicionado ao pedido.`);
    }
  }
  