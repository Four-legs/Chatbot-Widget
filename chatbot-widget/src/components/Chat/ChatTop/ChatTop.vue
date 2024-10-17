<script setup lang="ts">
import useChatStore from '@/stores/ChatStore'
import { IChatroom } from '@/types'

const props = defineProps < {
  chatRoomId: number
}>()

const store = useChatStore()
const activeChatroom: IChatroom = store.findChatroomById(props.chatRoomId)

</script>

<template>
  <v-container class="rounded border-thin w-full">
    <p id="chatroom-name" class="text-h5"> {{ activeChatroom.chat_room_name }}</p>
    <p id="chatroom-start" class=""> {{ activeChatroom.created_at }}</p>
  </v-container>
</template>
