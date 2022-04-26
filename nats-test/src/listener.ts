import nats, { Message } from "node-nats-streaming";
import { randomBytes } from "crypto";

console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

//@ts-ignore
stan.on("connect", () => {
  console.log("Listener connected to NATS");
  //@ts-ignore
  stan.on("close", () => {
    console.log("NATS connection closed!");
    //@ts-ignore
    process.exit();
  });

  const options = stan
    .subscriptionOptions()
    .setManualAckMode(true)
    .setDeliverAllAvailable()
    .setDurableName("accounting-service");

  const subscription = stan.subscribe(
    "ticket:created",
    "queue-group-name",
    options
  );
  //@ts-ignore
  subscription.on("message", (msg: Message) => {
    const data = msg.getData();

    if (typeof data === "string") {
      console.log(`Received event #${msg.getSequence()}, with data: ${data}`);
    }

    msg.ack();
  });
});
//@ts-ignore
process.on("SIGINT", () => stan.close());
//@ts-ignore
process.on("SIGTERM", () => stan.close());
