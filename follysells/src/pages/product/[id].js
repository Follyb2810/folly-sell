import { useRouter } from 'next/router';

function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id)
  console.log(router)
  const dummyContent = `This is the dynamic content for ID: ${id}`;

  return (
    <div >
      <h1>Dynamic Page</h1>
      <p>{dummyContent}</p>
    </div>
  );
}

export default ProductDetails;
