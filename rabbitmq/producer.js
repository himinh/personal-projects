const amqp = require('amqplib');

const amqp_url_cloud =
  'amqps://zfhvyyvc:M6AgBBgjKxJ1fzYaxepd9XLBaJjcYIO6@armadillo.rmq.cloudamqp.com/zfhvyyvc';
const amqp_url_docker = 'amqp://localhost:5672';

async function produceMessage({ msg }) {
  try {
    // 1. connect
    const connection = await amqp.connect(amqp_url_docker);

    // 2 create channel
    const channel = await connection.createChannel();

    // create queue
    const queue = 'my_queue';

    await channel.assertQueue(queue, { durable: true });

    const options = {
      // expiration: '10000', // TTL time to live
      persistent: true,
    };
    // send to queue
    channel.sendToQueue(queue, Buffer.from(msg), options);

    console.log(`[x] Sent ${msg}`);

    // close connect and channel
    // setTimeout(() => {
    //   connection.close();
    //   process.exit(0);
    // }, 1000);
  } catch (error) {}
}

const msg = process.argv.slice(2).join(' ') || 'Hello ';
produceMessage({ msg });
