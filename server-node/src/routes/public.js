import express from 'express';
import { getProductService } from '@/grpc/grpc-client';
const router = express.Router();


router.get('/health', async (req, res) => {
  try {
    const productService = getProductService();
    const product = await productService.GetProduct({"id" : "1"} , (err, response) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      }
      res.json(response);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });    
  }
})



export default router