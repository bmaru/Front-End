import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../services/collections.service';

@Component({
  selector: 'collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  collections: any[]

  constructor(private collectionsService: CollectionsService) { }

  ngOnInit(): void {
    this.collectionsService.listar().subscribe(resp => this.collections = Object.keys(resp.message));
  }

}

