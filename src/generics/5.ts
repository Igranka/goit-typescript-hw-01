export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type PrefilledRoleDescription = Record<UserRole, string>;

const RoleDescription: PrefilledRoleDescription = {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
}
