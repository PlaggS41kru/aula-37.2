const servicoDeUsuario = require("../services/servicoDeUsuario");
const { HttpError } = require("../errors/HttpError");

class ControladorDeUsuario {
  pegarTodos(_req, res) {
    const usuarios = servicoDeUsuario.buscarTodos();

    res.status(200).json(usuarios);  
}

  pegarUmPeloID(req, res) {
      const id = req.params.id;
      const usuario = servicoDeUsuario.pegarPeloID(id);

      res.status(200).json(usuario);
  }

  cadastrar(req, res) {
      const { nome, email, cpf, senha } = req.body;
      const resposta = servicoDeUsuario.cadastrar(nome, email, cpf, senha);

      res.status(201).json(resposta);
}

  conectar(req, res) {
      const { email, senha } = req.body;
      const resposta = servicoDeUsuario.conectar(email, senha);
      res.status(200).json(resposta);
}

  atualizar(req, res) {
      const id = req.params.id;

      const usuarioExistente = servicoDeUsuario.pegarPeloID(id);
      if (usuarioExistente.length === 0) {
        return res
          .status(404)
          .json({ messagem: "Nenhum usuário foi encontrado." });
      }

      const dadosNovos = req.body;

      const usuarioAtualizado = servicoDeUsuario.atualizar(
        id,
        dadosNovos
      );

      res.status(200).json(usuarioAtualizado)
}

  deletar (req,res){
      const id = req.params.id;
      servicoDeUsuario.deletar(id);

      res.status(204).json({ message: "Deletado com sucesso"});
  } 
}


module.exports = new ControladorDeUsuario();
