export class UserResponseDto {
  _id: string;
  username: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}
