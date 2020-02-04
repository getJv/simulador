<template>
  <v-card flat>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Item</th>
              <th class="text-left">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in itens" :key="item.id">
              <td>{{ item.nome }}</td>

              <td v-if="item.currency">{{ item.valor | currency }}</td>
              <td v-else>{{ item.valor }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {},
  mounted() {
    this.itens = this.itens = this.$store.state.controle
    this.itens.forEach(campo => {
      var formula = this.formulas.find(f => f.campo_id == campo.id)
      if (formula) {
        campo.valor = formula.valor
      }
      //this.total_custo_fixo += campo.valor
    })
  },
  data() {
    return {
      itens: null,
      formulas: [
        {
          campo_id: 2,
          valor: Math.round(
            this.$store.state.equipamento_transbordo[4].quantidade *
              40 *
              6 *
              this.$store.state.controle.disponibilidade_por_tombador *
              this.$store.state.controle.disponibilidade_de_caminhoes_no_patio,
          ),
        },
        {
          campo_id: 5,
          valor: Math.round(365 / this.$store.getters.ctrl_giro),
        },
        {
          campo_id: 8,
          valor:
            this.$store.state.controle.horas_de_funcionamento_diario *
            30 *
            (1 - this.$store.state.controle.paradas_para_manutencao_mensal),
        },
        {
          campo_id: 12,
          valor:
            this.$store.getters.ctrl_movimentacao /
            this.$store.state.controle.capacidade_estatica,
        },
        {
          campo_id: 13,
          valor:
            this.$store.getters.ctrl_tombamento_medio_por_hora *
              this.$store.getters.ctrl_horas_de_funcionamento_mensal *
              this.$store.state.controle.meses_de_safra_no_ano *
              this.$store.state.controle.carga_na_safra +
            this.$store.getters.ctrl_tombamento_medio_por_hora *
              this.$store.getters.ctrl_horas_de_funcionamento_mensal *
              (12 - this.$store.state.controle.meses_de_safra_no_ano) *
              this.$store.state.controle.carga_na_entre_safra,
        },
        {
          campo_id: 14,
          valor:
            Math.round(
              this.$store.state.equipamentos_instalacoes[14].valor *
                this.$store.state.inflacao.valor *
                2 *
                100,
            ) / 100,
        },
        {
          campo_id: 16,
          valor: Math.round(
            25 + (0.055 * this.$store.getters.ctrl_movimentacao) / 1000,
          ),
        },
        {
          campo_id: 20,
          valor:
            500 * this.$store.state.controle.capacidade_estatica +
            this.$store.state.equipamentos_instalacoes[11].total +
            this.$store.state.equipamentos_instalacoes[12].total,
        },
        {
          campo_id: 27,
          valor:
            (this.$store.getters.cv_total_custo_variavel +
              this.$store.getters.cf_total_custo_fixo) /
            this.$store.getters.ctrl_movimentacao,
        },
        {
          campo_id: 28,
          valor:
            this.$store.state.controle.margem_de_lucro *
            this.$store.getters.ctrl_tarifa_limpa,
        },
        {
          campo_id: 29,
          valor:
            this.$store.getters.ctrl_total_tributos *
            (this.$store.getters.ctrl_lucro +
              this.$store.getters.ctrl_tarifa_limpa),
        },
        {
          campo_id: 30,
          valor:
            Math.round(
              (this.$store.getters.ctrl_tributos +
                this.$store.getters.ctrl_lucro +
                this.$store.getters.ctrl_tarifa_limpa) *
                100,
            ) / 100,
        },
      ],
      /*  [
        {
          1
          nome: 'Capacidade estatica',
          valor: this.$store.state.controle.capacidade_estatica,
          currency: false,
        },
        {
          2
          nome: 'Tombamento médio por hora',
          valor: this.$store.getters.ctrl_tombamento_medio_por_hora,
          currency: false,
        },
        {
          id:3,
          nome: 'Disponibilidade por tombador',
          valor: this.$store.state.controle.disponibilidade_por_tombador,
          currency: false,
        },
        {
          id:4,
          nome: 'Disponibilidade de caminhões no pátio',
          valor: this.$store.state.controle
            .disponibilidade_de_caminhoes_no_patio,
          currency: false,
        },
        {
          5
          nome: 'Tempo médio de armazenagem',
          valor: this.$store.getters.ctrl_tempo_medio_de_armazenagem,
          currency: false,
        },
        {
          6
          nome: 'Horas de funcionamento diário',
          valor: this.$store.state.controle.horas_de_funcionamento_diario,
          currency: false,
        },
        {
          7
          nome: 'Paradas para manutenção (mensal)',
          valor: this.$store.state.controle.paradas_para_manutencao_mensal,
          currency: false,
        },
        {
          8
          nome: 'Horas de funcionamento mensal',
          valor: this.$store.getters.ctrl_horas_de_funcionamento_mensal,
          currency: false,
        },
        {
          9
          nome: 'Meses de safra no ano',
          valor: this.$store.state.controle.meses_de_safra_no_ano,
          currency: false,
        },
        {
          10
          nome: 'Carga na entressafra',
          valor: this.$store.state.controle.carga_na_safra,
          currency: false,
        },
        {
          11
          nome: 'Carga na entre safra',
          valor: this.$store.state.controle.carga_na_entre_safra,
          currency: false,
        },
        {
          12
          nome: 'Giro',
          valor: this.$store.getters.ctrl_giro,
          currency: false,
        },
        {
          13
          nome: 'Movimentação',
          valor: this.$store.getters.ctrl_movimentacao,
          currency: false,
        },
        {
          14
          nome: 'Tarifa de energia',
          valor: this.$store.getters.ctrl_tarifa_energia,
          currency: false,
        },
        {
          15
          nome: 'Consumo médio',
          valor: this.$store.state.controle.consumo_medio,
          currency: false,
        },
        {
          16
          nome: 'Número de funcionários',
          valor: this.$store.getters.ctrl_numero_funcionarios,
          currency: false,
        },
        {
          17
          nome: 'Salário médio do setor',
          valor: this.$store.state.controle.salario_medio_do_setor,
          currency: true,
        },
        {
          18
          nome: 'Encargos Sociais',
          valor: this.$store.state.controle.encargos_sociais,
          currency: false,
        },
        {
          19
          nome: 'Beneficios',
          valor: this.$store.state.controle.beneficios,
          currency: false,
        },
        {
          20
          nome: 'Instalações',
          valor: this.$store.getters.ctrl_instalacoes,
          currency: true,
        },
        {
          21
          nome: 'Período de Depreciação Obra Civil',
          valor: this.$store.state.controle.periodo_depreciacao_obra_civil,
          currency: false,
        },
        {
          22
          nome: 'Fator de Manutenção da Obra Civil',
          valor: this.$store.state.controle.fator_manutencao_obra_civil,
          currency: false,
        },
        {
          23
          nome: 'Fator de Manutenção do maquinário',
          valor: this.$store.state.controle.fator_manutencao_do_maquinario,
          currency: false,
        },
        {
          24
          nome: 'Remuneração do capital',
          valor: this.$store.state.controle.remuneracao_do_capital,
          currency: false,
        },
        {
          25
          nome: 'Seguros',
          valor: this.$store.state.controle.seguros,
          currency: false,
        },
        {
          26
          nome: 'Margem de lucro',
          valor: this.$store.state.controle.margem_de_lucro,
          currency: false,
        },
        {
          27
          nome: 'Tarifa Limpa',
          valor: this.$store.getters.ctrl_tarifa_limpa,
          currency: true,
        },
        {
          28
          nome: 'Lucro',
          valor: this.$store.getters.ctrl_lucro,
          currency: true,
        },
        {
          29
          nome: 'Tributos',
          valor: this.$store.getters.ctrl_tributos,
          currency: true,
        },
        {
          30
          nome: 'Tarifa',
          valor: this.$store.getters.ctrl_tarifa,
          currency: true,
        },
      ], */
    }
  },
}
</script>

<style></style>
