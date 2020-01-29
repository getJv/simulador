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
          <v-text-field outlined label="Capacidade estática"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field outlined label="Tarifa energia"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field outlined label="Capacidade por hora"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field outlined label="Numero de funcionários"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field outlined label="Tempo médio armazenagem"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field outlined label="Salário médio"></v-text-field>
        </v-col>
        <v-col cols="12" class="green darken-2">
          <p class="text-center text-uppercase title white--text">
            <span>Tarifa</span>
          </p>
          <p class="text-center text-uppercase headline white--text">
            <span>{{}}</span>
          </p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3']
    }
  }
}
</script>

<style></style>
