# Microsserviço de Pagamentos

## 1. Descrição Funcional

O microsserviço de Pagamentos é responsável por processar pagamentos realizados na plataforma de e-commerce.

### Responsabilidades principais

- Validar dados do pagamento;
- Registrar pagamentos no banco de dados;
- Confirmar transações;
- Enviar eventos para outros microsserviços;
- Atualizar o status do pedido após aprovação.

---

## 2. Endpoints da API

### POST /pagamentos

Realiza o processamento de um pagamento.

#### Exemplo de requisição

```json
{
  "pedidoId": 101,
  "valor": 299.90,
  "metodo": "cartao_credito"
}
```

#### Exemplo de resposta

```json
{
  "status": "aprovado",
  "transacaoId": "TRX987654"
}
```

---

### GET /pagamentos/{id}

Consulta informações de um pagamento.

#### Exemplo de resposta

```json
{
  "transacaoId": "TRX987654",
  "status": "aprovado",
  "valor": 299.90
}
```

---

## 3. Dependências Externas

O microsserviço possui as seguintes dependências:

- Microsserviço de Pedidos;
- Banco de dados PostgreSQL;
- RabbitMQ para mensageria;
- API externa da operadora de cartão.

---

## 4. Responsável pelo Serviço

**Responsável:** Carlos Eduardo Souza Martins

**Equipe:** Desenvolvimento Backend

---

## 5. Procedimentos Básicos de Operação

### Executar localmente

```bash
npm install
npm start
```

### Verificar logs

Os logs são exibidos diretamente no terminal da aplicação.

### Health Check

```http
GET /health
```

### Reiniciar o serviço

```bash
CTRL + C
npm start
```

---

## 6. Regras de Negócio

- O pagamento deve possuir valor maior que zero;
- Apenas métodos válidos podem ser utilizados;
- O pedido deve existir antes do pagamento;
- Pagamentos recusados não atualizam o status do pedido.

---

## 7. Eventos Publicados ou Consumidos

### Eventos publicados

- pagamento_aprovado
- pagamento_recusado

### Eventos consumidos

- pedido_criado

---

## 8. Métricas Monitoradas

As principais métricas monitoradas são:

- Tempo médio de resposta;
- Taxa de erros HTTP 500;
- Quantidade de pagamentos processados;
- Uso de CPU e memória;
- Disponibilidade do serviço.

---

## 9. ADR Relacionado

### ADR-001

Foi adotada arquitetura de microsserviços para permitir escalabilidade independente do serviço de pagamentos.

---

## Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- RabbitMQ
- Docker
