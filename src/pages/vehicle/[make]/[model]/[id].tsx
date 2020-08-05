export default function CarDetails({ faq }) {
  return (
    <>
      <p>{JSON.stringify(faq)}</p>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const url = "http://localhost:5000/api/v1/fags";
  const res = await fetch(`${url}/${ctx.params.id}`);
  const faq = await res.json();
  const obj = {
    make: ctx.params.make,
    model: ctx.params.model,
    id: ctx.params.id,
  };

  return {
    props: { faq },
  };
};
