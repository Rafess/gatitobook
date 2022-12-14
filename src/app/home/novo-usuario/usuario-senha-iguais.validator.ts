import { FormGroup } from '@angular/forms';
export const usuarioSenhaIguais = (formGroup: FormGroup) => {
  const userName: string = formGroup.get('userName')?.value ?? '';
  const password: string = formGroup.get('password')?.value ?? '';

  if (userName.trim() + password.trim()) {
    return password.includes(userName) ? { senhaIgualUsuario: true } : null;
  }
  return null;
};
