const amqp = require('amqplib');

const amqp_url_cloud =
  'amqps://zfhvyyvc:M6AgBBgjKxJ1fzYaxepd9XLBaJjcYIO6@armadillo.rmq.cloudamqp.com/zfhvyyvc';
const amqp_url_docker = 'amqp://localhost:5672';

async function consumeMessage() {
  //  1. connect
  const connection = await amqp.connect(amqp_url_docker);

  // 2. create channel
  const channel = await connection.createChannel();

  // 3. create queue
  const queue = 'my_queue';

  await channel.assertQueue(queue, { durable: true });

  console.log(`[*] Waiting for messages in ${queue}. To exit press CTRL+C`);

  // 4. receive to queue
  channel.consume(
    queue,
    (msg) => {
      console.log(`[x] Received ${msg.content.toString()}`);
    },
    { noAck: true }
  );
}

consumeMessage();
