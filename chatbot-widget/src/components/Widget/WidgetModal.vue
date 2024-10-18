<script setup lang="ts">
import { IChatroom } from '@/types'

const props = defineProps < {
  isOpen: boolean
  activeChatroom: IChatroom
  width: number
  height: number
}>()

</script>
<template>
  <v-card :style="{'width':(props.width)+'px', 'height':(props.height)+'px'}">
    <ChatView :active-chatroom="props.activeChatroom" :height="props.height" :width="props.width" />
  </v-card>
</template>
