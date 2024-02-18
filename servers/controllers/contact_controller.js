// controllers/contactController.js

const Contact = require("../models/contact");

const contactForm = async (req, res) => {
    try {
        const {
            Username,
            AlooParatha,
            Maggi,
            Chowmine,
            Vegroll,
            Tea,
            Coffee,
            Cone,
            icecreambar
        } = req.body;

        const uniqueIdentifier = req.body.Username;
        if (!uniqueIdentifier) {
            return res.status(400).json({ message: "Username is required in the request body." });
        }

        const existingContact = await Contact.findOne({ Username: uniqueIdentifier });

        if (existingContact) {
            existingContact.AlooParatha = AlooParatha;
            existingContact.Maggi = Maggi;
            existingContact.Chowmine = Chowmine;
            existingContact.Vegroll = Vegroll;
            existingContact.Tea = Tea;
            existingContact.Coffee = Coffee;
            existingContact.Cone = Cone;
            existingContact.icecreambar = icecreambar;

            await existingContact.save();   

            const msg = "Message updated successfully";
            return res.status(200).json({ msg });
        } else {
            const newContact = await Contact.create({
                Username: uniqueIdentifier,
                AlooParatha,
                Maggi,
                Chowmine,
                Vegroll,
                Tea,
                Coffee,
                Cone,
                icecreambar,
                
            });

            const msg = "Message sent successfully";
            return res.status(200).json({ msg });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Message not sent successfully" });
    }
};

module.exports = contactForm;
