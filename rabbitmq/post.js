const amqp = require('amqplib');

const amqp_url_cloud =
  'amqps://zfhvyyvc:M6AgBBgjKxJ1fzYaxepd9XLBaJjcYIO6@armadillo.rmq.cloudamqp.com/zfhvyyvc';
const amqp_url_docker = 'amqp://localhost:5672';

const postVide = async ({ msg }) => {
  try {
    // 1. connect
    const connection = await amqp.connect(amqp_url_docker);

    // 2 create channel
    const channel = await connection.createChannel();

    // 3. create exchange
    const exchange = 'video';

    await channel.assertExchange(exchange, 'fanout', { durable: false });

    // 4. publish video
    await channel.publish(exchange, '', Buffer.from(msg));

    console.log(`[X] Send OK:::${msg}`);

    // 5. close and exit connect after 2s
    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 2000);
  } catch (error) {}
};

const msg = process.argv.slice(2).join(' ') || 'Hello ';
postVide({ msg });
