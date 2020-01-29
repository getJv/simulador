<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <Tabs class="ma-5" />
    </v-content>
  </v-app>
</template>

<script>
import Tabs from '@/components/Tabs'
export default {
  name: 'App',

  components: {
    Tabs
  },
  methods: {
    buyTv() {
      // Dispatch the action to buy a TV
      this.$store.dispatch('removeTv', 1)
    },
    buy2Tvs() {
      // Dispatch the action to buy a TV
      this.$store.dispatch('removeTv', 2)
    }
  },
  computed: {
    totalTvCount() {
      return this.$store.state.totalTvCount
    },

    teste() {
      return this.$store.getters.cf_salarios
    }
  },

  data: () => ({})
}
</script>
