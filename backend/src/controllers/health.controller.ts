import { Request, Response } from "express";

export const healthCheck = (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "AgriGuard API is running",
  });
};