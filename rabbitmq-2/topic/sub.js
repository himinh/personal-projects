const amqplib = require('amqplib');
const amqp_url_docker = 'amqp://localhost:5672';

const sub = async () => {
  try {
    const connection = await amqplib.connect(amqp_url_docker);

    const channel = await connection.createChannel();

    const nameExchange = 'video';
    await channel.assertExchange(nameExchange, 'topic', { durable: false });

    // create queue
    const { queue } = await channel.assertQueue('', {
      exclusive: true,
    });

    // binding
    await channel.bindQueue(queue, nameExchange, '');
    const args = process.argv.slice(2);

    if (!args.length) process.exit(0);

    args.forEach(async (key) => {
      await channel.bindQueue(queue, nameExchange, key);
    });

    await channel.consume(
      queue,
      (msg) => {
        console.log(
          'Routing key:::',
          msg.fields.routingKey,
          'msg::',
          msg.content.toString()
        );
      },
      {
        noAck: true,
      }
    );

    console.log(' [*] Waiting for messages. To exit press CTRL+C');
  } catch (error) {
    console.log({ error });
  }
};

sub();
