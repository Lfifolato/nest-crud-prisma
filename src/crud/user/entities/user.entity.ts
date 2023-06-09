export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
}

enum Role {
  'USER',
  'ADMIN',
}
