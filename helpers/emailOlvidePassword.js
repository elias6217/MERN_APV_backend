import nodemailer from 'nodemailer';
import 'dotenv/config'

const emailOlvidePassword = async (datos) => {
    var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "fbdc6f209a1831",
          pass: "2ce20f911f57d1"
        }
      });
    
    const {email, nombre, token} = datos;

    // Enviar el email

    const info = await transporter.sendMail({
        from: "APV - Administrador de Pacientes de Veterinarios",
        to: email,
        subject: "Restablece tu Password",
        text: "Restablece tu Password",
        html: `<p>Hola: ${nombre}, has solicitado reestablecer tu password.</p>

            <p>Sigue el siguiente enlace para generar un nuevo password:
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a> </p>

            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
        `,
    });

    console.log('Mensaje enviado: %s', info.messageId);
};

export default emailOlvidePassword;