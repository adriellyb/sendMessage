const Email = require('../models/Email');
const nodemailer = require('nodemailer');

/** Create new register */
const create = async (req, res) => {
    console.log("1");
    try {
        const email = await Email.create(req.body);
        sendEmail(req.body.to, req.body.author, req.body.text);
        return res.status(200).json({ message: "Email enviado com sucesso!", email: email });
    }
    catch (err) {
        return res.status(500).json(`${err}`);
    }
}

/** List all registers */
const index = async (req, res) => {
    console.log("2");
    try {
        const emails = await Email.findAll();
        return res.status(200).json({ emails });
    }
    catch (err) {
        return res.status(500).json(`${err}`);
    }
}

/** Find a register by id */
const show = async (req, res) => {
    console.log("3");
    const { id } = req.params;
    try {
        const email = await Email.findByPk(id);
        return res.status(200).json({ email });
    }
    catch (err) {
        return res.status(500).json(`${err}`);
    }
}

/** Update register data */
const update = async (req, res) => {
    console.log("4");
    try {
        const { id } = req.params;

        const [updated] = await Email.update(req.body, {
            where: { id: id }
        });

        if (updated) {
            const email = await Email.findByPk(id);
            return res.status(200).send(email);
        }

        throw new Error('Registro não encontrado.');
    } catch (err) {
        return res.status(500).json(`${err}`);
    }
};

/** Delete a register */
const destroy = async (req, res) => {
    console.log("5");
    const { id } = req.params;
    try {
        const deleted = await Email.destroy({ where: { id } });

        if (deleted) {
            return res.status(200).json("Registro deletado com sucesso.");
        }

        throw new Error("Registro não encontrado.");
    } catch (err) {
        return res.status(500).json(`${err}`);
    }
};

const sendEmail = (to, author, text) => {
    const mailer = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: 'no-reply@sendmessage.com',
        to: to,
        subject: `📧 SendMessage: ${author} tem uma mensagem para você!`,
        text: text
    };

    mailer.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};
