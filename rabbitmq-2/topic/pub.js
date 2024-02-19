const amqplib = require('amqplib');
const amqp_url_docker = 'amqp://localhost:5672';

const pub = async () => {
  try {
    const connection = await amqplib.connect(amqp_url_docker);

    const channel = await connection.createChannel();

    const nameExchange = 'send_mail';
    await channel.assertExchange(nameExchange, 'topic', { durable: false });

    const args = process.argv.slice(2);
    const msg = args[1] || 'Fixed!';
    const topic = args[0];

    console.log(`msg::${msg} :::topic::${topic}`);

    await channel.publish(nameExchange, topic, Buffer.from(msg));

    setTimeout(() => {
      connection.close(process.exit());
    }, 500);
  } catch (error) {
    console.log({ error });
  }
};

pub();
