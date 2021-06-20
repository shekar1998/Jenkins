import express from 'express';
import cors from 'cors';
import connectionToDB from './connection-to-db';
import dotenv from 'dotenv';
import userRouter from './Routes/users-route';
import movieRouter from './Routes/movie-router';

dotenv.config();

const startServer = () => {
  const app: any = express();

  app.use(express.json());

  app.use(cors());

  const path = __dirname + '/views/';
  app.use(express.static(path));
  
  // app.use(express.static(path));



  connectionToDB()
    .then(() => {
      console.log('Connected to database');

      app.listen(process.env.PORT, () => {
        console.log(`Server Running at http://localhost:${process.env.PORT}`);
      });

      app.get('/', function (req:any,res:any) {
        res.sendFile(path + "index.html");
        });

      app.use('/api/users', userRouter);
      app.use('/api/movie', movieRouter);
    })
    .catch((err: any) => {
      console.log(err.message);
    });
};

startServer();
