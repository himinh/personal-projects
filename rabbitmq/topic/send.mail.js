const amqp = require('amqplib');
const amqp_url = 'amqp://localhost:5672';

const sendMail = async () => {
  try {
    const connection = await amqp.connect(amqp_url);

    const channel = await connection.createChannel();

    const nameExchange = 'topic_mail';
    await channel.assertExchange(nameExchange, 'topic', {
      durable: false,
    });

    const args = process.argv.slice(2);
    const msg = args[1] || 'Fixed!';
    const topic = args[0];

    console.log(`msg: ${msg}, topic: ${topic}`);

    await channel.publish(nameExchange, topic, Buffer.from(msg));

    console.log(`[x] Send OK!`);

    setTimeout(function () {
      connection.close();
      process.exit(0);
    }, 2000);
  } catch (error) {
    console.log({ error });
  }
};

sendMail();
