export default async function Index({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;

  return (
    <>
      <iframe
        width="100%"
        height="100%"
        className="min-h-screen"
        src={`https://becaneeeweedinginvitation.netlify.app/?to=${name ? name : "Invited Guests"}`}
        title="Tekno Music"
        allowFullScreen
      />
    </>
  );
}
