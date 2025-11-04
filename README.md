
📅 Escalas IBJLV - 2026
Um sistema simples em HTML/CSS/JavaScript puro para consulta e visualização das escalas de Diaconia e Serviço de Café para os grupos da Igreja Batista Jesus Lírio dos Vales (IBJLV) no ano de 2026.
Este projeto visa facilitar a consulta das escalas de serviço, organizadas por grupo e mês, com destaque para datas próximas a feriados municipais, estaduais e nacionais relevantes para Jequié, Bahia.
✨ Funcionalidades
 * Consulta por Grupo e Mês: Filtre rapidamente as datas de serviço (Diaconia e Café) para qualquer um dos 8 grupos (G1 a G8) em qualquer mês de 2026.
 * Alerta de Feriados: O sistema verifica automaticamente datas próximas (véspera, dia e dia seguinte) a feriados oficiais (Nacionais, Independência da Bahia, e os municipais de Jequié) e exibe um alerta.
 * Feriados Locais Inclusos: Contempla os feriados de Jequié (BA), como Dia de Santo Antônio (13/06), São João (24/06), Dia do Evangélico (20/08) e Aniversário da Cidade (25/10), além do feriado Estadual da Bahia (02/07).
 * Acesso Rápido: Botões de atalho na tela inicial para selecionar o grupo instantaneamente.
 * Impressão / PDF: Possibilidade de imprimir a escala filtrada ou gerar um PDF através da função de impressão nativa do navegador (🖨️ Imprimir / Gerar PDF).
🛠️ Tecnologias Utilizadas
O projeto foi construído apenas com tecnologias web essenciais, tornando-o leve e rápido:
 * HTML5: Estrutura base do sistema.
 * CSS3: Estilização responsiva e tema Dark Mode.
 * JavaScript: Lógica de consulta, filtragem e verificação de feriados.
💾 Estrutura do Código
O arquivo principal é o index.html (ou o nome que você salvou o arquivo). A lógica da escala está organizada da seguinte forma:
 * <style> (CSS): Contém toda a estilização e o tratamento especial para a impressão (@media print).
 * feriados2026 (JS Array): Lista completa e atualizada dos feriados de 2026 relevantes para Jequié (BA), incluindo o dia da semana correto.
   const feriados2026 = [
    // ... feriados Nacionais, Estaduais e Municipais
];

 * escalas (JS Array): O coração do sistema, contendo o cronograma completo de serviço por dia, mês e função (Grupo, EBD, Tarde, Noite, Café).
   const escalas = [
    // { mes: "Janeiro", dia: 2, dia_semana: "Sexta-feira", grupo: "G1", EBD: "", Tarde: "", Noite: "", cafe: "" },
    // ... dados de Janeiro a Dezembro
];

 * Funções JavaScript:
   * getFeriado(): Busca se há feriado em uma data específica.
   * checarAlertasFeriado(): Verifica feriado no dia, véspera e dia seguinte para exibir o alerta de atenção.
   * consultarGrupo(): Função principal que filtra os dados e renderiza o resultado na tela.
⚙️ Configuração Manual (Desenvolvimento)
Para atualizar as escalas ou os feriados, edite o arquivo HTML diretamente:
 * Atualizar Escalas Diárias: Modifique o array const escalas = [...] na seção <script>.
   * A coluna grupo se refere a cultos/reuniões fora de domingo e do Café.
   * As colunas EBD, Tarde, Noite e cafe se referem aos serviços de domingo e ao Café das Mulheres.
   * Atenção: Se houver datas com o grupo marcado como "G?" (Grupo Pendente), é necessário preencher com o grupo correto (G1 a G8) para que o sistema funcione corretamente para aquela data.
 * Atualizar Feriados (Somente se Mudar o Ano): Modifique o array const feriados2026 = [...]. Lembre-se de verificar o dia da semana correto para o novo ano.
🤝 Contato
Para dúvidas sobre o cronograma de escalas ou sugestões de melhoria, entre em contato com o Ministério de Diaconia da IBJLV.
