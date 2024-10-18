<script setup lang="ts">
import { IChatroom } from '@/types'
import ChatTestService from './Chat/ChatService/ChatTestService'
import useChatStore from '@/stores/ChatStore'
import WidgetModal from './Widget/WidgetModal.vue'

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
  <v-container v-else
               id="widget-modal"
               class="position-relative"
               style="width:600px; height:600px;"
  >
    <WidgetModal :active-chatroom="activeChatroom"
                 :height="600"
                 :is-open="true"
                 style="z-index: 100;"
                 :width="600"
    />
  </v-container>
</template>
