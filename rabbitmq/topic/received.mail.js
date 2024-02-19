const amqp = require('amqplib');
const amqp_url = 'amqp://localhost:5672';

const receivedMail = async () => {
  try {
    const connection = await amqp.connect(amqp_url);

    const channel = await connection.createChannel();

    const nameExchange = 'topic_mail';
    await channel.assertExchange(nameExchange, 'topic', {
      durable: false,
    });

    const { queue } = await channel.assertQueue('', { exclusive: true });

    // binding
    const args = process.argv.slice(c2);
    if (!args.length) {
      process.exit(0);
    }

    /*
         *  phù hợp với bất kỳ ký tự nào
         #  Khớp với 1 hoặc nhieu từ
     */

    console.log(`Waiting queue ${queue}::: topic::${args} `);

    args.forEach(async (key) => {
      await channel.bindQueue(queue, nameExchange, key);
    });

    await channel.consume(queue, (msg) => {
      console.log(
        `Routing key:${msg.fields.routingKey}:: msg::${msg.content.toString()}`
      );
    });
  } catch (error) {
    console.log({ error });
  }
};

receivedMail();
