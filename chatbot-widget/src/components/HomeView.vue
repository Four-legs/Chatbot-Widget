<script setup lang="ts">
import { IChatroom, IMessage } from '@/types'
import ChatView from './Chat/ChatView.vue'
import ChatTestService from './Chat/ChatService/ChatTestService'
import useChatStore from '@/stores/ChatStore'

const store = useChatStore()
const activeChatroom: Ref<IChatroom> = ref(store.ChatroomTemplate)

const mainRef: Ref<HTMLElement | null> = ref(null)
const topRef: Ref<HTMLElement | null> = ref(null)
const bottomRef: Ref<HTMLElement | null> = ref(null)

const mainHeight: Ref<number> = ref(0)
const topHeight: Ref<number> = ref(0)
const middleHeight: Ref<number> = ref(0)
const bottomHeight: Ref<number> = ref(0)

let isMount = false

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
