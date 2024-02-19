const amqp = require('amqplib');

const amqp_url_cloud =
  'amqps://zfhvyyvc:M6AgBBgjKxJ1fzYaxepd9XLBaJjcYIO6@armadillo.rmq.cloudamqp.com/zfhvyyvc';
const amqp_url_docker = 'amqp://localhost:5672';

const receivedNoti = async () => {
  try {
    // 1. connection
    const connection = await amqp.connect(amqp_url_docker);

    // 2. create chanel
    const channel = await connection.createChannel();

    // 3. create name exchange
    const exchange = 'video';

    await channel.assertExchange(exchange, 'fanout', { durable: false });

    // 4. create queue
    const queue = await channel.assertQueue('', { exclusive: true });

    console.log(`[>] Waiting for messages in ${queue.queue}`);

    // 5 binding
    await channel.bindQueue(queue.queue, exchange, '');

    await channel.consume(
      queue.queue,
      (msg) => {
        console.log(`[x] Received ${msg.content.toString()}`);
      },
      { noAck: true }
    );
  } catch (error) {}
};

receivedNoti();
