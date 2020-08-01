<template>
  <q-page class="flex flex-center" style="flex-direction: column">
    <template v-if="messages.length">
      <h3 v-for="(msg, key) in messages" :key="key">
          {{msg}}
      </h3>
    </template>
  </q-page>
</template>

<script>
import io from 'socket.io-client';
export default {
  name: 'PageIndex',
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    var socket = io.connect('http://localhost:8000')
    socket.on('msg', ({text}) => {
      this.messages.push(text)
    })
  }
}
</script>
