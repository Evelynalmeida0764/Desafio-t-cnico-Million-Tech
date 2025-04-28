    import { Request, Response } from 'express';

class LoginController {
        async login(req: Request, res: Response) {
            const { usuario, senha } = req.body;

    // Credenciais fixas para validação
    const validUsuario = 'admin';
    const validSenha = 'admin';

    if (usuario === validUsuario && senha === validSenha) {
        return res.status(200).json({ message: 'Login bem-sucedido', token: 'fake-jwt-token' });
    } else {
        return res.status(401).json({ message: 'Credenciais inválidas' });
    }
        }
    };

export default LoginController;

