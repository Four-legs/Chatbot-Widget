<script setup lang="ts">
import { IChatroom } from '@/types'
import HumanMessage from '@/components/Message/HumanMessage.vue'
import AiMessage from '@/components/Message/AiMessage.vue'
import useChatStore from '@/stores/ChatStore'

const store = useChatStore()
const props = defineProps < {
  chatroomId: number;
}>()

const activeChatroom: Ref<IChatroom> = ref(store.findChatroomById(props.chatroomId))

</script>
<template>
  <v-container class="border-thin rounded overflow-y-auto">
    <v-row v-for="message in activeChatroom.messages" :key="message.message_id">
      <v-col v-if="message.role === 'human'" cols="12">
        <HumanMessage :message="message" />
      </v-col>
      <v-col v-else-if="message.role === 'ai'" cols="12">
        <AiMessage :message="message" />
      </v-col>
    </v-row>
  </v-container>
</template>
