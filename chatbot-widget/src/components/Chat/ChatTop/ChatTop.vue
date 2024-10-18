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
  <v-container align="center" class="rounded border-thin w-full h-auto">
    <v-row>
      <v-col id="sidemenu-button" cols="2">
        <v-btn class="" icon="mdi-arrow-left" />
      </v-col>
      <v-col class="ma-0 pa-0 d-flex align-center">
        <v-container class="ma-0 pa-0 d-flex flex-column justify-center">
          <v-row>
            <p id="chatroom-name" class="text-h5"> {{ activeChatroom.chat_room_name }}</p>
          </v-row>
          <v-row>
            <p id="chatroom-start" class=""> {{ activeChatroom.created_at }}</p>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
