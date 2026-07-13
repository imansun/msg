import { useState, ReactNode } from "react";

import {
  ChatContextProvider,
  ChatContextValue,
  NewMessageData,
} from "./Chat.context";
import { fakeChats, Chat } from "./data";
import { randomId } from "@/utils/randomId";

// ----------------------------------------------------------------------

interface AnswerResponse {
  answer: string;
}

const answerPromise = (): Promise<AnswerResponse> =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          answer:
            "من اطلاعات را در نوک انگشتانت قرار می‌دهم، به سوالاتت با وضوح پاسخ می‌دهم و گفتگوها را جذاب نگه می‌دارم. می‌توانم طیف وسیعی از موضوعات را پوشش دهم، از پرسش‌های واقعی تا نوشتن خلاقانه.",
        }),
      1000,
    ),
  );

export function ChatProvider({ children }: { children: ReactNode }) {
  const [chats, setChats] = useState<Chat[]>(fakeChats);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const currentChat = chats.find((chat) => chat.id === activeChatId);

  const getQuestion = async (chatId: string, messageId: string) => {
    try {
      const response = await answerPromise();
      setChats((prevChats) => {
        const updatedChats = prevChats.slice();
        const chatIndex = updatedChats.findIndex((chat) => chat.id === chatId);

        if (chatIndex === -1) {
          console.error(`چت با شناسه ${chatId} پیدا نشد.`);
          return prevChats;
        }

        const message = updatedChats[chatIndex].messages.find(
          (msg) => msg.id === messageId,
        );

        if (message) {
          message.a = response.answer;
        } else {
          console.error(
            `پیام با شناسه ${messageId} در چت ${chatId} پیدا نشد.`,
          );
        }

        return updatedChats;
      });
    } catch (error) {
        console.error("خطا در دریافت پاسخ هوش مصنوعی:", error);
     
    }
  };

  const newMessage = (chatId: string | null, data: NewMessageData) => {
    const now = new Date();
    const messageId = randomId();
    const updatedChats = chats.slice();

    const chatIndex = chatId
      ? updatedChats.findIndex((chat) => chat.id === chatId)
      : -1;
    const currentChatId = chatId ?? randomId();

    if (chatIndex === -1) {
      const newChat: Chat = {
        id: currentChatId,
        messages: [
          {
            id: messageId,
            q: data.content,
            a: "",
            createdAt: now,
          },
        ],
      };
      updatedChats.unshift(newChat);
      setActiveChatId(currentChatId);
      setChats([...updatedChats]);
    } else {
      const updatedChat = updatedChats[chatIndex];
      updatedChat.messages.push({
        id: messageId,
        q: data.content,
        a: "",
        createdAt: now,
      });
      updatedChats.splice(chatIndex, 1);
      setChats([updatedChat, ...updatedChats]);
    }

    getQuestion(currentChatId, messageId);
  };

  const value: ChatContextValue = {
    chats,
    currentChat,
    newMessage,
    setActiveChatId,
  };

  return <ChatContextProvider value={value}>{children}</ChatContextProvider>;
}
