const amqplib = require('amqplib');
const amqp_url_docker = 'amqp://localhost:5672';

// create connection
const pub = async () => {
  try {
    const connection = await amqplib.connect(amqp_url_docker);
    const channel = await connection.createChannel();

    const nameExchange = 'video';
    await channel.assertExchange(nameExchange, 'fanout', { durable: false });

    const args = process.argv.slice(2).join(' ');
    await channel.publish(nameExchange, '', Buffer.from(args));

    // close
    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 300);
  } catch (error) {
    console.log({ error });
  }
};

pub();
