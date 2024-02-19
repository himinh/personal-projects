const amqplib = require('amqplib');
const amqp_url_docker = 'amqp://localhost:5672';

async function sendMessage(routingKey, msg) {
  try {
    // 1. connection
    const connection = await amqplib.connect(amqp_url_docker);

    // 2. create channel
    const channel = await connection.createChannel();

    // 3. create exchange
    const exchangeName = 'topic_logs';
    await channel.assertExchange(exchangeName, 'topic', { durable: false });

    channel.publish(exchangeName, routingKey, Buffer.from(msg));

    console.log(`Sent message: ${msg} with routing key: ${routingKey}`);

    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 200);
  } catch (error) {}
}

const routingKey = process.argv.slice(2)[0];
const msg = process.argv.slice(3).join(' ');

sendMessage(routingKey, msg);
