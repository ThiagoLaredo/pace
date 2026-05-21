import { Request, Response } from 'express';
import { mockServices } from '../data/mockServices';

export const getAllServices = (req: Request, res: Response): void => {
  res.json(mockServices);
};

export const getServiceById = (req: Request, res: Response): void => {
  const service = mockServices.find((s) => s.id === req.params.id);
  if (!service) {
    res.status(404).json({ message: 'Serviço não encontrado' });
    return;
  }
  res.json(service);
};
