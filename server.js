const Arena = require("bull-arena");
const Bee = require("bee-queue");
const barRoutes = require("./src/bar/routes");

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
  barRoutes(app);

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};
