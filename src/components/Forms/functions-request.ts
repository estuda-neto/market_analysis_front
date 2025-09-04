const URL_FRONTEND: string = "http://localhost:3000/api";
const URL_BACKEND: string = "http://localhost:8080";

export class MessageError {
    private _message: string;

    constructor(message: string) {
        this._message = message;
    }
    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }
    public static isMessageError(obj: unknown): obj is MessageError {
        return (
            typeof obj === "object" &&
            obj !== null &&
            obj instanceof MessageError
        );
    }
}
export interface Response {
    statusCode: number;
    message: string;
}
export async function sendEmailServerSideProps(
    email: string
): Promise<Response> {
    try {
        const response = await fetch(URL_BACKEND + "/auth/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email }),
        });
        if (response.ok) {
            return {
                statusCode: 200,
                message: "email enviado com sucesso.",
            } as Response;
        } else if (response.status === 404) {
            return {
                statusCode: 404,
                message: "esse email não esta cadastrado no sistema.",
            } as Response;
        }
        return {
            statusCode: 400,
            message: "formato de email incooreto.",
        } as Response;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return {
            statusCode: 500,
            message: "o servidor não esta responedo.",
        } as Response;
    }
}

// redem password
export interface IFormInputRedem {
    token: string;
    password: string;
    confirpassword: string;
}
export async function sendRedemServerSideProps(
    data: IFormInputRedem
): Promise<Response> {
    try {
        const response = await fetch(URL_BACKEND + "/auth/redefinir", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // 'Authorization': 'Bearer seu_token_aqui'  // Se precisar de autenticação, descomente esta linha
            },
            body: JSON.stringify({
                token: data.token,
                password: data.password,
                rePassword: data.confirpassword,
            }),
        });

        if (response.ok) {
            return {
                statusCode: 200,
                message: "senha redefinida com sucesso.",
            } as Response;
        }

        return {
            statusCode: 404,
            message: "usuario não encontrado, ou token ivalido.",
        } as Response;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        // Erro de rede pode ocorrer nenhum status é retornado
        return {
            statusCode: 500,
            message: "o servidor deve estar fumando e não conseguiu respondeu.",
        } as Response;
    }
}

// register user
type FormRegister = {
    username: string;
    email: string;
    phone: string;
    cpf: string;
    password: string;
};
export interface IFormInput {
    name: string;
    email: string;
    telefone: string;
    cpf: string;
    password: string;
    repassword: string;
}
export async function registerUsuarioServerSideProps(data: IFormInput): Promise<Response> {
    try {
        const response = await fetch(URL_BACKEND + "/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: data.name,
                email: data.email,
                phone: data.telefone,
                cpf: data.cpf,
                password: data.password,
            } as FormRegister),
        });

        if (response.status === 201) {
            return {
                statusCode: 201,
                message: "registrado com sucesso.",
            } as Response;
        }
        return {
            statusCode: 400,
            message:
                "Ese email ja existe na aplicação, prossiga para redefinição de senha..",
        } as Response;
    } catch {
        return {
            statusCode: 500,
            message: "o servidor deve estar fumando e não conseguiu respondeu.",
        } as Response;
    }
}

export interface qrcodeData {
    username: string;
    cpf: string;
    valorOriginal: string;
}
export async function reqQrCode(
    data: qrcodeData
): Promise<string | MessageError> {
    const response = await fetch(URL_FRONTEND + "/pagamentos/qrcode", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (response.ok) {
        const qrCodeUrl = await response.json();
        return qrCodeUrl.svg;
    } else {
        return new MessageError("svg do qrCode não pode ser gerado.");
    }
}
