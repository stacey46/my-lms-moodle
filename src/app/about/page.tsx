export default function AboutPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>About Me</h1>
      <p>Name: Stacey Jepkemoi</p>
      <p>Student Number: 21887929</p>

      <h2>Demo Video</h2>
      <video width="600" controls>
        <source src="/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p>
        Back to <a href="/" style={{ color: "blue" }}>Homepage</a>
      </p>
    </main>
  );
}
