<script setup lang="ts">
import { IChatroom } from '@/types'
import ChatView from './Chat/ChatView.vue'
import ChatTestService from './Chat/ChatService/ChatTestService'
import useChatStore from '@/stores/ChatStore'

const store = useChatStore()
const activeChatroom: Ref<IChatroom> = ref(store.ChatroomTemplate)

onBeforeMount(() => {
  store.storeStatus = 'loading'
  const tempRoom: IChatroom = ChatTestService.getChatRoomInfo(1)
  store.ChatroomCache.push(tempRoom)
  store.setActiveChatroom(1)
  store.storeStatus = 'idle'
})

</script>

<template>
  <!--
  <v-progress-circular v-if="store.storeStatus !== 'idle'" indeterminate />
  -->
  <v-container class="position-relative">
    <ChatView :active-chatroom="activeChatroom" />
  </v-container>
</template>
