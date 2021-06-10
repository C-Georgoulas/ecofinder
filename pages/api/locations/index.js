import dbConnect from "../../../utils/dbConnect";
import Place from "../../../models/Place";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const places = await Place.find({});

        res.status(200).json(places);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const newPlace = new Place({
          name: req.body.name,
          description: req.body.description,
          lat: req.body.lat,
          lng: req.body.lng,
          verified: req.body.verified,
        });
        const place = await newPlace.save();
        res.status(201).json({ success: true, data: place });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
