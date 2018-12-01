import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(
    private router: Router,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'gallery',
      sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/mat-icons/baseline-photo_album-24px.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'collections',
      sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/mat-icons/baseline-add_a_photo-24px.svg'
      )
    );
  }

  ngOnInit() {}

  public navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
