<script setup lang="ts">
import { IChatroom, IMessage } from '@/types'
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
      <v-col cols="12" v-if="message.role === 'human'">
        <HumanMessage :message="message" />
      </v-col>
      <v-col cols="12" v-else-if="message.role === 'ai'">
        <AiMessage :message="message" />
      </v-col>
    </v-row>
  </v-container>
</template>
