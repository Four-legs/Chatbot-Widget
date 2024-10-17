<script setup lang="ts">
import { IChatroom } from '@/types'

const props = defineProps < {
  isOpen: boolean
  activeChatroom: IChatroom
}>()

</script>
<template>
  <v-card class="w-full h-full">
    <ChatView :active-chatroom="props.activeChatroom" />
  </v-card>
</template>
