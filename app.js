const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.post('/pagamentos', (req, res) => {
  res.json({
    status: 'aprovado',
    transacaoId: 'TRX987654'
  });
});

app.listen(3000, () => {
  console.log('Microsserviço rodando na porta 3000');
});
