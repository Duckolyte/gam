import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,
  ) {
  }

  navigateToItem(item: any) {
    this.router.navigate([`${this.getCurrentUrl()}/${item.type}/${item.id}`]);
  }

  getCurrentUrl(): string {
    return this.router.url;
  }
}
