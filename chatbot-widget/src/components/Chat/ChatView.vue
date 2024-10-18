<script setup lang="ts">
import ChatTop from './ChatTop/ChatTop.vue'
import ChatMiddle from './ChatMiddle/ChatMiddle.vue'
import ChatBottom from './ChatBottom/ChatBottom.vue'
import { IChatroom } from '@/types'

const props = defineProps < {
  activeChatroom: IChatroom
  width: number
  height: number
}>()

</script>

<template>
  <v-container id="chat-view"
               class="border d-flex flex-column position-relative ma-0 pa-0 h-full"
               :style="{'width':(props.width)+'px', 'height': (props.height)+'px'}"
  >
    <v-row class="">
      <ChatTop id="chat-top" :chat-room-id="1" class="align-self-start pt-6" />
    </v-row>
    <v-row class="fill-height overflow-y-auto">
      <ChatMiddle id="chat-middle" :chatroom-id="1" class="grow align-self-stretch" />
    </v-row>
    <v-row class="">
      <ChatBottom id="chat-bottom" class="align-self-end" />
    </v-row>
  </v-container>
</template>
