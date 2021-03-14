import APIServer from "./APIServer";
import { Request, Response, Router } from "express";

const server = new APIServer();

class APIRoutes {
  @logRoute()
  @route("get", "/")
  public indexRoute(req: Request, res: Response) {
    return {
      Hello: "World",
    };
  }
}

function route(method: string, path: string): MethodDecorator {
  return function (
    target: any,
    propertyKeyL: string,
    descriptor: PropertyDescriptor
  ) {
    server.app[method](path, (req: Request, res: Response) => {
      res.status(200).json(descriptor.value(req, res));
    });
  };
}

function logRoute(): MethodDecorator {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      let req = args[0] as Request;
      console.log(`${req.url} ${req.method} Called`);
      return original.apply(this, args);
    };
  };
}

server.start();
