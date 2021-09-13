const app = require('./src/app');

const mongoURI = process.env.MONGO_URI;

const mongoOptions = {
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(mongoURI, mongoOptions)
  .then(() => {
    console.log('connected');
  })
  .catch((err) => {
    console.log(`fail to connect with ${mongoURI}`);
    console.error(err);
  });

app.listen(8080, () => {
  console.log('listening on port 8080');
});
