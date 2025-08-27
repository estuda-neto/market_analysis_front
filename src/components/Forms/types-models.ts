type UserRole = "ADMIN" | "USER";
type Status = "ANUNCIADO" | "PENDENTE" | "SEGUIU_PARA_ANALISE" | "ANALISADO" | "INVALIDO";
type Usuario = {
    usuarioId: string, username: string, image: string, phone: string, totalStars: number, cpf: string, email: string, password: string, role: UserRole,
    token: string, createdAt: Date, authorities: [{ authority: string }], accountNonExpired: true, accountNonLocked: true, credentialsNonExpired: true, enabled: true
};

export type { Usuario, UserRole, Status};