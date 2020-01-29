<template>
  <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>Simulador de Custos Transbordo</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>Simulador</v-tab>
      <v-tab>Custo Fixo</v-tab>
      <v-tab>Custo Variável</v-tab>
      <v-tab>Equipamento de transbordo</v-tab>
      <v-tab>Tributação</v-tab>
      <v-tab>Variáveis de controle</v-tab>
      <v-tab>Equipamentos e instalações</v-tab>

      <v-tab-item>
        <Simulador />
      </v-tab-item>
      <v-tab-item>
        <CustoFixo />
      </v-tab-item>
      <v-tab-item>
        <CustoVariavel />
      </v-tab-item>
      <v-tab-item>
        <EquipamentoTransbordo />
      </v-tab-item>
      <v-tab-item>
        <Tributacao />
      </v-tab-item>
      <v-tab-item>
        <VariaveisControle />
      </v-tab-item>
      <v-tab-item>
        <EquipamentosInstalacoes />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import CustoFixo from '@/components/CustoFixo'
import CustoVariavel from '@/components/CustoVariavel'
import EquipamentoTransbordo from '@/components/EquipamentoTransbordo'
import Tributacao from '@/components/Tributacao'
import VariaveisControle from '@/components/VariaveisControle'
import EquipamentosInstalacoes from '@/components/EquipamentosInstalacoes'
import Simulador from '@/components/Simulador'
export default {
  name: 'tabs',
  components: {
    CustoFixo,
    CustoVariavel,
    EquipamentoTransbordo,
    Tributacao,
    VariaveisControle,
    EquipamentosInstalacoes,
    Simulador
  }
}
</script>

<style></style>
