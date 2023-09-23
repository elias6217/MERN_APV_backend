import nodemailer from 'nodemailer';
import 'dotenv/config'

const emailRegistro = async (datos) => {
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
        subject: "Comprueba tu cuenta en APV",
        text: "Comprueba tu cuenta en APV",
        html: `<p>Hola: ${nombre}, comprueba tu cuenta en APV.</p>
            <p>Tu cuenta ya esta lista, solo debes comprobarla en el siguiente enlace:
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a> </p>

            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
        `,
    });

    console.log('Mensaje enviado: %s', info.messageId);
};

export default emailRegistro;