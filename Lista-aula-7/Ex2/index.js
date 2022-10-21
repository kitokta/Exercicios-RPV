class Agenda {
  constructor() {
    this.contatos = [];
    this.agenda = [];
  }

  setContato(nome, telefone) {
    this.contatos.push({
      nome: nome,
      telefone: telefone,
    });
  }

  getContato(nome) {
    let { contatos } = this;
    let hasFound = false;

    for (let contato in contatos) {
      if (contatos[contato].nome === nome) {
        console.log(contatos[contato]);
        hasFound = true;
      }
    }

    if (hasFound === false) {
      console.log("Desculpe, não existe contato com o nome informado");
    }
  }

  getContatos() {
    console.log(this.contatos);
  }

  setAgenda(descricao, data, hora) {
    this.agenda.push({
      descricao: descricao,
      data: data,
      hora: hora,
    });
  }

  //tipo de dado que quer buscar (descricao, data ou hora) + valor do dado
  getAgenda(tipo, valor) {
    let { agenda } = this;
    let hasFound = false;
    valor.toLowerCase();

    for (let compromisso in agenda) {
      if (agenda[compromisso][tipo].toLowerCase() === valor) {
        console.log(agenda[compromisso]);
        hasFound = true;
      }
    }

    if (hasFound === false) {
      console.log("Desculpe, não existe compromisso com o dado informado");
    }
  }

  getAgendas() {
    console.log(this.agenda);
  }
}


let agenda = new Agenda();

agenda.setContato('Gab', '32984057510');
agenda.setContato('Ana', '32987654356');
agenda.setContato('João', '32976549872');

// agenda.getContatos();
// agenda.getContato('Ana');

agenda.setAgenda('Dentista', '20/11/22', '15:00');
agenda.setAgenda('Psicologa', '25/10/22', '10:00');

// agenda.getAgendas();
agenda.getAgenda('descricao','psicologa');