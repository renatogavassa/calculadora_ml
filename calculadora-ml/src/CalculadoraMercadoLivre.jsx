import { useState } from "react";

export default function CalculadoraMercadoLivre() {
  const [precoCusto, setPrecoCusto] = useState(0);
  const [lucroDesejado, setLucroDesejado] = useState(30);
  const [frete, setFrete] = useState(0);
  const [imposto, setImposto] = useState(0);
  const [comissao, setComissao] = useState(16);

  const precoZero = precoCusto / (1 - (comissao / 100)) + frete + (precoCusto * (imposto / 100));
  const precoLucro = precoZero * (1 + lucroDesejado / 100);
  const precoMaxVendas = precoZero * 1.1;

  const formatReal = (valor) =>
    valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h2>Calculadora Mercado Livre</h2>
      <label>Preço de Custo (R$)</label>
      <input type="number" value={precoCusto} onChange={(e) => setPrecoCusto(parseFloat(e.target.value))} /><br/>

      <label>Frete Médio (R$)</label>
      <input type="number" value={frete} onChange={(e) => setFrete(parseFloat(e.target.value))} /><br/>

      <label>Imposto (%)</label>
      <input type="number" value={imposto} onChange={(e) => setImposto(parseFloat(e.target.value))} /><br/>

      <label>Comissão ML (%)</label>
      <input type="number" value={comissao} onChange={(e) => setComissao(parseFloat(e.target.value))} /><br/>

      <label>% de Lucro Desejado</label>
      <input type="number" value={lucroDesejado} onChange={(e) => setLucroDesejado(parseFloat(e.target.value))} /><br/><br/>

      <p><strong>Preço Zero a Zero:</strong> {formatReal(precoZero)}</p>
      <p><strong>Preço com Lucro Desejado:</strong> {formatReal(precoLucro)}</p>
      <p><strong>Preço para Maximizar Vendas:</strong> {formatReal(precoMaxVendas)}</p>
      <p><em>Lucro estimado: {formatReal(precoLucro - precoZero)}</em></p>
    </div>
  );
}