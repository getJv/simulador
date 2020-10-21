<template>
  <v-dialog v-model="dialog" scrollable max-width="700px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" text v-bind="attrs" v-on="on">
        <v-icon class="mr-3">
          mdi-school
        </v-icon>
        Entenda o Cálculo
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Simulador de Gases de Efeito Estufa (GEE)</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="title font-weight-light" style=" height: 500px;">
        <p class=" text-justify mt-5">
          Como forma de disseminar conhecimento para a sociedade, foi desenvolvido
          desenvolveu ferramenta que permite calcular o volume de CO2 fóssil em
          toneladas. Com esses valores o simulador já indica o total de CO2
          equivalente, que considera outros gases de efeito estufa, e o total de
          emissões em g/de CO2/TKU.
        </p>
        <p class="text-justify">
          O CO2 equivalente é uma forma de transformar outros gases como o
          metano (CH4), em uma mesma unidade de medida, de forma a permitir a
          junção matemática de gases de efeito estufa de forma generalizada, em
          uma mesma unidade.
        </p>
        <p class="text-justify">
          Para realizar os cálculos, basta selecionar o modo de transporte e
          inserir o fator de consumo em litros por mil TKUs ou utilizar o valor
          padrão médio disponibilizado previamente.
        </p>
        <p class="text-justify">
          Para fazer a simulação você precisará calcular o total de TKU da
          viagem que será simulada. Tonelada Quilômetro Útil (TKU) é uma unidade
          que mensura o esforço físico e é obtido a partir da multiplicação da
          tonelagem transportada pela distância percorrida. Por exemplo, um
          caminhão que percorreu 100 km e carregou 25 toneladas, representa um
          fluxo com 2.500 TKUs. Esse é o número que deverá ser inserido na
          calculadora.
        </p>
        <p class="text-justify">
          O fator de consumo é dado em litros por mil TKUs. Para se calcular
          esse valor é preciso saber o fator médio de consumo do veículo. Para
          isso basta dividir a quantidade de litros pelo total de quilômetros.
          Por exemplo, um veículo que consome 4 km/l representa 0,25 l/km, pois
          basta dividir 1 por 4.
        </p>
        <p class="text-justify">
          O fator de consumo é dado em litros por mil TKUs. Para se calcular
          esse valor é preciso saber o fator médio de consumo do veículo. Para
          isso basta dividir a quantidade de litros pelo total de quilômetros.
          Por exemplo, um veículo que consome 4 km/l representa 0,25 l/km, pois
          basta dividir 1 por 4.
        </p>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn block color="success" text @click="dialog = false">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "TextDescription",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style></style>
