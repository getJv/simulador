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
  data() {
    return {
      itens: [
        {
          nome: 'Capacidade estatica',
          valor: this.$store.state.controle.capacidade_estatica,
          currency: false
        },
        {
          nome: 'Tombamento médio por hora',
          valor: this.$store.getters.ctrl_tombamento_medio_por_hora,
          currency: false
        },
        {
          nome: 'Disponibilidade por tombador',
          valor: this.$store.state.controle.disponibilidade_por_tombador,
          currency: false
        },
        {
          nome: 'Disponibilidade de caminhões no pátio',
          valor: this.$store.state.controle
            .disponibilidade_de_caminhoes_no_patio,
          currency: false
        },
        {
          nome: 'Tempo médio de armazenagem',
          valor: this.$store.getters.ctrl_tempo_medio_de_armazenagem,
          currency: false
        },
        {
          nome: 'Horas de funcionamento diário',
          valor: this.$store.state.controle.horas_de_funcionamento_diario,
          currency: false
        },
        {
          nome: 'Paradas para manutenção (mensal)',
          valor: this.$store.state.controle.paradas_para_manutencao_mensal,
          currency: false
        },
        {
          nome: 'Horas de funcionamento mensal',
          valor: this.$store.getters.ctrl_horas_de_funcionamento_mensal,
          currency: false
        },
        {
          nome: 'Meses de safra no ano',
          valor: this.$store.state.controle.meses_de_safra_no_ano,
          currency: false
        },
        {
          nome: 'Carga na entressafra',
          valor: this.$store.state.controle.carga_na_safra,
          currency: false
        },
        {
          nome: 'Carga na entre safra',
          valor: this.$store.state.controle.carga_na_entre_safra,
          currency: false
        },
        {
          nome: 'Giro',
          valor: this.$store.getters.ctrl_giro,
          currency: false
        },
        {
          nome: 'Movimentação',
          valor: this.$store.getters.ctrl_movimentacao,
          currency: false
        },
        {
          nome: 'Tarifa de energia',
          valor: this.$store.getters.ctrl_tarifa_energia,
          currency: false
        },
        {
          nome: 'Consumo médio',
          valor: this.$store.state.controle.consumo_medio,
          currency: false
        },
        {
          nome: 'Número de funcionários',
          valor: this.$store.getters.ctrl_numero_funcionarios,
          currency: false
        },
        {
          nome: 'Salário médio do setor',
          valor: this.$store.state.controle.salario_medio_do_setor,
          currency: true
        },
        {
          nome: 'Encargos Sociais',
          valor: this.$store.state.controle.encargos_sociais,
          currency: false
        },
        {
          nome: 'Beneficios',
          valor: this.$store.state.controle.beneficios,
          currency: false
        },
        {
          nome: 'Instalações',
          valor: this.$store.getters.ctrl_instalacoes,
          currency: true
        },
        {
          nome: 'Período de Depreciação Obra Civil',
          valor: this.$store.state.controle.periodo_depreciacao_obra_civil,
          currency: false
        },
        {
          nome: 'Fator de Manutenção da Obra Civil',
          valor: this.$store.state.controle.fator_manutencao_obra_civil,
          currency: false
        },
        {
          nome: 'Fator de Manutenção do maquinário',
          valor: this.$store.state.controle.fator_manutencao_do_maquinario,
          currency: false
        },
        {
          nome: 'Remuneração do capital',
          valor: this.$store.state.controle.remuneracao_do_capital,
          currency: false
        },
        {
          nome: 'Seguros',
          valor: this.$store.state.controle.seguros,
          currency: false
        },
        {
          nome: 'Margem de lucro',
          valor: this.$store.state.controle.margem_de_lucro,
          currency: false
        },
        {
          nome: 'Tarifa Limpa',
          valor: this.$store.getters.ctrl_tarifa_limpa,
          currency: true
        },
        {
          nome: 'Lucro',
          valor: this.$store.getters.ctrl_lucro,
          currency: true
        },
        {
          nome: 'Tributos',
          valor: this.$store.getters.ctrl_tributos,
          currency: true
        },
        {
          nome: 'Tarifa',
          valor: this.$store.getters.ctrl_tarifa,
          currency: true
        }
      ]
    }
  }
}
</script>

<style></style>
