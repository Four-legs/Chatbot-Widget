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
  <v-progress-circular v-if="store.storeStatus !== 'idle'" indeterminate />
  <!--
  <v-container class="position-relative">
    <ChatView :active-chatroom="activeChatroom" />
  </v-container>
  -->
  <v-container id="widget-modal" v-else class="position-relative w-50 h-50">
    <WidgetModal class="w-full h-full" style="z-index: 100;" :active-chatroom="activeChatroom" :is-open="true" />
  </v-container>
</template>
