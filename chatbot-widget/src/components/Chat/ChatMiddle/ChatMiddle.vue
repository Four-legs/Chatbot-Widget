<script setup lang="ts">
import { IMessage } from '@/types'
import Message from '@/components/Message/Message.vue'

const props = defineProps < {
  chatroomId: number;
  messages?: IMessage[];
}>()

</script>
<template>
  <v-container id="messages-container">
    <v-row class="d-flex" v-for="message in props.messages" :key="message.message_id" justify-end>
      <Message :message="message" />
    </v-row>
  </v-container>
</template>
