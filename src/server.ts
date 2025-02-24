import express, {
  type Request,
  type Response,
  type Application,
} from 'express';
import cors from 'cors';
import type { WakatimeResponse } from './wakatime-response';

const app: Application = express();
const PORT = 3000;
const BASE_URL = 'https://wakatime.com/api/v1';

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ msg: 'OK' });
});

app.get('/stats/:username/:range', async (req: Request, res: Response) => {
  try {
    const { username, range } = req.params;
    const token = req.headers['x-api-token'] as string;

    const q = await fetch(`${BASE_URL}/users/${username}/stats/${range}`, {
      headers: {
        Authorization: `Basic ${Buffer.from(token).toString('base64')}`,
      },
    });

    res.status(200).json((await q.json()) as WakatimeResponse);
  } catch (error) {
    res.status(500).json({ errors: (error as Error).message });
  }
});

app.listen(PORT, () => console.log(`Running on.. http://localhost:${PORT}`));
