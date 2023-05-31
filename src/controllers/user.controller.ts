/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextFunction, Request, Response } from 'express';
import * as UserService from '../services/user.service';
import { any } from 'zod';
import HttpStatus from 'http-status-codes';

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const data = await UserService.find();
    res.send(data);
  } catch (error) {
    next(error);
  }
};

export const addUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const data = await UserService.create(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
};
export const deleteUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const data = await UserService.remove(req.params.id);
    res.send(data);
  } catch (error) {
    next(error);
  }
};
export const updateUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const data = await UserService.change(req.body, req.params.id);
    res.send(data);
  } catch (error) {
    next(error);
  }
};
