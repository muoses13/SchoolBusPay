// lib/admins.ts
import fs from 'fs';
import path from 'path';

const adminsFilePath = path.join(process.cwd(), 'admins.json');

export interface Admin {
  id: string;
  name: string;
  email: string;
}

export const getAdmins = (): Admin[] => {
  if (!fs.existsSync(adminsFilePath)) {
    return [];
  }

  const fileContent = fs.readFileSync(adminsFilePath, 'utf-8');
  return JSON.parse(fileContent);
};

export const addAdmin = (newAdmin: Omit<Admin, 'id'>) => {
  const admins = getAdmins();
  const newId = (admins.length > 0 ? Math.max(...admins.map(a => parseInt(a.id))) : 0) + 1;
  const adminToAdd: Admin = { ...newAdmin, id: newId.toString() };
  const updatedAdmins = [...admins, adminToAdd];

  fs.writeFileSync(adminsFilePath, JSON.stringify(updatedAdmins, null, 2));
  return adminToAdd;
};
