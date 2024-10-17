// ChatServiceInterface
// Interface of ChatService, intended to do axios api calls

import { IChatroom, IMessage } from '@/types'

interface IChatService {

  // [GET] request Chatroom Information to api
  // param: target chatroom id
  // return: IChatroom object corresponding target chatroom
  getChatRoomInfo(chatRoomId: number): IChatroom

  // [GET] get Chatroom Name (string)
  getChatRoomName(chatRoomId: number): string

  // [GET] get Chatroom Created_at (string)
  getChatRoomCreatedAt(chatRoomId: number): string

  // [GET] get Chatroom MessageList
  getChatRoomMessages(chatRoomId: number): IMessage[]

  // [POST] send user's Message
  // param: user message content
  // return: chatbot backend response content
  sendMessage(content: string): void

  // create a new IMessage based on input content
  createMessage(role: string, content: string): IMessage

  // add a Message to Chatroom messages
  addMessage(chatRoomId:number, message:IMessage): void

}

export default IChatService
