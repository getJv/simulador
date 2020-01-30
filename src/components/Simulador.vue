<template>
  <v-card elevation="5" class="ma-5">
    <v-toolbar flat color="green darken-3" dark>
      <v-toolbar-title>Simulador de Custos Transbordo</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-row align="center">
        <v-col cols="12">
          <p class="text-center text-uppercase headline">Variáveis básicas</p>
          <v-divider class="mx-4"></v-divider>
        </v-col>
        <v-col cols="12">
          <v-select :items="items" outlined label="Tipo de carga" />
        </v-col>
        <v-col cols="12">
          <v-select :items="items" outlined label="Tipo de Fluxo" />
        </v-col>

        <v-col cols="12">
          <p class="text-center text-uppercase headline">
            <span>Variáveis Customizadas</span>
          </p>
          <v-divider class="mx-4"></v-divider>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            outlined
            label="Capacidade estática (toneladas)"
            v-model="capacidade_estatica"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            outlined
            disabled
            label="Tarifa energia (R$/kWh)"
            :value="$store.getters.ctrl_tarifa_energia"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            outlined
            label="Capacidade de tombamento por hora"
            :value="$store.getters.ctrl_tombamento_medio_por_hora"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            outlined
            disabled
            label="Numero de funcionários"
            :value="$store.getters.ctrl_numero_funcionarios"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            disabled
            outlined
            label="Tempo médio armazenagem (dias)"
            v-model="$store.getters.ctrl_tempo_medio_de_armazenagem"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            outlined
            label="Salário médio (R$)"
            v-model="salario_medio_do_setor"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="green darken-2">
          <v-row justify="center" align="center">
            <v-col cols="12" sm="3">
              <v-card>
                <v-card-text>
                  <p class="caption">Tarifa</p>
                  <p class="text-center headline">
                    {{ $store.getters.ctrl_tarifa | currency }}
                  </p></v-card-text
                >
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    capacidade_estatica: {
      get() {
        return this.$store.state.controle.capacidade_estatica
      },
      set(value) {
        this.$store.commit('capacidade_estatica', value)
      },
    },
    salario_medio_do_setor: {
      get() {
        return this.$store.state.controle.salario_medio_do_setor
      },
      set(value) {
        this.$store.commit('salario_medio_do_setor', value)
      },
    },
  },

  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3'],
    }
  },
}
</script>

<style></style>
