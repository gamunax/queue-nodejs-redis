const {
  config: { redis },
} = require("./config");
const { bar: barWorker, barEntrance: barEntranceWorker } = require("./workers");
const Queue = require("bull");

const bar = new Queue("bar", { redis });
const barEntrance = new Queue("bar-entrance", { redis });

bar.process((job, done) => barWorker(job, done));
barEntrance.process((job, done) => barEntranceWorker(job, done));

bar.add({ name: "Jan", age: 36 });

const queues = [
  {
    name: "bar",
    hostId: "Bar Queue Manager",
    type: "bee",
    redis,
  },
  {
    name: "bar-entrance",
    hostId: "Bar Queue Manager",
    type: "bee",
    redis,
  },
];
module.exports = { bar, barEntrance, queues };
