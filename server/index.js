import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import galleryRoutes from './routes/galleryRoute.js'

const app =express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/gallery', galleryRoutes);

const CONNECTION_URL = 'mongodb+srv://sftdev16:mersat123@maincluster.4woyg.mongodb.net/test?authSource=admin&replicaSet=atlas-9tpctr-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

  mongoose.set('useFindAndModify', false);