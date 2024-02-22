import dbConnect from '../contact/dbConnect';
import Contact from '../contact/contact';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      const newContact = new Contact({ name, email, message });
      await newContact.save();
      res.status(201).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}