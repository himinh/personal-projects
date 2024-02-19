const amqp = require('amqplib');
const amqp_url_docker = 'amqp://localhost:5672';

const producer = async ({ msg }) => {
  try {
    // 1. connect
    const connection = await amqp.connect(amqp_url_docker);

    // 2. create channel
    const channel = await connection.createChannel();

    // 3. create queue
    const queueName = 'hello';
    await channel.assertQueue(queueName, { durable: false });

    // 4. send message
    channel.sendToQueue(queueName, Buffer.from(msg));

    console.log(`Sent message: ${msg}`);

    // close
    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 500);
  } catch (error) {
    console.log('connection error:', error);
  }
};

const msg = process.argv.slice(2).join(' ');
producer({ msg });
