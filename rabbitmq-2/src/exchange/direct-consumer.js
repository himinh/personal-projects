const amqplib = require('amqplib');
const amqp_url_docker = 'amqp://localhost:5672';

async function receiveMessage(routingKey) {
  try {
    // 1. connection
    const connection = await amqplib.connect(amqp_url_docker);

    // 2. create channel
    const channel = await connection.createChannel();

    // 3. create exchange
    const exchangeName = 'direct_logs';
    await channel.assertExchange(exchangeName, 'direct', { durable: false });

    // 4. binding queue
    const { queue } = await channel.assertQueue('', {});
    await channel.bindQueue(queue, exchangeName, routingKey);

    // 5. consume
    channel.consume(queue, (msg) => {
      console.log(
        `Received message: ${msg.content.toString()} with routing key: ${routingKey}`
      );
    });
  } catch (error) {}
}

const routingKey = process.argv.slice(2)[0];
receiveMessage(routingKey);
