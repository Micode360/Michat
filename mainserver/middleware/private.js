


exports.protect = async (req, res, next) => {
    return res.status(200).json({ message: "Await logic via microservice" });
}