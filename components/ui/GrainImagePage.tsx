import grainImage from "@/assets/images/grain.webp";

export const GrainImagePage = () => {
    return (
        <div
      className="fixed inset-0 opacity-5 -z-10 pointer-events-none"
      style={{ backgroundImage: `url(${grainImage.src})` }}
    />
    )
}