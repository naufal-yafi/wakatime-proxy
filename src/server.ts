import express, {
  type Request,
  type Response,
  type Application,
} from 'express';
import cors from 'cors';

const app: Application = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ msg: 'OK' });
});

app.listen(PORT, () => console.log(`Running on.. http://localhost:${PORT}`));
