import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    // const id= +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (myparams:Params)=>{
    //     this.server=this.serversService.getServer(+myparams['id']);
    //   }
    // );

    this.route.data.subscribe(
      (myData: Data)=>{
        this.server = myData['server'];
      }
    );
  }

  OnEdit(){
    this.router.navigate(['edit'], {relativeTo:this.route, queryParamsHandling:'preserve'});
  }

}
