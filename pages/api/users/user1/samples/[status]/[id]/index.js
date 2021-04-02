import samples from "@/public/data/users/user1/samples.json"
import specialties from "@/public/data/users/user1/specialties.json"
import socialMedia from "@/public/data/users/user1/socialMedia.json"
import contactInfo from "@/public/data/users/user1/contactInfo.json"
const currentUser = process.env.USER;

export default function userHandler(req, res) {
    const {query: { status, id }} = req;
    let sample = samples[status].filter(sample => sample.id === id);
    if(sample.length > 0){
        sample = sample[0];
    } else {
        sample = [];
    }
    res.status(200).json({
        contactInfo,
        currentUser,
        sample,
        specialties,
        socialMedia,
        status
    })
}