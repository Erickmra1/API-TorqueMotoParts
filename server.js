const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/minhaapi')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Deu ruim, não conectou no MongoDB:', err));

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor está rodando aqui : http://localhost:${PORT}`);
});

const Produto = mongoose.model('Produto', {
  nome: String,
  preco: Number,
  estoque: { type: Number, default: 0 }
});

app.post('/produtos', async (req, res) => {
  try {
    const { nome, preco, estoque } = req.body;

    
    if (!nome || nome.trim() === '' || isNaN(preco) || preco <= 0 || isNaN(estoque) || estoque <= 0) {
      return res.status(400).json({ erro: 'Por favor, preencha o Nome, e insira valores válidos para Preço e Estoque.' });
    }
    

    const produto = new Produto({ nome: nome.trim(), preco, estoque });
    const salvo = await produto.save();
    res.status(201).json(salvo);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});


app.put('/produtos/:id', async (req, res) => {
  try {
    const { nome, preco, estoque } = req.body;

    
    if (!nome || nome.trim() === '' || isNaN(preco) || preco <= 0 || isNaN(estoque) || estoque <= 0) {
        return res.status(400).json({ erro: 'Por favor, preencha o Nome, e insira valores numéricos positivos para Preço e Estoque.' });
    }
   
    const produto = await Produto.findByIdAndUpdate(req.params.id, { nome: nome.trim(), preco, estoque }, { new: true });
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json(produto);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

app.get('/produtos', async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

app.get('/produtos/:id', async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json(produto);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

app.delete('/produtos/:id', async (req, res) => {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json({ mensagem: 'Produto removido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});