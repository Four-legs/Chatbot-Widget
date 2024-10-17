// Utilities
import { defineStore } from 'pinia'
import { IChatroom, IMessage } from '@/types'
import type { ComputedRef, Ref } from 'vue'

export const useChatStore = defineStore('Chatstore', () => {
  // [STATUS] ====================
  const storeStatus: Ref<string> = ref('idle')
  const activeChatroom: Ref<IChatroom | undefined> = ref(undefined)
  const ChatroomCache: Ref<IChatroom[]> = ref([])

  const ChatroomTemplate: IChatroom = {
    chat_room_id: 0,
    chat_room_name: 'New Chat',
    created_at: 'Start chat with your first message!',
    messages: [],
  }

  // [GETTER] ====================
  const getMessageList: ComputedRef<IMessage[]> = computed(() => {
    if (activeChatroom.value) return activeChatroom.value.messages
    return []
  })

  // [ACTION] ====================
  function findChatroomById (chatRoomId: number): IChatroom {
    const result: IChatroom | undefined = ChatroomCache.value.find(value => value.chat_room_id === chatRoomId)
    if (result) return result
    else return ChatroomTemplate
  }

  function setActiveChatroom (chatRoomId: number) {
    activeChatroom.value = findChatroomById(chatRoomId)
  }

  return {
    // status
    storeStatus,
    activeChatroom,
    ChatroomCache,
    ChatroomTemplate,

    // getters
    getMessageList,

    // actions
    findChatroomById,
    setActiveChatroom,
  }
})

export default useChatStore
