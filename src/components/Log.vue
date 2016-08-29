<template>
  <div class="log">
    <div class="header">
      <h1>Log</h1>
      <h2>App logs.</h2>
    </div>

    <div class="logs">
      <form class="pure-form">
        <fieldset>
          <input type="text" v-model="mac" placeholder="Search MAC here">
          <button @click="fetchData(mac)"
                  class="pure-button pure-button-primary">Search</button>
        </fieldset>
      </form>
      <div class="logs-nav">
        <button class="pure-button">Prev</button>
        <button class="pure-button">Next</button>
      </div>
      <p v-show="!isLoad">Loading...</p>

      <table class="pure-table" v-show="isLoad">
        <thead>
            <tr>
                <th>#</th>
                <th>W</th>
                <th>R</th>
                <th>Timestamp</th>
                <th>Claim(id, type)</th>
                <th>Match(role)</th>
            </tr>
        </thead>
        <tbody>
          <template v-for="(index, one) in logs.content">
            <tr :class="{ 'pure-table-odd': isOdd(index) }" @click="toggleShowDetail(index)">
              <td>{{index + 1}}</td>
              <td class="td-red">{{one.content.data.weight}}</td>
              <td class="td-red">{{one.content.data.resistance}}</td>
              <td>{{one.content.data.timestamp | formatTimestamp}}</td>
              <td>{{one.content.claim.id}}, {{one.content.claim.type}}</td>
              <td>
                {{one.content.data_match | dataMatchFormatter}}
              </td>
            </tr>
            <tr class="hidden details-{{index}}">
              <td colspan="6" class="text-blue">
                <pre>{{one | json 2}}</pre>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>

</template>


<script>
import server from '../model'
import $ from '../lib/zepto'

export default {
  name: 'Log',
  el: () => ('#log'),
  data: {
    logs: null,
    isLoad: false
  },
  methods: {
    fetchData (mac) {
      this.$set('logs', null)
      server.fetchLogs(mac)
      .done((data) => {
        this.$set('logs', data)
        setTimeout(() => {
          this.$set('isLoad', true)
        }, 100)
      })
      .fail(() => {
        this.logs = null
        console.log('Fetch data failed.')
      })
    },
    isOdd (index) {
      return index % 2
    },
    toggleShowDetail (index) {
      let details = $('.details-' + index)
      details.toggleClass('hidden')
    }
  },
  ready: function () {
    console.log('Page ready.')
    this.fetchData()
  }
}
</script>


<style scoped>
.hidden {
  display: none;
}
.td-red {
  color: red;
}
.text-blue {
  color: #0B6BA9;
}
.logs-nav {
  padding-top: 5px;
  padding-bottom: 5px;
}
.button-secondary {
  color: white;
  border-radius: 4px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
</style>
