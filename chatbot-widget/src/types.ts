export interface IMessage {
  message_id: number;
  content: string;
  created_at: string;
  state: string;
  role: string;
}

export interface IChatroom {
  chat_room_id: number;
  chat_room_name: string;
  created_at: string;
  messages: IMessage[];
}
