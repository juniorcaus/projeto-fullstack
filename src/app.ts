import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

class App {
  public app: express.Application;

  public constructor() {
    this.app = express();
    this.app.use(cors());

    this.initMongoose();
    this.connectDatabase();
  }

  private initMongoose(): void {
    mongoose.set('runValidators', true);
  }

  private connectDatabase(): void {
    mongoose.connect('mongodb+srv://juniorcaus:xrzsYcs55jF87WBp@cluster0.rgqgz.mongodb.net/projeto-fullstack?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  }

  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Aplicação iniciada na porta: ${port}`);
    });
  }
}

export default App;
