<script setup lang="ts">
import { IMessage } from '@/types'
import ChatBottom from './Chat/ChatBottom/ChatBottom.vue'
import ChatMiddle from './Chat/ChatMiddle/ChatMiddle.vue'

const testMessages: IMessage[] = []

onBeforeMount(() => {
  const tempMsg: IMessage = {
    message_id: 1,
    content: 'Test Message',
    created_at: 'now',
    state: 'sent',
    role: 'human',
  }
  testMessages.push(tempMsg)
  const tempReplyMsg: IMessage = {
    message_id: 2,
    content: 'Test Reply Message',
    created_at: 'now',
    state: 'sent',
    role: 'ai',
  }
  testMessages.push(tempReplyMsg)
})

</script>

<template>
  <v-container id="main-content" class="h-full">
    <ChatMiddle :chatroom-id="1" :messages="testMessages" />
    <ChatBottom />
  </v-container>
</template>
