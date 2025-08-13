export default function CleanBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Simple gradient background - Fixed position */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

      {/* Subtle grid pattern - Fixed position */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>
    </div>
  )
}
