const amqplib = require('amqplib');
const amqp_url_docker = 'amqp://localhost:5672';

const sub = async () => {
  try {
    const connection = await amqplib.connect(amqp_url_docker);

    const channel = await connection.createChannel();

    const nameExchange = 'video';
    await channel.assertExchange(nameExchange, 'fanout', { durable: false });

    // create queue
    const { queue } = await channel.assertQueue('', {
      exclusive: true,
    });
    console.log('::: name queue', queue);

    // binding
    await channel.bindQueue(queue, nameExchange, '');

    await channel.consume(
      queue,
      (msg) => {
        console.log('msg::', msg.content.toString());
      },
      {
        noAck: true,
      }
    );
  } catch (error) {
    console.log({ error });
  }
};

sub();
