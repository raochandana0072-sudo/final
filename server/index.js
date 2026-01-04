import express from 'express';
import cors from 'cors';
import Razorpay from 'razorpay';

const app = express();
app.use(cors());
app.use(express.json());

const key_id = process.env.RAZORPAY_KEY_ID;
const key_secret = process.env.RAZORPAY_KEY_SECRET;

if (!key_id || !key_secret) {
  console.warn('Razorpay keys are not set. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to enable order creation.');
}

const razorpay = key_id && key_secret ? new Razorpay({ key_id, key_secret }) : null;

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/create-order', async (req, res) => {
  try {
    if (!razorpay) return res.status(500).json({ error: 'Razorpay not configured' });
    const { amount, currency = 'INR' } = req.body || {};
    if (!amount || typeof amount !== 'number') return res.status(400).json({ error: 'Invalid amount' });

    const order = await razorpay.orders.create({ amount, currency });
    res.json(order);
  } catch (err) {
    console.error('Order creation failed', err);
    res.status(500).json({ error: 'Order creation failed' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
