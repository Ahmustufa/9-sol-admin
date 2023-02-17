import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  if (req.method === "POST") {
    const db = client.db("9Sol");
    if(Array.isArray(req.body)){
        let web = await db.collection("package_model").insertMany(req.body);
        // console.log("web", web);
        return res.status(200).json(req.body);
    }
    else {
        return res.status(400).json({message: "Invalid Field format"})
    }
  } else {
    return res.status(401).json({ message: "Invalid HTTP Header" });
  }
}
