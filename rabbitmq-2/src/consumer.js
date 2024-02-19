const amqp = require('amqplib');
const amqp_url_docker = 'amqp://localhost:5672';

const consumer = async () => {
  try {
    // 1. connection
    const connection = await amqp.connect(amqp_url_docker);

    // 2. create channel
    const channel = await connection.createChannel();

    // 3. create queue
    const queueName = 'hello';
    await channel.assertQueue(queueName, { durable: false });

    // 4. receive message
    await channel.consume(
      queueName,
      (msg) => {
        console.log(`Received message: ${msg.content.toString()}`);
      },
      {
        noAck: true,
      }
    );
  } catch (error) {
    console.log('connection error:', error);
  }
};

consumer();
