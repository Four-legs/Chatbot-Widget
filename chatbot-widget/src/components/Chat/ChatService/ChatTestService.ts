// ChatTestService
// handle dummy chatroom and messages
// in test envirionment, the service uses Pinia as backend

import { IChatroom, IMessage } from '@/types'
import IChatService from './ChatServiceInterface'
import useChatStore from '@/stores/ChatStore'

class ChatTestService implements IChatService {
  getChatRoomInfo (chatRoomId: number): IChatroom {
    // supposed to be axios GET call (load)
    const store = useChatStore()
    const testRoom: IChatroom = {
      chat_room_id: 1,
      chat_room_name: 'testRoom',
      created_at: '2024.10.14',
      messages: [],
    }

    // save testRoom to store
    store.activeChatroom = testRoom
    return testRoom
  }

  getChatRoomName (chatRoomId: number): string {
    return 'testRoom'
  }

  getChatRoomCreatedAt (chatRoomId: number): string {
    return '2024.10.14'
  }

  getChatRoomMessages (chatRoomId: number): IMessage[] {
    return []
  }

  createMessage (role: string, content: string): IMessage {
    const newMessage: IMessage = {
      message_id: 1,
      content,
      created_at: '2024.10.15',
      role,
      state: 'sent',
    }
    return newMessage
  }

  sendMessage (content: string): void {
    // update later
    const store = useChatStore()
    if (store.activeChatroom) {
      this.addMessage(store.activeChatroom?.chat_room_id, this.createMessage('human', content))
      this.addMessage(store.activeChatroom?.chat_room_id, this.createMessage('ai', 'reply message for test'))
    }
  }

  addMessage (chatRoomId: number, message: IMessage): void {
    // update later
    const store = useChatStore()
    store.activeChatroom?.messages.push(message)
  }
}

export default new ChatTestService()
