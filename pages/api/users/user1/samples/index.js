import samples from "@/public/data/users/user1/samples.json"
import socialMedia from "@/public/data/users/user1/socialMedia.json"
import contactInfo from "@/public/data/users/user1/contactInfo.json"
const currentUser = process.env.USER;

export default (req, res) => {
  res.status(200).json({
    contactInfo,
    currentUser,
    samples,
    socialMedia
  })
}
