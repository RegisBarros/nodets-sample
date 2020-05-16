import { Request, Response } from 'express';

import User from '../schemas/User';

class UserController {
  public async get (req: Request, res: Response): Promise<Response> {
    const users = await User.find();

    return res.json(users);
  }

  public async details (req: Request, res: Response): Promise<Response> {
    const user = await User.findById(req.params.id);

    if (!user) { return res.sendStatus(404); }

    return res.json(user);
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body);

    return res.json(user);
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const user = await User.findById(req.params.id);

    if (!user) { return res.sendStatus(404); }

    await user.update(req.body);

    return res.json(user);
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    const user = await User.findById(req.params.id);

    if (!user) { return res.sendStatus(404); }

    const result = await user.remove();

    if (!result.$isDeleted) { return res.sendStatus(400); }

    return res.sendStatus(200);
  }
}

export default new UserController();
