import { unstable_noStore as noStore } from 'next/cache';

import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';

// export const revalidate = 5; file based revalidation
// export const dynamic = 'force-dynamic'; // no store caching 

export default async function MessagesPage() {
  // noStore();
  // const response = await fetch('http://localhost:8080/messages', {
  //   next: {
  //     tags: ['msg']
  //   }
  // });

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
