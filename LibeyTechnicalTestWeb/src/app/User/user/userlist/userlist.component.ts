import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LibeyUserService } from 'src/app/core/service/libeyuser/libeyuser.service';
import { LibeyUser } from 'src/app/entities/libeyuser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  users: LibeyUser[] = [];

  constructor(
    private libeyUserService: LibeyUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.libeyUserService.getAll().subscribe((resp) => {
      this.users = resp;
    });
  }

  add() {
    this.router.navigateByUrl('/user/maintenance');
  }

  delete(documentNumber: string) {
    Swal.fire({
      title: `¿Realmente deseas eliminar el usuario?`,
      text: 'Se borrará de forma permanente!',
      icon: 'warning',
      showCancelButton: true,
      focusCancel: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      width: 430,
    }).then((result) => {
      if (result.isConfirmed) {
        this.libeyUserService.delete(documentNumber).subscribe(() => {
          this.libeyUserService.getAll().subscribe((resp) => {
            this.users = resp;
          });
        });
      }
    });
  }
}
