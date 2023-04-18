const Arena = require("bull-arena");
const Bee = require("bee-queue");

module.exports = (app, port, queues) => {
  const arenaConfig = Arena(
    {
      Bee,

      queues,
    },
    {
      basePath: "/arena",
      disableListen: true,
    }
  );
  app.use("/", arenaConfig);
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};
