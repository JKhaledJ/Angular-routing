import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { ServersService } from "../servers.service";

interface ServerInterface{
    id: number;
    name: string; 
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<ServerInterface>{
    constructor(private serverService: ServersService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<ServerInterface> | Promise<ServerInterface> | ServerInterface{
       return this.serverService.getServer(+route.params['id']);
    }
}